adimproje-web/
├── public/                 # Favicon, statik resimler, fontlar (Derlenmeyen dosyalar)
├── src/
│   ├── core/               # BİZİM CLEAN ARCHITECTURE MERKEZİMİZ
│   │   ├── domain/         # Varlıklar ve Tipler (Entities, TypeScript Interfaces)
│   │   ├── application/    # İş Mantığı (Use Cases, Custom React Hooks, Validation)
│   │   └── infrastructure/ # Dışa Bağımlılıklar (Netlify Forms API, HTTP Client, LocalStorage)
│   │
│   ├── presentation/       # ARAYÜZ KATMANI
│   │   ├── components/
│   │   │   ├── ui/         # Saf, aptal (dumb) React/Astro bileşenleri (Button, Input)
│   │   │   └── blocks/     # Akıllı (smart) ve birleşik bileşenler (ContactForm, HeroSection)
│   │   ├── layouts/        # Sayfa iskeletleri (BaseLayout.astro, Header, Footer)
│   │   └── styles/         # Global CSS / Tailwind konfigürasyonları
│   │
│   └── pages/              # ASTRO ROUTING (URL Yapısı)
│       ├── index.astro     # anasayfa (adimproje.com.tr/)
│       ├── hizmetler.astro # (adimproje.com.tr/hizmetler)
│       └── iletisim.astro  # (adimproje.com.tr/iletisim)
│
├── astro.config.mjs        # Astro temel ayarları
├── tailwind.config.cjs     # Varsa Tailwind ayarları
└── tsconfig.json           # TypeScript ayarları (Kesinlikle TS kullanmalıyız)