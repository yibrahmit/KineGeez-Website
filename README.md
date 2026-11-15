# Kine Geez Landing Page

A modern, responsive landing website for **Kine Geez (ኪነ ግዕዝ)** — Historical Books & Ge’ez Digital Library Platform, built with React, Vite, and Tailwind CSS. Fully aligned with the Security-First System Requirements Specification (`Kine_Geez_SRS.md`).

## Features

- **Bilingual Interface**: One-click toggle between English and Amharic (አማርኛ) across all headers, features, catalog, and FAQ sections.
- **Interactive Protected Reader Simulator (`ReaderDemo.jsx`)**: Demonstrates the core SRS DRM differentiator: dynamic per-session watermarking, copy-deterrence, font style switcher (Serif vs. Sans Ethiopic), text zoom, and traditional red rubric headings.
- **Curated Catalog Showcase (`Catalog.jsx`)**: Real historical titles (*Mahder Weledo*, *Kebra Nagast*, *Fetha Nagast*, *Chronicles of Zara Yaqob*, *Book of Enoch*), genre filtering, real-time search, dual pricing (ETB & USD), and an interactive **Sample Preview Modal**.
- **Defense-in-Depth Copyright & DRM Section (`SecurityPillars.jsx`)**: Direct reflection of SRS Section 4 (tamper-proof entitlements, zero raw master file downloads, private cloud quarantine, encrypted mobile storage).
- **Dual Payment Gateway Visual Flow (`Payments.jsx`)**: Clear breakdown of Telebirr (ETB for Ethiopian readers) and Stripe (Cards / Apple Pay for diaspora readers).
- **Author & Rights Holder Callout (`AuthorCTA.jsx`)**: Dedicated trust section for authors, monasteries, and publishers to partner without fear of piracy.
- **Interactive FAQ Accordion (`FAQ.jsx`)**: Answers key questions on DRM, Telebirr/Stripe verification, and offline reading.
- **Segmented Early Access / Waitlist (`Waitlist.jsx`)**: Role-based segmentation (Reader, Academic, Author, Monastery) and platform selection (Web, Android, iOS).

## Getting Started

```bash
# Navigate to the landing project
cd kine-geez-landing

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
kine-geez-landing/
├── public/
│   └── kinegeez-mahder-weledo.png
├── src/
│   ├── components/
│   │   ├── AuthorCTA.jsx       # Rights holders partnership CTA
│   │   ├── Catalog.jsx         # Interactive catalog with sample preview modal
│   │   ├── Contact.jsx         # Direct contact, phone, Telegram & Facebook
│   │   ├── FAQ.jsx             # Interactive accordion FAQ
│   │   ├── Features.jsx        # 4 core platform pillars
│   │   ├── Footer.jsx          # Cultural branding, legal compliance & links
│   │   ├── Hero.jsx            # Headline, trust badges, payment pills & cover
│   │   ├── HowItWorks.jsx      # 4-step reader journey & roadmap
│   │   ├── Icons.jsx           # SVG icons & traditional Ethiopian Harag divider
│   │   ├── Navbar.jsx          # Header with mobile drawer & language switcher
│   │   ├── Payments.jsx        # Telebirr & Stripe gateway showcase
│   │   ├── ReaderDemo.jsx      # Live Protected Reader Simulator
│   │   ├── SecurityPillars.jsx # SRS Section 4 DRM & Anti-theft pillars
│   │   └── Waitlist.jsx        # Segmented waitlist registration form
│   ├── context/
│   │   └── LanguageContext.jsx # English / Amharic state & translations
│   ├── data/
│   │   ├── catalog.js          # Canonical books metadata & excerpts
│   │   └── translations.js     # EN & AM localization dictionary
│   ├── App.jsx
│   ├── index.css               # Tailwind v4 theme, watermark & font styles
│   └── main.jsx
├── index.html
└── package.json
```
