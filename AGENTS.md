# AGENTS.md

## Purpose

This file guides coding agents working in this repository.
Follow these instructions unless a direct user request overrides them.

## Canonical Agent Instructions

- `AGENTS.md` is the canonical instruction file for all coding agents in this repository.
- `CLAUDE.md` is a pointer file and should direct agents to this file for all actionable guidance.
- Agents must read `AGENTS.md` immediately on entry, before planning, before execution, and before any other action.
- If an agent needs to change instructions, it must update `AGENTS.md` (and keep `CLAUDE.md` as a pointer-only file).

## Project Snapshot

- Personal website for Matthew T Farley.
- Framework: Astro v5 (static output).
- Styling: Tailwind CSS v4 via Vite plugin.
- Content: MDX blog posts through Astro content collections.
- Hosting target: Netlify.
- Node runtime target: Node 24 (`netlify.toml` and `.nvmrc`).
- Package manager: pnpm (`packageManager` in `package.json`).

## Source of Truth

- Repository conventions in code under `src/`.
- Project notes in `CLAUDE.md`.
- Tooling config in `package.json`, `pnpm-workspace.yaml`, `prettier.config.mjs`, `tsconfig.json`, `astro.config.mjs`.
- If conventions conflict, prefer:
  1. Explicit user instruction
  2. Existing file-local pattern
  3. Tool config files
  4. This AGENTS.md

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

- Install deps: `pnpm install`
- Verify Node: `node -v` (expect Node 24 in deployment environment).
- Start dev server: `pnpm run dev`
- Build production site: `pnpm run build`
- Preview built output: `pnpm run preview`

## Build/Lint/Test Commands

- Build: `pnpm run build`
- Check: `pnpm run check`
- Dev: `pnpm run dev`
- Preview: `pnpm run preview`
- Astro CLI passthrough: `pnpm run astro -- <subcommand>`
- Type/content checks (recommended): `pnpm run astro -- check`
- Lint: `pnpm run lint`
- Auto-fix lint: `pnpm run lint:fix`
- Deploy preview (manual/CI): `pnpm run deploy:preview`
- Deploy production (manual/CI): `pnpm run deploy:production`
- Tests: no test script or test runner configured.

## Hooks and CI

- Pre-commit hook runs staged-file checks/fixes via `lint-staged` (`format` and `lint:fix` behavior on staged files).
- Primary workflow: `.github/workflows/quality-checks.yml`.
- Required checks for `master`: `format`, `lint`, `check`, `build`.

## Formatting Commands

- Config source: `prettier.config.mjs` (plugins only; Prettier defaults otherwise)
- Check formatting: `pnpm run format:check`
- Apply formatting: `pnpm run format:fix`

## Running a Single Test (Important)

- Single-test execution is not available yet because no test framework is configured.
- There are no `*test*` files in the repository at time of writing.
- Current verification flow:
  1. `pnpm run astro -- check`
  2. `pnpm run build`
  3. `pnpm run preview` and manually verify changed pages
- If a test runner is added later, add scripts for:
  - full suite (`test`)
  - watch mode (`test:watch`)
  - targeted runs (`test:single`)
- Future examples (only after framework install):
  - Vitest file: `pnpm exec vitest run path/to/file.test.ts`
  - Vitest name: `pnpm exec vitest run -t "test name"`
  - Jest file: `pnpm exec jest path/to/file.test.ts`
  - Jest name: `pnpm exec jest -t "test name"`

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

- Follow Prettier defaults, with plugins loaded from `prettier.config.mjs`.
- Keep formatting changes intentional; avoid broad churn unrelated to the request.
- Match the style of touched files; avoid mass reformat-only diffs.

### Types

- TypeScript config extends `astro/tsconfigs/strictest`.
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
  1. Run `pnpm run astro -- check` when relevant.
  2. Run `pnpm run build` for build-affecting changes.
  3. Use `pnpm run preview` for UI sanity checks when pages/styles changed.
- If commands are not run, state why.
- Do not introduce broad formatting churn.

## Git and Change Hygiene

- Do not revert unrelated user changes.
- Keep commits focused and descriptive.
- Explain why changes were made, not only what changed.
- Use feature branches for changes; do not commit directly to `master`.
- Merge to `master` via pull request with required checks passing.
- Only merge pull requests when a human user explicitly directs the merge.
- If adding lint/tests later, update `package.json` scripts and this file together.

## Known Gaps

- No dedicated lint config file is currently configured.
- No test framework is currently configured.
- No single-test command is currently available.
- If these are introduced, document exact commands here immediately.
