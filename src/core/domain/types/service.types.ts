export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Web Geliştirme',
    description: 'Modern web teknolojileri ile geliştirme hizmetleri',
    icon: 'code',
    slug: 'web-gelistirme',
  },
  {
    id: '2',
    title: 'UI/UX Tasarım',
    description: 'Kullanıcı odaklı arayüz tasarımı',
    icon: 'design',
    slug: 'ui-ux-tasarim',
  },
  {
    id: '3',
    title: 'SEO Optimizasyonu',
    description: 'Arama motoru optimizasyonu hizmetleri',
    icon: 'search',
    slug: 'seo-optimizasyonu',
  },
];
