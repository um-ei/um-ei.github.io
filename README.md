# UMEI Lab website

Website for the University of Macau Embodied Intelligence Lab.

- Website: https://um-ei.github.io/
- Repository: https://github.com/um-ei/um-ei.github.io
- Pages: Home, Lab, Research, and Getting Involved.

## Local development

Use Node.js 22.13 or newer.

```bash
npm ci
npm run dev -- --port 3000 --hostname 127.0.0.1
```

Open http://127.0.0.1:3000/.

## Check and build

```bash
npm run typecheck
npm run lint
npm run build
```

The static website is exported to `dist/client/`. The build verifies all four
pages and generates directory indexes for direct visits and refreshes.

To preview the static output with Python 3, stop the development server on port
3000 and run `npm start`.

## GitHub Pages

The `Deploy website to GitHub Pages` workflow checks, builds, and publishes the
website on pushes to `main`. It can also be started manually from GitHub Actions.
The repository's **Settings → Pages → Source** must be **GitHub Actions**.

This is the organization's root website, so `NEXT_PUBLIC_BASE_PATH` is empty.
Only `dist/client/` is uploaded as the website artifact; no Node server is deployed.

## Editing content

- `app/page.tsx`: introduction and Home links.
- `app/getting-involved/page.tsx`: recruitment and contact instructions.
- `data/people.ts`: faculty, members, portraits, and profile links.
- `data/publications.json`: publication order, descriptions, images, and links.
- `public/assets/`: logo, portraits, and publication images.
- `app/globals.css`: shared typography, colors, and responsive layout.
- `CONTENT_SOURCES.md`: content and image provenance.

Contact information is intentionally displayed as plain text:
`dianwang at um dot edu dot mo`. Keep it obfuscated when editing.

Dependencies, generated output, local environment files, and local QA reports
are excluded from version control. The dependency lockfile is committed.
