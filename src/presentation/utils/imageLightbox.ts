interface LightboxItem {
  src: string;
  alt: string;
  title?: string;
  meta?: string;
  description?: string;
}

const LIGHTBOX_ROOT_ID = 'isolated-image-lightbox';
let activeGroupItems: LightboxItem[] = [];
let activeIndex = 0;

function ensureLightboxRoot(): HTMLElement {
  const existing = document.getElementById(LIGHTBOX_ROOT_ID);
  if (existing) {
    return existing;
  }

  const root = document.createElement('div');
  root.id = LIGHTBOX_ROOT_ID;
  root.className = 'fixed inset-0 z-[100] hidden';
  root.innerHTML = `
    <div data-lightbox-backdrop class="absolute inset-0 bg-black/85"></div>
    <div class="absolute inset-0 flex items-center justify-center p-4 md:p-8">
      <button
        type="button"
        data-lightbox-close
        class="absolute right-4 top-4 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Görseli kapat"
      >
        <span aria-hidden="true" class="text-2xl leading-none">&times;</span>
      </button>
      <button
        type="button"
        data-lightbox-prev
        class="absolute left-4 top-1/2 -translate-y-1/2 hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Önceki görsel"
      >
        <span aria-hidden="true" class="text-2xl leading-none">&#8249;</span>
      </button>
      <img
        data-lightbox-image
        src=""
        alt=""
        class="max-h-[90vh] w-auto max-w-full rounded-lg object-contain"
      />
      <div data-lightbox-info class="pointer-events-none absolute inset-x-4 bottom-4 hidden rounded-lg bg-black/65 p-4 text-white md:inset-x-8">
        <p data-lightbox-title class="text-base font-semibold"></p>
        <p data-lightbox-meta class="mt-1 text-sm text-neutral-200"></p>
        <p data-lightbox-description class="mt-2 text-sm leading-relaxed text-neutral-100"></p>
      </div>
      <button
        type="button"
        data-lightbox-next
        class="absolute right-4 top-1/2 -translate-y-1/2 hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Sonraki görsel"
      >
        <span aria-hidden="true" class="text-2xl leading-none">&#8250;</span>
      </button>
    </div>
  `;

  document.body.appendChild(root);
  return root;
}

function renderActiveImage(root: HTMLElement): void {
  const imageEl = root.querySelector<HTMLImageElement>('[data-lightbox-image]');
  const prevButton = root.querySelector<HTMLButtonElement>('[data-lightbox-prev]');
  const nextButton = root.querySelector<HTMLButtonElement>('[data-lightbox-next]');
  const infoWrap = root.querySelector<HTMLElement>('[data-lightbox-info]');
  const titleEl = root.querySelector<HTMLElement>('[data-lightbox-title]');
  const metaEl = root.querySelector<HTMLElement>('[data-lightbox-meta]');
  const descriptionEl = root.querySelector<HTMLElement>('[data-lightbox-description]');

  if (
    !imageEl ||
    !prevButton ||
    !nextButton ||
    !infoWrap ||
    !titleEl ||
    !metaEl ||
    !descriptionEl ||
    activeGroupItems.length === 0
  ) {
    return;
  }

  const current = activeGroupItems[activeIndex];
  imageEl.src = current.src;
  imageEl.alt = current.alt;

  const hasMultiple = activeGroupItems.length > 1;
  prevButton.classList.toggle('hidden', !hasMultiple);
  nextButton.classList.toggle('hidden', !hasMultiple);

  titleEl.textContent = current.title ?? '';
  metaEl.textContent = current.meta ?? '';
  descriptionEl.textContent = current.description ?? '';

  const hasInfo = Boolean(current.title || current.meta || current.description);
  infoWrap.classList.toggle('hidden', !hasInfo);
  titleEl.classList.toggle('hidden', !current.title);
  metaEl.classList.toggle('hidden', !current.meta);
  descriptionEl.classList.toggle('hidden', !current.description);
}

function closeLightbox(root: HTMLElement): void {
  root.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
  activeGroupItems = [];
  activeIndex = 0;
}

function openLightbox(root: HTMLElement, groupItems: LightboxItem[], startIndex: number): void {
  if (groupItems.length === 0) {
    return;
  }
  activeGroupItems = groupItems;
  activeIndex = startIndex;
  renderActiveImage(root);
  root.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function bindRootEvents(root: HTMLElement): void {
  if (root.dataset.bound === 'true') {
    return;
  }

  root.dataset.bound = 'true';

  const closeButton = root.querySelector<HTMLButtonElement>('[data-lightbox-close]');
  const backdrop = root.querySelector<HTMLElement>('[data-lightbox-backdrop]');
  const prevButton = root.querySelector<HTMLButtonElement>('[data-lightbox-prev]');
  const nextButton = root.querySelector<HTMLButtonElement>('[data-lightbox-next]');

  closeButton?.addEventListener('click', () => closeLightbox(root));
  backdrop?.addEventListener('click', () => closeLightbox(root));

  prevButton?.addEventListener('click', () => {
    if (activeGroupItems.length <= 1) return;
    activeIndex = (activeIndex - 1 + activeGroupItems.length) % activeGroupItems.length;
    renderActiveImage(root);
  });

  nextButton?.addEventListener('click', () => {
    if (activeGroupItems.length <= 1) return;
    activeIndex = (activeIndex + 1) % activeGroupItems.length;
    renderActiveImage(root);
  });

  document.addEventListener('keydown', (event) => {
    if (root.classList.contains('hidden')) return;
    if (event.key === 'Escape') {
      closeLightbox(root);
      return;
    }
    if (event.key === 'ArrowLeft' && activeGroupItems.length > 1) {
      activeIndex = (activeIndex - 1 + activeGroupItems.length) % activeGroupItems.length;
      renderActiveImage(root);
      return;
    }
    if (event.key === 'ArrowRight' && activeGroupItems.length > 1) {
      activeIndex = (activeIndex + 1) % activeGroupItems.length;
      renderActiveImage(root);
    }
  });
}

function getGroupItems(groupId: string): LightboxItem[] {
  const selector = `[data-lightbox-item][data-lightbox-group="${groupId}"]`;
  const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector));
  return nodes
    .map((node) => ({
      src: node.dataset.lightboxSrc ?? '',
      alt: node.dataset.lightboxAlt ?? '',
      title: node.dataset.lightboxTitle ?? '',
      meta: node.dataset.lightboxMeta ?? '',
      description: node.dataset.lightboxDescription ?? '',
    }))
    .filter((item) => item.src.length > 0);
}

export function initIsolatedImageLightbox(scope: ParentNode = document): void {
  const root = ensureLightboxRoot();
  bindRootEvents(root);

  const triggers = Array.from(scope.querySelectorAll<HTMLElement>('[data-lightbox-item]'));
  triggers.forEach((trigger) => {
    if (trigger.dataset.lightboxBound === 'true') {
      return;
    }
    trigger.dataset.lightboxBound = 'true';

    const openHandler = () => {
      const groupId = trigger.dataset.lightboxGroup;
      if (!groupId) return;
      const groupItems = getGroupItems(groupId);
      const currentSrc = trigger.dataset.lightboxSrc ?? '';
      const currentIndex = Math.max(
        0,
        groupItems.findIndex((item) => item.src === currentSrc)
      );
      openLightbox(root, groupItems, currentIndex);
    };

    trigger.addEventListener('click', openHandler);
    trigger.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openHandler();
    });
  });
}
