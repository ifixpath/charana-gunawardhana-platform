# Charana Gunawardhana — Personal Brand & Digital Platform

Frontend foundation for the personal brand website. Built with React, TypeScript, Vite,
Tailwind CSS and React Router.

## Requirements

- Node.js 20.19+ (developed on 24.x)
- npm 10+

## Scripts

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| `npm install`       | Install dependencies                     |
| `npm run dev`       | Start the dev server on `localhost:5173` |
| `npm run build`     | Type-check and build for production      |
| `npm run preview`   | Serve the production build locally       |
| `npm run lint`      | Run ESLint                               |
| `npm run typecheck` | Run TypeScript only                      |

## Structure

```
src/
  assets/       images, logos, icons (see src/assets/README.md)
  components/   common/ shared pieces, layout/ shell, ui/ primitives
  data/         static content
  hooks/        reusable React hooks
  layouts/      route-level shells
  lib/          framework-agnostic helpers
  pages/        one folder per route
  routes/       route table, paths, navigation model
  styles/       global stylesheet and design tokens
  types/        shared TypeScript types
```

## Design tokens

All colour and typography tokens live in `src/styles/global.css` inside Tailwind's `@theme`
block. Adding a token there exposes it as both a CSS variable and a Tailwind utility, so there
is a single source of truth for the design system.

| Token                     | Role                          |
| ------------------------- | ----------------------------- |
| `--color-primary`         | Deep navy / near-black        |
| `--color-accent`          | Warm premium gold             |
| `--color-surface`         | White background              |
| `--color-surface-muted`   | Warm off-white background     |
| `--color-content`         | Dark charcoal body text       |
| `--color-content-muted`   | Neutral gray secondary text   |
| `--color-line`            | Borders and dividers          |

## Path alias

`@/*` resolves to `src/*` in both Vite and TypeScript.
