# Product Requirements Document (PRD): Corporate Website

## 1. Executive Summary
This project involves the development of a corporate promotional website. The final deployment domain is currently To Be Determined (TBD). The design, service scope, and business logic will heavily reference the existing website: `http://adimproje.com.tr/`.

The primary goal is to build an ultra-fast, highly SEO-optimized static website using Static Site Generation (SSG) principles. The system will not rely on a server-side database or an active backend architecture.

## 2. Technology Stack
To ensure an excellent developer experience and deliver zero (or minimal) JavaScript to the end-user, the following technologies will be used:

* **Core Framework:** Astro (utilizing Island Architecture)
* **UI/Component Library:** React (Strictly reserved for interactive "islands")
* **Programming Language:** TypeScript (Strict mode enabled, `any` type prohibited)
* **Styling:** Tailwind CSS (Global styles and utility-first approach)
* **Form Management:** Netlify Forms (Handling submissions via HTML form attributes without custom backend endpoints)

## 3. Architectural Approach: Frontend Clean Architecture
The project will strictly adhere to Maintainability and Separation of Concerns principles. The folder structure is designed to isolate business logic, infrastructure, and presentation layers.

### Astro Folder Structure
```
webconst/
├── public/                 # Favicon, static images, fonts (Uncompiled assets)
├── src/
│   ├── core/               # CLEAN ARCHITECTURE CORE
│   │   ├── constants/      # Application constants (services.ts)
│   │   ├── domain/         # Entities and Types
│   │   │   ├── entities/   # Domain entities (contact-form.entity.ts)
│   │   │   └── types/      # TypeScript Interfaces (contact.types.ts, service.types.ts)
│   │   ├── application/    # Business Logic
│   │   │   ├── use-cases/  # Use Cases (submit-contact.usecase.ts)
│   │   │   └── validators/ # Validation logic (contact.validator.ts, email.validator.ts)
│   │   └── infrastructure/ # External Dependencies
│   │       ├── netlify/    # Netlify Forms API (forms.service.ts)
│   │       └── storage/    # Local Storage service (local-storage.service.ts)
│   │
│   ├── presentation/       # PRESENTATION LAYER
│   │   ├── components/
│   │   │   ├── ui/         # Dumb Astro/React components
│   │   │   │   ├── Button.astro
│   │   │   │   ├── Input.astro
│   │   │   │   ├── Textarea.astro
│   │   │   │   └── Section.astro
│   │   │   ├── blocks/     # Smart/Composite components
│   │   │   │   ├── ContactForm.tsx
│   │   │   │   ├── HeroSection.astro
│   │   │   │   └── ServiceCard.astro
│   │   │   ├── FAQ.astro   # FAQ Component
│   │   │   └── References.astro # References Component
│   │   ├── layouts/        # Page shells
│   │   │   ├── BaseLayout.astro
│   │   │   ├── Header.astro
│   │   │   └── Footer.astro
│   │   └── styles/         # Global CSS / Tailwind configurations
│   │
│   └── pages/              # ASTRO ROUTING LAYER
│       ├── index.astro     # Home page (/)
│       ├── hakkimizda.astro # About Us page (/hakkimizda)
│       ├── hizmetler.astro # Services page (/hizmetler)
│       ├── referanslar.astro # References page (/referanslar)
│       ├── sss.astro       # FAQ page (/sss)
│       ├── iletisim.astro  # Contact page (/iletisim)
│       └── robots.txt.ts   # Dynamic robots.txt generation
│
├── astro.config.mjs        # Astro configuration
├── tailwind.config.cjs     # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## 4. Core Requirements

**Functional Requirements:**
1. **Static Pages:**
   - Home (index.astro)
   - About Us (hakkimizda.astro)
   - Services (hizmetler.astro)
   - References (referanslar.astro)
   - FAQ (sss.astro)
   - Contact (iletisim.astro)

2. **Contact Form:** Fields include First Name, Last Name, Email, Phone, and Message. Submissions must be handled seamlessly via Netlify Forms using AJAX/Fetch (no full page reloads).

3. **Responsive Design:** Flawless rendering across mobile, tablet, and desktop viewports.

4. **Dynamic SEO:** Dynamic robots.txt generation for search engine crawlers.

**Non-Functional Requirements:**
1. **SEO Optimization:** Every page must include unique `title`, `meta description`, Canonical URL tags, and Open Graph (OG) tags.

2. **Performance:** Target Google PageSpeed Insights scores of 90+ for both Mobile and Desktop.

3. **JavaScript Optimization:** Astro components must be the default. React components will only be hydrated using `client:load` or `client:visible` directives when interactivity is absolutely necessary.

## 5. Infrastructure & Deployment
* **Version Control:** GitHub. Any push to the main branch will trigger a production build.
* **Hosting & CI/CD:** Netlify. Automated builds and deployments upon GitHub webhook triggers.
* **Corporate Email (Phase 2):** Zoho Mail (Forever Free Plan). MX and TXT records will be configured via Netlify DNS once the final domain name is officially registered.
