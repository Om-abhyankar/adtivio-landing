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

The contact form posts to Formspree. Update this value in `/app/page.tsx`:

```ts
const formAction = "https://formspree.io/f/your-form-id";
```

You can replace it with your own Formspree endpoint or a Google Form endpoint.

## GitHub Pages auto-deploy

- Workflow file: `/.github/workflows/deploy.yml`
- Trigger: push to `main`
- Output branch: `gh-pages`
- `.nojekyll` is included via `public/.nojekyll`

## Manual deployment flow

1. Push to `main`
2. Wait for **Deploy static site to GitHub Pages** workflow to complete
3. In GitHub repo settings, set Pages source to `gh-pages` branch (if not already set)
4. Add your custom domain later in Pages settings
