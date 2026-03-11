# Site Structure Documentation

## Project Folder Structure

```
webconst/
├── public/                 # Favicon, statik resimler, fontlar (Derlenmeyen dosyalar)
├── src/
│   ├── core/               # CLEAN ARCHITECTURE MERKEZİ
│   │   ├── constants/      # Uygulama sabitleri
│   │   │   └── services.ts # Hizmetlerin tanımlandığı dosya
│   │   ├── domain/         # Varlıklar ve Tipler (Entities, TypeScript Interfaces)
│   │   │   ├── entities/   # Domain varlıkları
│   │   │   │   └── contact-form.entity.ts
│   │   │   └── types/      # TypeScript tip tanımlamaları
│   │   │       ├── contact.types.ts
│   │   │       └── service.types.ts
│   │   ├── application/    # İş Mantığı (Use Cases, Custom React Hooks, Validation)
│   │   │   ├── use-cases/  # Use Case'ler
│   │   │   │   └── submit-contact.usecase.ts
│   │   │   └── validators/ # Doğrulama mantığı
│   │   │       ├── contact.validator.ts
│   │   │       └── email.validator.ts
│   │   └── infrastructure/ # Dışa Bağımlılıklar (Netlify Forms API, HTTP Client, LocalStorage)
│   │       ├── netlify/    # Netlify entegrasyonu
│   │       │   └── forms.service.ts
│   │       └── storage/    # Local Storage servisi
│   │           └── local-storage.service.ts
│   │
│   ├── presentation/       # ARAYÜZ KATMANI
│   │   ├── components/
│   │   │   ├── ui/         # Saf, aptal (dumb) React/Astro bileşenleri
│   │   │   │   ├── Button.astro
│   │   │   │   ├── Input.astro
│   │   │   │   ├── Textarea.astro
│   │   │   │   └── Section.astro
│   │   │   ├── blocks/     # Akıllı (smart) ve birleşik bileşenler
│   │   │   │   ├── ContactForm.tsx      # İletişim formu (React - Interactive)
│   │   │   │   ├── HeroSection.astro    # Hero bölümü
│   │   │   │   └── ServiceCard.astro    # Hizmet kartı
│   │   │   ├── FAQ.astro    # Sıkça Sorulan Sorular bileşeni
│   │   │   └── References.astro # Referanslar bileşeni
│   │   ├── layouts/        # Sayfa iskeletleri
│   │   │   ├── BaseLayout.astro  # Ana layout
│   │   │   ├── Header.astro      # Site başlığı / navigasyon
│   │   │   └── Footer.astro      # Site alt bilgisi
│   │   └── styles/         # Global CSS / Tailwind konfigürasyonları
│   │
│   └── pages/              # ASTRO ROUTING (URL Yapısı)
│       ├── index.astro       # Anasayfa (/)
│       ├── hakkimizda.astro  # Hakkımızda (/hakkimizda)
│       ├── hizmetler.astro   # Hizmetler (/hizmetler)
│       ├── referanslar.astro # Referanslar (/referanslar)
│       ├── sss.astro         # Sıkça Sorulan Sorular (/sss)
│       ├── iletisim.astro    # İletişim (/iletisim)
│       └── robots.txt.ts     # Dinamik robots.txt oluşturma
│
├── astro.config.mjs        # Astro temel ayarları
├── tailwind.config.cjs     # Tailwind ayarları
├── tsconfig.json           # TypeScript ayarları (Strict mode)
└── package.json            # Proje bağımlılıkları
```

## URL Yapısı

| Sayfa | URL | Dosya |
|-------|-----|-------|
| Anasayfa | `/` | `src/pages/index.astro` |
| Hakkımızda | `/hakkimizda` | `src/pages/hakkimizda.astro` |
| Hizmetler | `/hizmetler` | `src/pages/hizmetler.astro` |
| Referanslar | `/referanslar` | `src/pages/referanslar.astro` |
| SSS | `/sss` | `src/pages/sss.astro` |
| İletişim | `/iletisim` | `src/pages/iletisim.astro` |
| Robots.txt | `/robots.txt` | `src/pages/robots.txt.ts` |

## Bileşen Hiyerarşisi

### Layout Bileşenleri
- **BaseLayout.astro** - Tüm sayfalar için temel layout
- **Header.astro** - Site başlığı ve navigasyon menüsü
- **Footer.astro** - Site alt bilgisi, iletişim bilgileri, sosyal medya linkleri

### UI Bileşenleri (Dumb Components)
- **Button.astro** - Genel buton bileşeni
- **Input.astro** - Form input alanı
- **Textarea.astro** - Çok satırlı metin alanı
- **Section.astro** - Sayfa bölümü container'ı

### Block Bileşenleri (Smart Components)
- **HeroSection.astro** - Hero/giriş bölümü
- **ServiceCard.astro** - Hizmet kartı gösterimi
- **ContactForm.tsx** - İletişim formu (React ile interaktif)
- **FAQ.astro** - Sıkça sorulan sorular listesi
- **References.astro** - Referanslar listesi

## Clean Architecture Katmanları

### Domain Layer (core/domain/)
İş mantığından bağımsız, saf varlıklar ve tip tanımlamaları.

### Application Layer (core/application/)
İş kuralları, use case'ler ve doğrulama mantığı.

### Infrastructure Layer (core/infrastructure/)
Dış servislerle entegrasyon (Netlify Forms, LocalStorage vb.).

### Presentation Layer (presentation/)
Kullanıcı arayüzü, bileşenler ve layout'lar.
