# Adtivio Landing

Premium, fully animated Next.js landing page for Adtivio with strict static export deployment for GitHub Pages.

## Stack

- Next.js + React + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons
- Pure static export (`output: 'export'`)

## Local development

```bash
npm install
npm run dev
```

## Production build (static)

```bash
npm run build
```

This generates static assets in `out/` for GitHub Pages.

## Form integration

The contact form submits to a static endpoint from an environment variable.

Create `.env.local`:

```bash
NEXT_PUBLIC_FORM_ENDPOINT="https://formspree.io/f/your-form-id"
```

You can set this to either your Formspree endpoint or a Google Form action URL.

## GitHub Pages auto-deploy

- Workflow file: `/.github/workflows/deploy.yml`
- Trigger: push to `main` and manual `workflow_dispatch`
- Output branch: `gh-pages`
- `.nojekyll` is included via `public/.nojekyll`

## Manual deployment flow

1. Push to `main`
2. Wait for **Deploy static site to GitHub Pages** workflow to complete
3. In GitHub repo settings, set Pages source to `gh-pages` branch (if not already set)
4. Add your custom domain later in Pages settings
