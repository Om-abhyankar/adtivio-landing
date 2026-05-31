# Adtivio Landing

Premium, animated marketing landing page built with Next.js, Tailwind CSS, and Framer Motion.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- Framer Motion
- Static export configured for GitHub Pages

## Development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run build
```

## GitHub Pages deployment

The app is configured with `output: "export"` and repo base path `"/adtivio-landing"` for production builds.

Build output is generated in `out/`:

```bash
npm run build
```

Publish the `out/` directory with your preferred GitHub Pages workflow.
