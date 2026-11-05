# jflo.io

Portfolio site for Jason Florence. Next.js 15 (App Router), React 19, TypeScript, Tailwind 4, SCSS modules, motion, Storybook/Chromatic.

## Workflow
- **Rule: all work is done on the `staging` branch first.** Make and verify every change (code, dependencies, config, docs) on `staging`, then merge `staging` into `main`. Never commit directly to `main`, and don't create feature branches off `main`.
- Deployed on DigitalOcean App Platform; a failed build there is the main signal something broke.

## Commands
- `npm run dev` - dev server
- `npm run build` - production build (run before pushing)
- `npm run lint` - ESLint
- `npm run storybook` - Storybook on :6006

## Structure
- `src/app/page.tsx` - single-page layout; case studies open in a modal.
- `src/app/components/` - one component per project case study, plus shared UI.
- `src/app/fonts.tsx` - fonts are self-hosted via `next/font/local` (files in `src/app/font-files/`). Do not switch back to `next/font/google`; it fetches at build time and has broken deploys.
- `public/` - images and standalone prototype builds; keep large assets optimized.

## Notes
- `robots.txt` currently disallows all crawlers.
- Do not commit tokens or secrets; `.env` is gitignored.
