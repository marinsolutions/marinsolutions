# Marin Solutions Website

AI automation solutions for Law Firms, CPA Practices, and Consulting Businesses.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Build bundles:
```bash
npm run build:beams-bg
npm run build:pillnav
npm run build:chroma
npm run build:spotlight
npm run build:gradient
```

3. Run locally:
```bash
npm run dev
```

## Deployment to GitHub Pages

1. Push to GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main` or `gh-pages`)
4. The site will be available at `https://[username].github.io/[repository-name]`

## Custom Domain Setup

### DNS Configuration

For `marinsolutions.com` and `www.marinsolutions.com`:

#### A Records (for root domain):
Point to GitHub Pages IP addresses:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

#### CNAME Record (for www subdomain):
- Name: `www`
- Value: `[username].github.io`

### Steps:
1. Add CNAME file to repository (already included)
2. Configure DNS records with your domain provider
3. Wait for DNS propagation (can take up to 48 hours)
4. Enable custom domain in GitHub Pages settings

## Project Structure

- `index.html` - Homepage
- `process.html` - Process page
- `Beams.jsx` - 3D background component
- `beams-background.js` - Background entry point
- `images/` - All images and logos
- Bundle files are generated via build scripts


