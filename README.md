# Dhruv Jain — Performance Marketing Portfolio

A premium, single-page portfolio for growth / performance marketing roles, built with React, Vite, TypeScript, and Tailwind CSS.

## What's inside

- **Hero** — name, role, positioning statement, contact links
- **About + Expertise** — short intro, platforms/skills, portfolio-wide impact indicators
- **Selected Case Studies** — three campaigns (optimization, acquisition/growth, new-market experiment), each following Challenge → What I Did → Result → Learning
- **My Approach** — Analyze → Hypothesize → Test → Optimize → Scale
- **Contact** — closing CTA with email, LinkedIn, resume

All copy and data live in `src/data/` so you can update the site without touching component code:

- `src/data/profile.ts` — name, role, bio, contact info, expertise list, "My Approach" steps
- `src/data/caseStudies.ts` — the three case studies and portfolio-wide impact stats

Metrics throughout are described **directionally** (up/down, not invented percentages) — edit the `direction` and `note`/`detail` fields if you want to add real figures later.

## Local development

Requires [Node.js](https://nodejs.org/) 18+.

```bash
npm install
npm run dev
```

This starts a local dev server (usually at `http://localhost:5173`).

## Adding your resume

1. Export your resume as a PDF.
2. Place it in the `public/` folder, named to match `resumeFile` in `src/data/profile.ts` (default: `Dhruv_Jain_Resume.pdf`).
3. It will be served at the site root, e.g. `https://<yourdomain>/Dhruv_Jain_Resume.pdf`.

A starting resume PDF is included in this project's `public/` folder — replace it any time.

## Building for production

```bash
npm run build
```

Outputs a static site to `dist/`.

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys automatically on every push to `main`.

**One-time setup:**

1. Push this project to a new GitHub repository.
2. In your repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Open `vite.config.ts` and set `base` to match your repo name:
   ```ts
   base: "/your-repo-name/",
   ```
   (If you're deploying to a user/organization root site — a repo literally named `<username>.github.io` — set `base: "/"` instead.)
4. Commit and push to `main`. The workflow will build and publish automatically.
5. Your site will be live at `https://<username>.github.io/<your-repo-name>/`.

**Manual alternative** (without GitHub Actions), using the included `gh-pages` package:

```bash
npm run deploy
```

This builds the project and pushes `dist/` to a `gh-pages` branch. Make sure `vite.config.ts`'s `base` is set correctly first, and that Pages is configured to serve from the `gh-pages` branch if you use this method instead of the Actions workflow.

## Updating content later

- **Text/copy/results:** edit `src/data/profile.ts` and `src/data/caseStudies.ts`.
- **Colors/type:** edit `tailwind.config.ts` (the `ink`, `paper`, `signal`, and `gold` color tokens) and the font links in `index.html`.
- **New case study:** add another object to the `caseStudies` array in `src/data/caseStudies.ts` — the layout handles any number automatically, though 3 is the intended count for a 2–3 minute read.

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- lucide-react (icons)
- Recharts is included as a dependency for future use if you want to add real numeric charts later; the current build uses lightweight custom trend indicators instead, since all current results are described directionally rather than with specific figures.
