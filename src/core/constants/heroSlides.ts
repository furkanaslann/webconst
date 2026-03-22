export interface HeroSlide {
  id: string;
  title: string;
  description: string; // Kart açıklaması
  image: string;       // docs/images/path
  icon?: string;       // İkon adı (opsiyonel)
}

export const heroSlides: HeroSlide[] = [
  {
    id: '1',
    title: 'Güçlendirme Çalışmaları',
    description: 'Binalarınızın deprem performansını artırmak için profesyonel güçlendirme çözümleri sunuyoruz.',
    image: '/docs/images/Güçlendirme Çalışmal.png',
  },
  {
    id: '2',
    title: 'Su Yalıtım Hizmetleri',
    description: 'Teras, bodrum ve kat aralarında kapsamlı su yalıtım uygulamaları ile yapılarınızı koruyoruz.',
    image: '/docs/images/Su Yalıtım Hizmetler.png',
  },
  {
    id: '3',
    title: 'Zemin Kaplama Sistemleri',
    description: 'Endüstriyel ve dekoratif zemin kaplama çözümleri ile uzun ömürlü yüzeyler oluşturuyoruz.',
    image: '/docs/images/Zemin Kaplama Sistem.png',
  },
  {
    id: '4',
    title: 'Yapı Kimyasalları',
    description: 'Yüksek kaliteli yapı kimyasalları ile inşaat projelerinizde güvenilir çözümler sunuyoruz.',
    image: '/docs/images/Yapı Kimyasallar.png',
  },
];
