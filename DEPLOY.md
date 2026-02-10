# GitHub Pages deployment

## Fix 404 "File not found"

1. **Use GitHub Actions as the source**
   - Repo → **Settings** → **Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions** (not "Deploy from a branch").

2. **Site URL**
   - Project site: **https://jordanchen321.github.io/personal-web/**
   - Open this URL (with the trailing slash) after the workflow runs.

3. **Custom domain (e.g. jordanchen.org)**
   - In **Settings** → **Pages** → **Custom domain**, enter your domain.
   - If you use a custom domain, keep `basePath: '/personal-web'` in `next.config.js` so asset paths stay correct.

After changing the source to **GitHub Actions**, trigger a deploy (push to `main` or run the "Deploy to GitHub Pages" workflow manually). The 404 should go away once the first deployment finishes.
