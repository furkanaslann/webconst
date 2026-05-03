import { serviceImageUrls } from './serviceImages';

export interface HeroSlide {
  id: string;
  title: string;
  description: string; // Kart açıklaması
  image: string;       // işlenmiş asset URL (`src/assets/main/`)
  icon?: string;       // İkon adı (opsiyonel)
  ctaText?: string;
  ctaLink?: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: '1',
    title: 'Güçlendirme Çalışmaları',
    description: 'Binalarınızın deprem performansını artırmak için profesyonel güçlendirme çözümleri sunuyoruz.',
    image: serviceImageUrls.guclendirmeCalismalar,
    ctaText: 'Güçlendirme Hizmetini İncele',
    ctaLink: '/hizmetler#guclendirme-calismalari',
  },
  {
    id: '2',
    title: 'Su Yalıtım Hizmetleri',
    description: 'Teras, bodrum ve kat aralarında kapsamlı su yalıtım uygulamaları ile yapılarınızı koruyoruz.',
    image: serviceImageUrls.suYalitimHizmetler,
    ctaText: 'Su Yalıtımını İncele',
    ctaLink: '/hizmetler#su-yalitim',
  },
  {
    id: '3',
    title: 'Zemin Kaplama Sistemleri',
    description: 'Endüstriyel ve dekoratif zemin kaplama çözümleri ile uzun ömürlü yüzeyler oluşturuyoruz.',
    image: serviceImageUrls.zeminKaplamaSistem,
    ctaText: 'Zemin Kaplamayı İncele',
    ctaLink: '/hizmetler#zemin-kaplama',
  },
  {
    id: '4',
    title: 'Yapı Kimyasalları',
    description: 'Yüksek kaliteli yapı kimyasalları ile inşaat projelerinizde güvenilir çözümler sunuyoruz.',
    image: serviceImageUrls.yapiKimyasallari,
    ctaText: 'Yapı Kimyasallarını İncele',
    ctaLink: '/hizmetler#yapi-kimyasallari',
  },
];
