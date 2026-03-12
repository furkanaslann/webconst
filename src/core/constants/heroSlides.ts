export interface HeroSlide {
  id: string;
  title: string;
  image: string;       // docs/images/path
  icon?: string;       // İkon adı (opsiyonel)
}

export const heroSlides: HeroSlide[] = [
  {
    id: '1',
    title: 'Güçlendirme Çalışmaları',
    image: '/docs/images/Güçlendirme Çalışmal.png',
  },
  {
    id: '2',
    title: 'Su Yalıtım Hizmetleri',
    image: '/docs/images/Su Yalıtım Hizmetler.png',
  },
  {
    id: '3',
    title: 'Zemin Kaplama Sistemleri',
    image: '/docs/images/Zemin Kaplama Sistem.png',
  },
  {
    id: '4',
    title: 'Yapı Kimyasalları',
    image: '/docs/images/Yapı Kimyasallar.png',
  },
];
