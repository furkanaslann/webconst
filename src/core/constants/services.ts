export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
  image: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Güçlendirme Çalışmaları',
    description: 'Binaların deprem yönetmeliğine uygun olarak güçlendirilmesi ve yapısal performans artırımı hizmetleri',
    icon: 'building',
    slug: 'guclendirme-calismalari',
    image: '/docs/images/Güçlendirme Çalışmal.png',
    features: [
      'Bina Güçlendirme',
      'Deprem Analizi',
      'Yapısal Performans Artırımı',
      'Laboratuvar Testleri',
      'Proje ve Uygulama',
    ],
  },
  {
    id: '2',
    title: 'Su Yalıtım Hizmetleri',
    description: 'Tüm yapı elemanları için profesyonel su yalıtım çözümleri ve uygulamaları',
    icon: 'water',
    slug: 'su-yalitim',
    image: '/docs/images/Su Yalıtım Hizmetler.png',
    features: [
      'Temel Su Yalıtımı',
      'Teras ve Balkon Yalıtımı',
      'Havuz Yalıtımı',
      'Çatı Yalıtımı',
      'Perde Duvar Yalıtımı',
    ],
  },
  {
    id: '3',
    title: 'Zemin Kaplama Sistemleri',
    description: 'Endüstriyel ve ticari alanlar için dayanıklı zemin kaplama çözümleri',
    icon: 'flooring',
    slug: 'zemin-kaplama',
    image: '/docs/images/Zemin Kaplama Sistem.png',
    features: [
      'Epoxy Zemin Kaplama',
      'Poliüretan Kaplama',
      'Kendinden Yaylı Zeminler',
      'Endüstriyel Zemin Çözümleri',
      'Zemin Tamir ve Bakım',
    ],
  },
  {
    id: '4',
    title: 'Yapı Kimyasalları',
    description: 'Yapı sektöründe kullanılan tüm kimyasal ürünler ve uygulama hizmetleri',
    icon: 'chemical',
    slug: 'yapi-kimyasallari',
    image: '/docs/images/Yapı Kimyasallar.png',
    features: [
      'Silan & Siloksan',
      'Sızdırmazlık Malzemeleri',
      'Yapıştırıcılar',
      'Katkı Maddeleri',
      'Koruyucu Kimyasallar',
    ],
  },
];
