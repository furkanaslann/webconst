interface AnimationConfig {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Intersection Observer ile scroll-triggered animasyonları başlatır
 */
export function observeScrollAnimations(
  selector: string,
  config: AnimationConfig = {}
): IntersectionObserver {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', once = true } = config;
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        if (once) observer.unobserve(entry.target);
      }
    });
  }, { threshold, rootMargin });

  elements.forEach(el => observer.observe(el));
  return observer;
}

/**
 * Grid items için staggered (sıralı) animasyon başlatır
 */
export function observeStaggeredAnimations(
  selector: string,
  staggerDelay: number = 100
): IntersectionObserver {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el, index) => {
    (el as HTMLElement).style.setProperty('--stagger-delay', `${index * staggerDelay}ms`);
  });
  return observeScrollAnimations(selector);
}

/**
 * Counter animasyonu - 0'dan final değere sayma
 */
export function animateCounters(selector: string, duration: number = 2000): void {
  const counters = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        const finalValue = parseInt(target.dataset.value || '0', 10);
        animateValue(target, 0, finalValue, duration);
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => observer.observe(el));
}

function animateValue(element: HTMLElement, start: number, end: number, duration: number): void {
  const range = end - start;
  const startTime = performance.now();

  function update(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (range * easeProgress));
    element.textContent = formatNumber(current);
    if (progress < 1) requestAnimationFrame(update);
    else element.textContent = formatNumber(end);
  }
  requestAnimationFrame(update);
}

function formatNumber(num: number): string {
  return num.toLocaleString('tr-TR');
}
