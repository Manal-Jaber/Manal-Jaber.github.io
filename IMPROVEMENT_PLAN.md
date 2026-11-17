# Portfolio improvement plan

Draft, 17 Nov 2026. Based on `origin/main` (d2e198d, Jan 2025) and `modern-design` (aa7d1aa, Nov 2024).

## 1. Where things stand

### How the two branches relate

`modern-design` is **not ahead of `main`**. Its last commit is already in `main`'s history. After that commit, `main` replaced the whole setup in `ed7e3dd` ("Replaced the setup with a simple next app") and merged the `new-design` work through PRs #18–#25.

| | `modern-design` | `main` (live site) |
|---|---|---|
| Stack | Next 14, React 18, TypeScript, React Three Fiber/drei/three, PWA plugin, Prettier, bundle analyzer | Next 15, React 19, plain JS, Tailwind 3 |
| Pages | `/` (Intro + AboutMe), `/blob` (R3F demo) | `/`, `/work`, `/articles`, `/interests` (the last two say "in progress") |
| Content | Hard-coded in components; About text duplicated | Driven by `public/data/*.json` (Header, Home, Work) |
| 3D | Shared `<Canvas>` + `View` (scissor) setup, starter demos (Logo/Dog/Duck) commented out | None |
| Deploy | none | GitHub Actions → GitHub Pages (`next-deploy.yml`) |
| Metadata | `head.tsx` (old API), title "Next.js + Three.js", twitter `@pmndrs` | Metadata API, OG/Twitter images |

**Recommendation:** treat `main` as the base. Restart `modern-design` from `main` and bring over only the useful ideas from the old branch: TypeScript, lint/format tooling, the shared R3F canvas pattern, and the PWA/manifest/icons. Don't merge the old tree.

### Problems on `main` today

**Rendering, performance and SEO**
- `Header`, `AboutMe` and `/work` are client components that `fetch()` JSON after mount and return `null` until then (`isMounted` guard). In a static export the HTML has no content: crawlers and link previews see an empty page, and every page load flashes "Loading...".
- Every route is marked `"use client"`, so none of the content is server-rendered.
- `next.config.mjs` is empty. The static export (`output: 'export'`, `images.unoptimized`) only works because `actions/configure-pages` patches the config during CI, so a local `next build` doesn't produce what gets deployed.
- The font is loaded through a relative `url()` in `global.css` instead of `next/font/local`.
- About 520 KB of unused files are deployed: 48 avatar frames in `public/avatars/manal/`, plus `girlcoding.jpeg`, `profile.jpg`, `peace/yo/like/thinking.webp`, the vecteezy laptop image and `HomePage.json`.

**Layout and responsiveness**
- Fixed widths: `w-3/4` containers and `grid-cols-3` on Work. The Intro text block is absolutely positioned (`translate-x-[-10%]`) and the AboutMe rows use `flex-row`, so on phones the content overlaps or overflows.
- The header switches between `fixed` and `absolute` while you scroll, which makes the page jump. Its scroll listener is also re-attached on every scroll event because `prevScrollY` is in the dependency array.
- The nav has no mobile menu.

**Accessibility**
- Purple `#7127BA` on the background `#11071F` has a contrast ratio of **2.5:1**. WCAG AA needs 4.5:1 for normal text, and this colour is used for the name, "World" and the quote credit.
- Heading levels are inconsistent: the header renders an `<h1>` and `/work` adds a second one. The home page has no landmark `<main>`.
- Alt text is weak ("laptop", "manal"). Project cards use `next/link` for external sites with no `target`/`rel` and no visible focus style.

**Content**
- `socialData` is defined in `Header.json` but never rendered, and every link is `#`. The visitor has no way to reach Manal: no contact, CV, GitHub or LinkedIn links.
- `/articles` and `/interests` are placeholder pages but still reachable by URL.
- Copy issues: "Because i have not yet become world-weary", "afterwords", missing spaces ("applications.I"). The 8 Work projects have no tags, role or year.
- `README.md` is still the create-next-app boilerplate.

**Repo hygiene**
- There are 15 remote branches, most of them stale (`Manal-Jaber-patch-1..4`, `component/*`, `page/*`, `version-1`, `content`, `gh-pages`, `new-design`). There is no CI check (lint/build) on PRs; only the deploy runs, and only on `main`.

## 2. Goals for `modern-design`

1. Ship a responsive, accessible, statically rendered portfolio that is fully readable without JavaScript.
2. Add a **lightweight 3D accent** that ties together the astronomy/physics and 3D projects, so the "modern" look comes from the design and not just from a starter demo.
3. Make the content easy to maintain: typed JSON/TS data, one source of truth.

## 3. Plan, in phases

Each phase is one PR into `main`, and the site stays deployable after each one.

### Phase 0: Reset the branch and the tooling (½ day)
- [ ] Recreate `modern-design` from `origin/main`. Archive the old tip as a tag (`archive/modern-design-r3f-2024`) so nothing is lost.
- [ ] Convert to TypeScript (`.tsx`, `tsconfig` with `@/*` paths). Port `.prettierrc`, `.editorconfig`, `eslint-config-prettier` and `eslint-plugin-tailwindcss` from the old branch.
- [ ] Make `next.config.ts` explicit: `output: 'export'`, `images: { unoptimized: true }`, `trailingSlash: true`.
- [ ] Add a `ci.yml` workflow (`lint` + `build`) that runs on pull requests.
- [ ] Replace the README with project-specific setup, content-editing and deploy notes.

### Phase 1: Fix the foundations (1–2 days)
- [ ] **Static data:** `import data from '@/data/home.json'` (move it from `public/data` to `src/data`) with TS types. Remove every `fetch`, `isMounted` and loading state. Make pages and layout Server Components, and keep `"use client"` only for small interactive islands (avatar hover, cursor ticker, mobile menu).
- [ ] Load the font with `next/font/local`, using `display: swap` and a CSS variable.
- [ ] Header: keep a stable `sticky top-0` element and hide or show it with `translate-y` driven by a single `requestAnimationFrame`-throttled scroll hook. Add a mobile menu (`<button aria-expanded>`) and an active-link state.
- [ ] Delete the unused assets and data listed above. Serve the animated avatar as one optimized `.webp` or a CSS sprite instead of 48 frames.

### Phase 2: Design refresh (2–3 days)
- [ ] **Design tokens:** move colours into CSS variables in Tailwind. Add an accessible accent (for example a lighter purple around `#A97CF8`; verify ≥4.5:1 on the background) and keep `#7127BA` for large or decorative elements only. Define a type scale and spacing rhythm.
- [ ] **Responsive layout:** use a `max-w-6xl px-4 md:px-8` container. Put the Intro in a grid that stacks on mobile. Show About sections as cards with the skill icons in a wrapping grid. Make Work `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`.
- [ ] **Home sections:** Hero (avatar + Sophie's World quote) → About (Engineer / Physicist) → Featured work (3 cards) → Contact/footer (social links from `socialData`, email, CV download).
- [ ] **Project cards:** cover image with consistent aspect ratio, tech tags, year, and "Live" / "Code" links (`target="_blank" rel="noopener"`). Add visible focus rings and hover lift.
- [ ] Add subtle motion: fade or slide in on scroll with CSS or `IntersectionObserver`, and turn it off for `prefers-reduced-motion`.

### Phase 3: 3D accent, ported from the old `modern-design` (2 days)
- [ ] Reuse the shared-canvas pattern (`Scene` + `View` + `tunnel-rat`) but **only on the hero**: for example a small particle spiral galaxy or starfield in the brand purples (it matches the Spiral Galaxy project).
- [ ] Lazy-load it with `next/dynamic({ ssr: false })` after first paint. Show a static gradient fallback under `prefers-reduced-motion`, on low-power devices, and before JS loads. Keep three.js out of the initial bundle and check with `@next/bundle-analyzer`.
- [ ] Drop the starter leftovers: the `/blob` page, `Examples.tsx` (Logo/Dog/Duck), `dog.glb`/`duck.glb`, the unused Lenis `Scroll.tsx` template, and the `@pmndrs` twitter handle.

### Phase 4: Content and pages (ongoing)
- [ ] Fix copy and typos. Give each About section real details and remove duplicated text.
- [ ] Either remove `/articles` and `/interests`, or build them properly: Articles from MDX files or links to external posts; Interests covering astronomy, books and 3D, with images.
- [ ] Add per-project data: role, stack, year, repo link, short case-study text.
- [ ] Add contact options: `mailto:` or a static form service, and LinkedIn/GitHub links.

### Phase 5: Quality and launch checks (½ day)
- [ ] Metadata: per-page `title`/`description`, `sitemap.ts`, `robots.ts`, an OG image, a `manifest` (ported from the old branch's `public/manifest.json` and icons), and JSON-LD `Person`.
- [ ] Accessibility: skip link, `<main>`/`<nav>`/`<footer>` landmarks, one `h1` per page, alt text, keyboard check, axe run.
- [ ] Performance: Lighthouse ≥ 95 on Performance, Accessibility, Best Practices and SEO on mobile. Hero LCP image with `priority`, and no layout shift from the header.
- [ ] Repo cleanup: delete merged or stale remote branches once their content is confirmed in `main`.

## 4. Suggested order and size

| Phase | Effort | Visible impact |
|---|---|---|
| 0 Reset and tooling | ½ d | none (unblocks everything) |
| 1 Foundations | 1–2 d | content shows instantly, works on mobile, no "Loading..." flash |
| 2 Design refresh | 2–3 d | high |
| 3 3D accent | 2 d | high (the "modern" signature) |
| 4 Content | ongoing | high |
| 5 Quality and launch | ½ d | SEO, accessibility, score |

## 5. Open questions

- Keep the purple / Preahvihear identity, or explore a new palette or typeface?
- Should 3D stay limited to one hero accent, or should the Work page also embed live 3D previews of the three.js projects?
- Keep the Articles and Interests pages, or cut scope to Home + Work + Contact for the first release?
- Is a CV/résumé download wanted, and where does the file live?
