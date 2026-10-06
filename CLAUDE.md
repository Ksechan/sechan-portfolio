# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal portfolio site for 김세찬 (Ksechan), built with Next.js 14 (App Router) and styled-components. The site is a **single page** (`/`) — there is no client-side routing between sections. "Projects" and "About" are anchor-scrolled sections (`#projects`, `#about`, `#contact`) on the same route, not separate pages. This was a deliberate design decision; earlier iterations had `/about` and `/projects/[slug]` routes, but those were removed in favor of one scrollable page with a fixed header that scroll-links to each section (`html { scroll-behavior: smooth }` in `GlobalStyle` makes plain `<a href="#projects">` links scroll smoothly, no JS needed).

Package manager is **pnpm** (`pnpm-lock.yaml`, `pnpm-workspace.yaml`). `pnpm-workspace.yaml` allow-lists `unrs-resolver`'s postinstall script — if `pnpm install` warns about ignored build scripts, run `pnpm approve-builds`.

## Commands

```bash
pnpm install
pnpm dev            # start dev server on :3000
pnpm build           # production build — this is also where type errors and most lint errors surface
pnpm start            # run the production build
pnpm lint             # next lint (extends next/core-web-vitals only, no @typescript-eslint rules configured despite the package being present as a transitive dep of eslint-config-next)
```

There is no test runner configured in this project.

## Architecture

Structured with Feature-Sliced Design (FSD); layers from low-level to high-level:

- **`shared/`** — cross-cutting code with no domain knowledge.
  - `ui/` — Button (always renders as `<a>`, use `href`, not `onClick`-only buttons), Container, SectionHeading, RevealOnScroll (framer-motion `whileInView` wrapper used throughout the detail sections).
  - `lib/` — `StyledComponentsRegistry.tsx` (official styled-components App Router SSR recipe), `Providers.tsx` (wraps children in the registry + `ThemeProvider` + `GlobalStyle`), `motion.ts` (shared framer-motion variants: `fadeInUp`, `staggerContainer`, etc).
  - `styles/` — `theme.ts` is the single source for design tokens (`color`, `font`, `radius`, `space`, `container`); `GlobalStyle.tsx`; `styled.d.ts` augments styled-components' `DefaultTheme`. **That augmentation must stay `export interface DefaultTheme extends AppTheme {}`** — rewriting it as `export type DefaultTheme = AppTheme` compiles but silently fails to merge with styled-components' own ambient `DefaultTheme` interface, so every `theme.xxx` access in styled-components template literals type-errors as "Property does not exist on type DefaultTheme". Also: don't add an `eslint-disable-next-line @typescript-eslint/no-empty-object-type` comment above it — this project's `.eslintrc.json` (`next/core-web-vitals` only) doesn't register that rule, so the disable comment itself becomes a lint error ("Definition for rule ... was not found").
  - `config/site.ts` — name/role/contact/links used in metadata (`app/layout.tsx`) and the footer.
- **`entities/project/`** — the project domain: `model/types.ts` (`Project`, `ProjectDetail`, `ProjectProgressStep`), `model/data.ts` (the actual project content — one entry per past project, each with concept/progress copy and statically-imported images, plus a `getProjectBySlug` helper), `ui/` (`ProjectCard`, `TechTag`), `assets/<project-name>/*.png` (source images, imported directly in `data.ts` and rendered via `next/image` for automatic AVIF/WebP — see `next.config.js`).
- **`widgets/`** — larger composed UI blocks: `site-header`, `site-footer`, `hero`.
  - `widgets/project-detail/` (`ProjectHeroSection`, `ProjectConceptSection`, `ProjectProgressSection`) plus `widgets/project-detail-panel/` and `widgets/project-slider/`, and `views/project-detail/ui/ProjectDetailView.tsx`, are **currently unused/orphaned** — they were built for a not-yet-wired-in feature (clicking a project card expands its full concept/progress detail inline via a slider, 2 cards per view desktop / swipe on mobile) and aren't imported from `HomeView`. Safe to finish wiring up or delete; don't assume they're dead by mistake or duplicate their functionality.
- **`views/`** — page-level compositions (named `views` instead of FSD's usual `pages` to avoid clashing with Next's routing concept). `views/home/ui/HomeView.tsx` is effectively the entire site: `SiteHeader`, `Hero`, `AboutView` (inlined section, not a route), the projects grid, `SiteFooter`. `views/about/ui/AboutView.tsx` renders inline inside `HomeView` (`id="about"` section) rather than at its own route.
- **`app/`** — Next.js App Router, kept thin. `app/page.tsx` renders `HomeView`. `app/layout.tsx` builds all metadata/OpenGraph/Twitter tags from `shared/config/site.ts`. `app/sitemap.ts` and `app/robots.ts` exist for SEO — sitemap currently lists only the root URL (no more per-project or `/about` routes).

### Adding or editing a project

Edit `src/entities/project/model/data.ts` (add images to `src/entities/project/assets/<slug>/` and import them at the top of that file). `Project.slug` is used by `getProjectBySlug`; there is currently no route that reads it directly since project detail is not yet wired into the single page (see the orphaned-widgets note above).

## Known-stale docs

`README.md` still describes an earlier migration-in-progress state (a `next-app/` subfolder, npm instead of pnpm, separate `/about` and `/projects/[slug]` routes). That migration is complete and those routes were intentionally removed — don't trust README.md's folder-structure or "getting started" sections as current; this file supersedes it.

## Trigger Keyboards

### `배포`

1. **빌드 실행**: `pnpm build`로 빌드
2. **빌드 성공시 아래대로 실행**: 아래 순서로 실행

- `git add -A` (변경된 파일 전체 스테이징)
- 변경 내용을 분석하여 적절한 커밋메시지 자동 작성
- `git commit`
- `git push origin <현재브랜치>`

3. push 완료 후 결과 요약 출력
