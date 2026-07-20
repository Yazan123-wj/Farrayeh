# Farrayeh

Marketing site for **Farrayeh** — Law & Legal Consultations. Built with Next.js App Router, Tailwind CSS, GSAP ScrollTrigger, Lenis smooth scroll, and a lazy-loaded Three.js hero ambient layer.

**Brand accent:** `#0096FF`

## Stack

- **Next.js 15+** (App Router, TypeScript, React Server Components)
- **Tailwind CSS v4** — design tokens in `src/app/globals.css`
- **GSAP + ScrollTrigger** — reveals, parallax, stat counters, carousel
- **Lenis** — smooth scrolling synced to ScrollTrigger
- **Three.js** via `@react-three/fiber` + `@react-three/drei` — lazy-loaded hero ambient field (disabled on `prefers-reduced-motion` / low-power devices)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve production build
npm run lint    # eslint
```

## Project structure

```
src/
  app/                  # App Router entry (layout, page, globals)
  components/
    animations/         # Reveal, ParallaxImage, StatCounter, Lenis provider
    layout/             # Navbar, Footer
    sections/           # One component per page section
    three/              # Lazy-loaded WebGL hero ambient
    ui/                 # Button, Card, Container, SectionLabel, icons
  content/
    types.ts            # CMS-ready TypeScript interfaces
    home.ts             # Async typed content module (swap for CMS later)
  lib/                  # cn(), motion helpers
```

## Content / CMS readiness

All page copy and media live in `src/content/home.ts`, typed by `src/content/types.ts`.

Components receive typed props only — no hardcoded marketing copy in JSX. To plug in a CMS later, replace `getHomeContent()` with a fetch that returns the same `HomePageContent` shape.

Every image includes a `label` field like `SWAP: Hero — …` so assets are easy to locate and replace.

## Design tokens

| Token | Value |
|-------|-------|
| Accent | `#0096FF` |
| Accent hover | `#007ADB` |
| Ink | `#0A0A0A` |
| Card | `#F3F1EC` |
| Muted | `#6B6B6B` |

Typography: **Fraunces** (display) + **DM Sans** (body).

## Accessibility & motion

- Semantic landmarks, focus rings, keyboard carousel (←/→) and menu (`Escape`)
- `prefers-reduced-motion`: disables Lenis, heavy GSAP motion, and WebGL
- Low-power heuristic also skips the Three.js layer

## Image placeholders

Images currently use Unsplash URLs via `next/image`. Replace `src` values in `src/content/home.ts` (or drop files under `public/` and point there) using the `SWAP:` labels.
