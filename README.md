# Dhruv Jain | Google Ads & Performance Marketing Portfolio

Single-page portfolio for a Google Ads specialist working with D2C brands. Built with React 18, Vite 5, TypeScript and Tailwind CSS 3, with no UI or animation libraries beyond `lucide-react` icons.

Live: https://buddy0204.github.io/dhruv-jain-portfolio/

## Sections

| Section | Component | What it does |
| --- | --- | --- |
| Hero | `Hero.tsx`, `QueryStream.tsx` | Animated headline plus a pausable panel that sorts illustrative searches by intent |
| Results | `Highlights.tsx` | ROAS shown as rupee blocks with count-up when scrolled into view |
| Brands | `Brands.tsx` | Expandable brand profiles that link into the matching case study |
| Case studies | `CaseStudies.tsx` | Brand switcher plus seven-chapter story navigation |
| Expertise | `CampaignExplorer.tsx` | Tabs for PMax, Search, Shopping, Demand Gen and Sales, with a funnel diagram |
| Keyword research | `KeywordProcess.tsx` | Eight connected steps with detail and example terms |
| Process | `WorkingProcess.tsx`, `RoasCalculator.tsx` | Scroll-linked timeline plus a break-even ROAS calculator |
| About / Contact | `About.tsx`, `Contact.tsx` | Background, toolkit, email (prefilled enquiry), LinkedIn, GitHub, resume |

## Editing content

All copy lives in `src/data/`, so you rarely need to touch components:

- `profile.ts`: name, contact links, hero text, About copy, experience, toolkit, nav labels
- `brands.ts`: brand profiles and case studies. Only the confirmed ROAS figures are used. When a client approves sharing more, add entries to `extraMetrics` (they render automatically) and set `logoSrc` to a logo file placed in `public/`.
- `expertise.ts`: campaign types, keyword research steps, working process, sample hero queries

Design tokens (colours, font) are in `tailwind.config.ts`. The four `intent` colours mark search intent across the site.

## Local development

Requires Node.js 18+.

```bash
npm install
npm run dev      # http://localhost:5173/dhruv-jain-portfolio/
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
```

## Deployment

`.github/workflows/main.yml` builds and deploys to GitHub Pages on every push to `main`. In the repo settings, Pages must use "GitHub Actions" as its source.

`vite.config.ts` sets `base: "/dhruv-jain-portfolio/"`. Change it to `"/"` for a custom domain, and update the canonical/OG URLs in `index.html` to match.

## Resume

`public/Dhruv_Jain_Resume.pdf` is linked from the contact section. Replace the file to update it.
