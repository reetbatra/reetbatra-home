# What this project is
The home page at reetbatra.com. A personal portfolio, single page, Next.js 16 (App Router) + TypeScript + Tailwind v4, no other runtime deps. Positioning: builder first, product and growth marketing second. Sections: Hero, How I work, Work (AskTota featured), Growth, Life, Now, Footer.

The FDE-specific job-search portfolio is a separate repo (`fde-portfolio`) served at fde.reetbatra.com. Keep the two visually related (same fonts and palette) but do not merge them.

# Rules
- Every visible string is user-facing copy. No em dashes. Humanizer rules apply.
- Numbers on the page (4,800+ devs, 11 cities, 4K to 8K views, $21K grants, 600+ students) are verified against `Career/career-audit-reet-july-2026.md` and the resume. Do not inflate them.
- Do not lead with Web3/StarkNet/Cairo anywhere on the page.
- AskTota copy follows its brand bible (`Tota/tota astro app/BRAND_DESIGN_BIBLE.md`): never market it as "AI-powered".
- Site-wide CSS resets live in `@layer base` in `app/globals.css`. Unlayered rules would beat Tailwind utilities, so keep them layered.

# Commands
- `npm run dev` / `npm run lint` / `npm run build`

# This is NOT the Next.js you know
This version has breaking changes. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
