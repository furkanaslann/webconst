import type { ImageMetadata } from 'astro';
import { serviceImageUrls } from './serviceImages';

export interface HeroSlide {
  id: string;
  title: string;
  description: string; // Kart açıklaması
  image: ImageMetadata; // `src/assets/main/` görsel metadatası
  icon?: string;       // İkon adı (opsiyonel)
  ctaText?: string;
  ctaLink?: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: '1',
    title: 'Güçlendirme',
    description: 'Binalarınızın deprem performansını artırmak için profesyonel güçlendirme çözümleri sunuyoruz.',
    image: serviceImageUrls.guclendirmeCalismalar,
    ctaText: 'Güçlendirme Hizmetini İncele',
    ctaLink: '/hizmetler#guclendirme-calismalari',
  },
  {
    id: '2',
    title: 'Su Yalıtımı',
    description: 'Teras, bodrum ve kat aralarında kapsamlı su yalıtım uygulamaları ile yapılarınızı koruyoruz.',
    image: serviceImageUrls.suYalitimHizmetler,
    ctaText: 'Su Yalıtımını İncele',
    ctaLink: '/hizmetler#su-yalitim',
  },
  {
    id: '3',
    title: 'Zemin Kaplama',
    description: 'Endüstriyel ve dekoratif zemin kaplama çözümleri ile uzun ömürlü yüzeyler oluşturuyoruz.',
    image: serviceImageUrls.zeminKaplamaSistem,
    ctaText: 'Zemin Kaplamayı İncele',
    ctaLink: '/hizmetler#zemin-kaplama',
  },
  {
    id: '4',
    title: 'Anahtar Teslim',
    description: 'Projenizi planlamadan teslim aşamasına kadar tek elden yöneterek eksiksiz anahtar teslim çözümler sunuyoruz.',
    image: serviceImageUrls.anaSayfaAnahtarTeslim,
    ctaText: 'Anahtar Teslimi İncele',
    ctaLink: '/hizmetler#anahtar-teslim',
  },
];
