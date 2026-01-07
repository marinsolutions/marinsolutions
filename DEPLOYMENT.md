# Deployment Guide for Marin Solutions

## GitHub Pages Deployment

### Step 1: Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit - Marin Solutions website"
```

### Step 2: Create GitHub Repository

1. Go to GitHub and create a new repository (e.g., `marin-solutions-website`)
2. Add the remote:
```bash
git remote add origin https://github.com/[your-username]/marin-solutions-website.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

Your site will be live at: `https://[your-username].github.io/marin-solutions-website`

## Custom Domain Setup

### DNS Configuration

The CNAME file is already configured for `marinsolutions.com` and `www.marinsolutions.com`.

#### For Root Domain (marinsolutions.com):

Add these **A Records** in your DNS provider:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

#### For WWW Subdomain (www.marinsolutions.com):

Add this **CNAME Record**:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | [your-username].github.io | 3600 |

### Steps to Complete Setup:

1. **Update CNAME file** (if needed):
   - Edit `CNAME` file with your actual domain
   - Commit and push to GitHub

2. **Configure DNS**:
   - Log into your domain registrar (GoDaddy, Namecheap, etc.)
   - Navigate to DNS Management
   - Add the A records and CNAME record as shown above

3. **Enable Custom Domain in GitHub**:
   - Go to repository **Settings** > **Pages**
   - Under **Custom domain**, enter: `marinsolutions.com`
   - Check "Enforce HTTPS" (available after DNS propagates)

4. **Wait for DNS Propagation**:
   - DNS changes can take 24-48 hours to propagate
   - Check status: `dig marinsolutions.com` or use online DNS checker

### Verification

After DNS propagates:
- Visit `http://marinsolutions.com` (should redirect to HTTPS)
- Visit `http://www.marinsolutions.com` (should redirect to HTTPS)
- Both should show your website

## Important Notes

- **Build files must be committed**: The bundle files (`*-bundle.js`, `*-bundle.css`) need to be in the repository for GitHub Pages to serve them
- **HTTPS**: GitHub Pages automatically provides SSL certificates for custom domains
- **CNAME file**: Must be in the root directory and contain your domain name
- **DNS TTL**: Lower TTL (300-600) during setup, increase after everything works

## Troubleshooting

- **404 Error**: Ensure `index.html` is in the root directory
- **DNS not resolving**: Wait longer or check DNS records are correct
- **Mixed content warnings**: Ensure all assets use HTTPS
- **Custom domain not working**: Verify CNAME file is committed and DNS is configured correctly

