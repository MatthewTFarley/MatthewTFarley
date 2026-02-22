# AGENTS.md

## Purpose
This file guides coding agents working in this repository.
Follow these instructions unless a direct user request overrides them.

## Project Snapshot
- Personal website for Matthew T Farley.
- Framework: Astro v5 (static output).
- Styling: Tailwind CSS v4 via Vite plugin.
- Content: MDX blog posts through Astro content collections.
- Hosting target: Netlify.
- Node runtime target: Node 24 (`netlify.toml` and `.nvmrc`).

## Source of Truth
- Repository conventions in code under `src/`.
- Project notes in `CLAUDE.md`.
- Tooling config in `package.json`, `.prettierrc`, `tsconfig.json`, `astro.config.mjs`.
- If conventions conflict, prefer:
  1) Explicit user instruction
  2) Existing file-local pattern
  3) Tool config files
  4) This AGENTS.md

## Cursor/Copilot Rules
- `.cursor/rules/`: not present at time of writing.
- `.cursorrules`: not present at time of writing.
- `.github/copilot-instructions.md`: not present at time of writing.
- If any of these are added later, treat them as additional constraints.

## Repository Layout
- `src/pages/`: Astro routes (`index.astro`, `blog/index.astro`, `blog/[slug].astro`, `404.astro`).
- `src/layouts/`: shared layout(s), currently `Layout.astro`.
- `src/components/`: reusable Astro components.
- `src/content/blog/`: MDX blog posts.
- `src/content.config.ts`: collection schemas/loaders.
- `src/styles/global.css`: global styles and design tokens.
- `public/`: static assets.

## Setup Commands
- Install deps: `npm install`
- Verify Node: `node -v` (expect Node 24 in deployment environment).
- Start dev server: `npm run dev`
- Build production site: `npm run build`
- Preview built output: `npm run preview`

## Build/Lint/Test Commands
- Build: `npm run build`
- Dev: `npm run dev`
- Preview: `npm run preview`
- Astro CLI passthrough: `npm run astro -- <subcommand>`
- Type/content checks (recommended): `npm run astro -- check`
- Lint: no lint script configured in `package.json`.
- Tests: no test script or test runner configured.

## Formatting Commands
- Config source: `.prettierrc`
- Check formatting: `npx prettier . --check`
- Apply formatting: `npx prettier . --write`

## Running a Single Test (Important)
- Single-test execution is not available yet because no test framework is configured.
- There are no `*test*` files in the repository at time of writing.
- Current verification flow:
  1) `npm run astro -- check`
  2) `npm run build`
  3) `npm run preview` and manually verify changed pages
- If a test runner is added later, add scripts for:
  - full suite (`test`)
  - watch mode (`test:watch`)
  - targeted runs (`test:single`)
- Future examples (only after framework install):
  - Vitest file: `npx vitest run path/to/file.test.ts`
  - Vitest name: `npx vitest run -t "test name"`
  - Jest file: `npx jest path/to/file.test.ts`
  - Jest name: `npx jest -t "test name"`

## Code Style Guidelines

### General
- Keep changes minimal and scoped to the request.
- Do not refactor unrelated files.
- Preserve the existing Astro-first architecture.
- Prefer static-site solutions over runtime-heavy client logic.

### Imports
- Use ESM imports.
- In Astro frontmatter/TS files, place framework/external imports before local imports.
- Keep imports explicit and avoid unused imports.
- Use relative import paths consistent with nearby files.

### Formatting
- Follow Prettier settings from `.prettierrc`:
  - `tabWidth: 2`
  - `singleQuote: false`
  - `semi: false`
  - `trailingComma: es5`
  - `endOfLine: lf`
- Important: existing files currently include semicolons in places.
- Match the style of touched files; avoid mass reformat-only diffs.

### Types
- TypeScript config extends `astro/tsconfigs/strict`.
- Prefer explicit props interfaces in Astro components/layouts.
- Use schema validation in `src/content.config.ts` for content safety.
- Avoid `any`; use inferred, narrowed, or declared concrete types.
- Keep date/content transformations type-safe.

### Naming Conventions
- Components and layouts: `PascalCase.astro`.
- Route files: Astro conventions (`index.astro`, `[slug].astro`, `404.astro`).
- Variables/functions: `camelCase`.
- Constants: `camelCase` unless true constants justify `UPPER_SNAKE_CASE`.
- Blog filenames become slugs; use lowercase kebab-case names.

### Error Handling
- Prefer schema validation and compile-time guarantees over runtime checks.
- For optional props/content, provide safe fallbacks.
- Avoid throwing generic runtime errors in templates when avoidable.
- Keep build output deterministic.

### Astro and Content
- Put data loading/transforms in frontmatter.
- Keep templates declarative and readable.
- Required blog frontmatter fields:
  - `title: string`
  - `date: string`
  - `description: string`
- Sort posts by descending date where listing behavior expects it.

### Styling
- Use Tailwind utility classes for structure and spacing.
- Use global CSS tokens in `src/styles/global.css` for color/typography.
- Reuse existing tokens (`--color-accent`, `--color-text-*`, `--color-border`, etc.).
- Preserve existing `.dark` class theme strategy.
- Maintain Geist and Geist Mono usage conventions.

### Performance and SEO
- Preserve static generation behavior.
- Keep metadata patterns in `src/layouts/Layout.astro` intact on new pages.
- Prefer `astro:assets` image optimization for local images.
- Avoid unnecessary client-side JavaScript.

## Agent Workflow
- Before finishing:
  1) Run `npm run astro -- check` when relevant.
  2) Run `npm run build` for build-affecting changes.
  3) Use `npm run preview` for UI sanity checks when pages/styles changed.
- If commands are not run, state why.
- Do not introduce broad formatting churn.

## Git and Change Hygiene
- Do not revert unrelated user changes.
- Keep commits focused and descriptive.
- Explain why changes were made, not only what changed.
- If adding lint/tests later, update `package.json` scripts and this file together.

## Known Gaps
- No lint script/config is currently configured.
- No test framework is currently configured.
- No single-test command is currently available.
- If these are introduced, document exact commands here immediately.
