# RM CONSULT

**AI Research & Engineering** 

Coming Soon landing page for RM CONSULT, an AI consultancy building next-generation systems and software for businesses across Africa and beyond.

## Preview

The site features a glassmorphic design with animated backgrounds, smooth dark/light theme transitions, and a distinctive **R monogram** logo mark.

## Tech Stack

- **React** 19 - UI framework
- **Vite** 6 — Build tool & dev server
- **CSS Variables** — Theming (light/dark mode)

No additional runtime dependencies.

## Getting Started

```bash
# Install dependencies
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
├── index.html              # Entry HTML (favicon → logo-icon.svg)
├── logo-icon.svg           # Square R monogram — favicon & app icon
├── logo.svg                # Horizontal logo — icon + wordmark
├── stamp.svg               # Official circular stamp
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Main application component
    ├── App.css             # Component styles
    ├── index.css           # Global styles & CSS variables
    └── components/
        ├── ThemeContext.jsx # Dark/light theme provider (localStorage)
        ├── DeviceFrames.jsx# Device mockup components
        └── DeviceFrames.css
```

## Site Sections

- **Header** — Fixed glassmorphic bar with R monogram logo and theme toggle
- **Hero** — Headline, subtitle, and email waitlist form
- **Services** — Three cards: AI Research & Innovation, Software Engineering, Consultancy
- **Contact** — Email link and social media icons (LinkedIn, X, GitHub)

## Branding

The logo uses a three-layer **R monogram** with a node accent:

| Element | Color | Meaning |
|---------|-------|---------|
| Stem | `#0A2E5C` (dark blue) | Foundation, stability |
| Bowl | `#0B59A8` (medium blue) | Knowledge, structure |
| Leg | `#1A7AE6` (bright blue) | Forward motion, innovation |
| Node | `#FFFFFF` (white) | Intelligence, AI convergence |

In dark mode the layers invert to white at varying opacities and the node turns blue.

### Brand Files

| File | Size | Usage |
|------|------|-------|
| `logo-icon.svg` | 100x100 | Favicon, app icon, social avatar |
| `logo.svg` | 420x120 | Full horizontal logo with tagline |
| `stamp.svg` | 300x300 | Official circular stamp |

## Theme System

Managed via React Context (`ThemeContext.jsx`):

- Persisted to `localStorage` under key `rm-theme`
- Falls back to system preference (`prefers-color-scheme`)
- Applied via `data-theme` attribute on `<html>`
- All transitions animate over 0.4s

## License

All rights reserved. &copy; 2026 RM CONSULT
