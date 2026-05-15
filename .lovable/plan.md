# Paltu AI — Build Plan

A dark-mode, glassmorphic political-flip tracker with newsroom typography and meme-internet energy. Built on the existing TanStack Start + Tailwind v4 stack (similar DX to Next.js — file routes, SSR, React 19). Framer Motion for animations.

## Pages / routes

```
src/routes/
  __root.tsx          (existing — add nav + dark theme)
  index.tsx            /          Home
  search.tsx           /search    Search results (?q=)
  random.tsx           /random    Random flip + "Next" button
```

Each route gets its own `head()` meta (title, description, og).

## Data layer (mock now, Cloud later)

- `src/data/flips.ts` exports a typed `Flip[]` (12–15 entries) and helpers: `searchFlips(q)`, `getRandomFlip(excludeId?)`, `getTrendingFlips(n)`.
- `src/types/flip.ts` defines:
  ```ts
  type Flip = {
    id, politicianName, politicianImage, party,
    oldStatement, oldDate, newStatement, newDate,
    flipScore (0-100), category, sources: {label,url}[]
  }
  ```
- All UI calls these helpers — swapping to a Lovable Cloud query later is a one-file change.

## Design system (src/styles.css)

- Force dark by setting tokens on `:root` directly (no theme toggle needed).
- Palette: near-black bg `oklch(0.13 0.02 270)`, ink white, hot saffron accent `oklch(0.78 0.18 60)`, electric magenta `oklch(0.65 0.27 340)`, mint flip-score `oklch(0.78 0.16 160)`, glass surface `oklch(1 0 0 / 0.06)` with `backdrop-blur`.
- Typography: load Google Fonts in `__root.tsx` head — **Fraunces** (display, italic) for हिन्दी-flavored headlines, **Inter** for body, **JetBrains Mono** for dates/scores. Mixed Devanagari + Latin (e.g. "पaltu AI") rendered with Fraunces which has Devanagari coverage; fall back to Noto Sans Devanagari.
- Glass card utility class `.glass` → `bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl`.
- Subtle film grain via SVG noise overlay on body.

## Components (src/components/)

- `Nav.tsx` — sticky glass top bar: logo (पaltu AI), links Home / Search / Random.
- `FloatingQuotes.tsx` — absolutely-positioned animated political quotes drifting in background (Framer Motion `animate` with random x/y/rotate, opacity 0.06–0.12). 8–10 short quotes ("मैं चौकीदार हूँ", "Acche din", etc).
- `SearchBar.tsx` — large pill input + submit; navigates to `/search?q=...`.
- `RandomFlipButton.tsx` — neon glass button "Who Flipped Today? 🎲" → `/random`.
- `TrendingSection.tsx` — grid of compact flip cards (top by flipScore).
- `FlipCard.tsx` — full result card:
  - Politician image (left), name + party + category chip
  - Two-column **THEN / NOW** comparison with dates, animated underline + arrow between them (Framer Motion `layout` + `motion.div` slide-in)
  - Flip score gauge (animated circular meter, 0–100, color from mint→magenta)
  - Sources (chip links)
  - Share button (Web Share API + clipboard fallback, toast via existing sonner)
- `FlipScoreMeter.tsx` — SVG circle with `pathLength` motion animation.
- `Hero.tsx` — giant title `पaltu AI`, subtitle, search bar, random button, floating quotes behind.

## Page composition

- **Home** (`index.tsx`): Hero → TrendingSection (6 cards) → small footer.
- **Search** (`search.tsx`): `validateSearch` with `{ q: string }`, `Route.useSearch()`, sticky search bar at top, results list of `FlipCard`. Empty state + no-results state.
- **Random** (`random.tsx`): single `FlipCard` centered, big "Next Flip →" button reshuffles via `useState` of current id (excludes current). Framer Motion `AnimatePresence` for card swap.

## Animation details (Framer Motion)

- Page enter: `fade + slide-up 12px`, stagger children 60ms.
- FlipCard reveal: THEN slides from left, NOW slides from right, score gauge animates `pathLength` 0→value over 1.2s.
- Hero title: per-letter stagger reveal.
- Floating quotes: continuous loop with `repeat: Infinity`, randomized.
- Hover: cards lift `y: -4` + glow shadow.

## Mobile

- Tailwind responsive: hero scales `text-6xl md:text-8xl lg:text-9xl`, comparison stacks vertically <md, nav collapses to icon row.

## Dependencies to add

- `framer-motion` (via `bun add framer-motion`)

Everything else (Tailwind, sonner, lucide icons, shadcn button) already present.

## Out of scope (deferred)

- Real database / auth (Cloud) — data layer is structured for easy swap.
- Submission flow ("report a flip"), comments, user accounts.
- Real politician images — will use generated placeholder portraits via `imagegen` (3–4 reusable portraits referenced across mock flips).
