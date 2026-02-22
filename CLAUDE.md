# CLAUDE.md

## Project Overview

Personal website for Matthew T Farley, hosted at [matthewtfarley.com](https://matthewtfarley.com). A static site built with Astro, featuring a homepage and blog.

## Tech Stack

- **Framework**: Astro v5 (static site generator)
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- **Content**: MDX for blog posts (using Astro's content collections with glob loader)
- **Fonts**: Geist (body/headings) and Geist Mono (code) via Google Fonts
- **Hosting**: Netlify (Node 24)
- **Language**: TypeScript (strict mode via `astro/tsconfigs/strict`)
- **Package Manager**: pnpm
- **Install Script Policy**: `pnpm-workspace.yaml` (`onlyBuiltDependencies`)

## Project Structure

```
src/
  components/    # Reusable Astro components (Bio, ThemeToggle)
  content/
    blog/        # Blog posts as .mdx files
  content.config.ts  # Content collection schema (title, date, description)
  layouts/       # Page layouts (Layout.astro)
  pages/         # File-based routing
    index.astro       # Homepage
    blog/index.astro  # Blog listing
    blog/[slug].astro # Individual blog posts
    404.astro         # Not found page
  styles/
    global.css   # Global styles and Tailwind imports
public/          # Static assets (favicon, images)
```

## Commands

- `pnpm run dev` — Start dev server
- `pnpm run build` — Production build (outputs to `dist/`)
- `pnpm run preview` — Preview production build locally
- `pnpm install` — Install dependencies (respects `pnpm-workspace.yaml` build approvals)

## Blog Posts

Blog posts are MDX files in `src/content/blog/`. Each post requires frontmatter with:

```yaml
title: string
date: string
description: string
```

## Style Conventions

- Astro components use `.astro` single-file component format
- Tailwind utility classes for layout; global CSS for typography and base styles
- Accent/link color: `--color-accent` (`#059669` light / `#34d399` dark)
- Font: `--font-sans` (Geist); code font: `--font-mono` (Geist Mono)
