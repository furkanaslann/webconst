import type { ImageMetadata } from 'astro';
import { hizmetPhotoUrls, serviceImageUrls } from './serviceImages';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
  image: ImageMetadata;
  features: string[];
  category: 'yapisal-teknik' | 'mimari-dekoratif';
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Güçlendirme Çalışmaları',
    description: 'Binaların deprem yönetmeliğine uygun olarak güçlendirilmesi ve yapısal performans artırımı hizmetleri',
    icon: 'building',
    slug: 'guclendirme-calismalari',
    image: hizmetPhotoUrls.guclendirme,
    features: [
      'Bina Güçlendirme',
      'Deprem Analizi',
      'Yapısal Performans Artırımı',
      'Laboratuvar Testleri',
      'Proje ve Uygulama',
    ],
    category: 'yapisal-teknik',
  },
  {
    id: '2',
    title: 'Su Yalıtım Hizmetleri',
    description: 'Tüm yapı elemanları için profesyonel su yalıtım çözümleri ve uygulamaları',
    icon: 'water',
    slug: 'su-yalitim',
    image: hizmetPhotoUrls.suYalitim,
    features: [
      'Temel Su Yalıtımı',
      'Teras ve Balkon Yalıtımı',
      'Havuz Yalıtımı',
      'Çatı Yalıtımı',
      'Perde Duvar Yalıtımı',
    ],
    category: 'yapisal-teknik',
  },
  {
    id: '3',
    title: 'Zemin Kaplama Sistemleri',
    description: 'Endüstriyel ve ticari alanlar için dayanıklı zemin kaplama çözümleri',
    icon: 'flooring',
    slug: 'zemin-kaplama',
    image: hizmetPhotoUrls.zeminKaplama,
    features: [
      'Epoxy Zemin Kaplama',
      'Poliüretan Kaplama',
      'Kendinden Yaylı Zeminler',
      'Endüstriyel Zemin Çözümleri',
      'Zemin Tamir ve Bakım',
    ],
    category: 'yapisal-teknik',
  },
  {
    id: '4',
    title: 'Yapı Kimyasalları',
    description: 'Yapı sektöründe kullanılan tüm kimyasal ürünler ve uygulama hizmetleri',
    icon: 'chemical',
    slug: 'yapi-kimyasallari',
    image: serviceImageUrls.yapiKimyasallari,
    features: [
      'Silan & Siloksan',
      'Sızdırmazlık Malzemeleri',
      'Yapıştırıcılar',
      'Katkı Maddeleri',
      'Koruyucu Kimyasallar',
    ],
    category: 'yapisal-teknik',
  },
  {
    id: '5',
    title: 'Tadilat ve Yenileme Hizmetleri',
    description: 'Konut ve ticari alanlarda mekanın ihtiyaçlarına uygun kapsamlı tadilat ve modernizasyon uygulamaları',
    icon: 'renovation',
    slug: 'tadilat-ve-yenileme',
    image: hizmetPhotoUrls.tadilatYenileme,
    features: [
      'Banyo ve Mutfak Yenileme',
      'İç Mekan Fonksiyonel Dönüşüm',
      'Elektrik ve Tesisat Revizyonu',
      'Duvar ve Tavan Yenileme',
      'Anahtar Teslim Tadilat Süreci',
    ],
    category: 'mimari-dekoratif',
  },
  {
    id: '6',
    title: 'İç ve Dış Cephe Boya Uygulamaları',
    description: 'Yüzeye ve kullanım senaryosuna uygun profesyonel boya çözümleriyle uzun ömürlü ve estetik sonuçlar',
    icon: 'paint',
    slug: 'ic-dis-cephe-boya',
    image: hizmetPhotoUrls.cepheBoyama,
    features: [
      'İç Cephe Boya Uygulamaları',
      'Dış Cephe Dayanımlı Boyalar',
      'Yüzey Hazırlık ve Astarlama',
      'Nem ve Küf Önleyici Çözümler',
      'Konut ve Ticari Mekan Boyama',
    ],
    category: 'mimari-dekoratif',
  },
  {
    id: '7',
    title: 'Alçı, Alçıpan ve Betopan Sistemleri',
    description: 'Bölme, kaplama ve tavan çözümlerinde düzgün yüzey, estetik görünüm ve hızlı uygulama sağlayan sistemler',
    icon: 'interior',
    slug: 'alci-alcipan-betopan',
    image: hizmetPhotoUrls.alciAlcipan,
    features: [
      'Asma Tavan Uygulamaları',
      'Bölme Duvar Sistemleri',
      'Dekoratif Alçı Çözümleri',
      'Betopan Kaplama Uygulamaları',
      'Ses ve Isı Performansı Odaklı Detaylar',
    ],
    category: 'mimari-dekoratif',
  },
  {
    id: '8',
    title: 'Dış Cephe Mantolama ve Isı Yalıtımı',
    description: 'Enerji verimliliğini artıran ve yapı kabuğunu koruyan dış cephe mantolama sistemlerinin projelendirme ve uygulaması',
    icon: 'insulation',
    slug: 'dis-cephe-mantolama-isi-yalitimi',
    image: hizmetPhotoUrls.cepheMantolama,
    features: [
      'EPS ve Taş Yünü Sistemleri',
      'Cephe Isı Köprüsü Analizi',
      'Dekoratif Dış Cephe Kaplamaları',
      'Uzun Ömürlü Cephe Koruması',
      'Enerji Tasarrufu Odaklı Uygulama',
    ],
    category: 'yapisal-teknik',
  },
  {
    id: '9',
    title: 'Çatı Yapımı ve Çatı Yenileme',
    description: 'Yeni yapılarda çatı sistem kurulumu ve mevcut yapılarda su-ısı performansını artıran yenileme çözümleri',
    icon: 'roof',
    slug: 'cati-yapimi-ve-yenileme',
    image: hizmetPhotoUrls.catiYenileme,
    features: [
      'Yeni Çatı Sistem Kurulumu',
      'Çatı Su Yalıtımı Revizyonu',
      'Isı Yalıtımı ve Buhar Dengesi',
      'Kiremit ve Kaplama Yenileme',
      'Detay Noktalarında Sızdırmazlık',
    ],
    category: 'yapisal-teknik',
  },
  {
    id: '10',
    title: 'Anahtar Teslim Proje Yönetimi',
    description: 'Keşiften teslimata kadar tüm teknik ve operasyonel süreci tek noktadan yöneten bütüncül proje hizmeti',
    icon: 'turnkey',
    slug: 'anahtar-teslim-proje-yonetimi',
    image: hizmetPhotoUrls.anahtarTeslim,
    features: [
      'Keşif ve İhtiyaç Analizi',
      'Uygulama Takvimi ve Bütçe Planı',
      'Disiplinler Arası Koordinasyon',
      'Saha Kalite Kontrol Süreçleri',
      'Zamanında Teslim ve Son Kontrol',
    ],
    category: 'mimari-dekoratif',
  },
];
