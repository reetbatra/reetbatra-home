# What this project is
The home page at reetbatra.com. A personal portfolio, single page, Next.js 16 (App Router) + TypeScript + Tailwind v4, no other runtime deps. Positioning: builder first, product and growth marketing second. Sections: Hero, How I work, Work (AskTota featured), Growth, Life, Now, Footer.

The FDE-specific job-search portfolio is a separate repo (`fde-portfolio`) served at fde.reetbatra.com, and the DevRel one is `devrel-portfolio` at devrel.reetbatra.com. All three share ONE design system and must stay in sync visually. Do not merge the repos.

# Design system: Grid & Mono
Chosen 2026-09-23 to replace the cream/terracotta/DM-Serif skin, which read as AI-generated default. Full exploration and the two rejected directions are in `~/.gstack/projects/Career/designs/portfolio-identity-20260923/`.

Tokens live in `app/globals.css` under `@theme`:
paper #F2F2EE · paper-2 #E9E9E3 · ink #111113 · ink-2 #33332F · muted #65655F · faint #8A8A83 · rule #CFCFC7 · blue #1B34F5 · acid #DDF247.
Type: Archivo (variable, `wdth` axis required) + JetBrains Mono.

Non-negotiable rules, these are what keep it from drifting back:
- Square corners only. No `rounded-*` anywhere.
- No box shadows. Depth comes from 1px rules, not blur.
- No warm/cream backgrounds, no terracotta or orange accents.
- Labels use `.t-label` (JetBrains Mono, uppercase, 0.12em tracking).
- Headlines use `.t-display` / `.t-display-sub` / `.t-head`, which set the Archivo width axis. The width axis is the signature; do not replace these with plain font-weight.
- Sections are numbered (`01 / WORK`) and separated by full-bleed hairlines.
- Prefer tables and bordered grids over floating cards.
- `.mark` puts the acid highlight behind a phrase. Use sparingly, roughly once per page.

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
