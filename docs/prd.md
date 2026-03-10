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

### Astro Folder Structure (Plaintext)
webconst/
├── public/                 # Favicon, static images, fonts (Uncompiled assets)
├── src/
│   ├── core/               # CLEAN ARCHITECTURE CORE
│   │   ├── domain/         # Entities and Types (e.g., TypeScript Interfaces)
│   │   ├── application/    # Business Logic (Use Cases, Validation logic)
│   │   └── infrastructure/ # External Dependencies (Netlify Forms API, HTTP Clients)
│   │
│   ├── presentation/       # PRESENTATION LAYER
│   │   ├── components/
│   │   │   ├── ui/         # Dumb Astro/React components (Button, Input)
│   │   │   └── blocks/     # Smart/Composite components (ContactForm, HeroSection)
│   │   ├── layouts/        # Page shells (BaseLayout.astro, Header, Footer)
│   │   └── styles/         # Global CSS / Tailwind configurations
│   │
│   └── pages/              # ASTRO ROUTING LAYER
│       ├── index.astro     # Home page
│       ├── services.astro  # Services page
│       └── contact.astro   # Contact page
│
├── astro.config.mjs        # Astro configuration
├── tailwind.config.cjs     # Tailwind configuration
└── tsconfig.json           # TypeScript configuration

## 4. Core Requirements

**Functional Requirements:**
1.  **Static Pages:** Home, About Us, Services, and Contact pages.
2.  **Contact Form:** Fields include First Name, Last Name, Email, Phone, and Message. Submissions must be handled seamlessly via Netlify Forms using AJAX/Fetch (no full page reloads).
3.  **Responsive Design:** Flawless rendering across mobile, tablet, and desktop viewports.

**Non-Functional Requirements:**
1.  **SEO Optimization:** Every page must include unique `title`, `meta description`, Canonical URL tags, and Open Graph (OG) tags.
2.  **Performance:** Target Google PageSpeed Insights scores of 90+ for both Mobile and Desktop.
3.  **JavaScript Optimization:** Astro components must be the default. React components will only be hydrated using `client:load` or `client:visible` directives when interactivity is absolutely necessary.

## 5. Infrastructure & Deployment
* **Version Control:** GitHub. Any push to the main branch will trigger a production build.
* **Hosting & CI/CD:** Netlify. Automated builds and deployments upon GitHub webhook triggers.
* **Corporate Email (Phase 2):** Zoho Mail (Forever Free Plan). MX and TXT records will be configured via Netlify DNS once the final domain name is officially registered.