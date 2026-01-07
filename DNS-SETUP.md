# DNS Configuration for marinsolutions.com

## Quick Setup Guide

### Step 1: A Records (Root Domain)

In your DNS provider (GoDaddy, Namecheap, Cloudflare, etc.), add these **4 A Records**:

```
Type: A
Name: @ (or leave blank for root domain)
Value: 185.199.108.153
TTL: 3600 (or default)

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

### Step 2: CNAME Record (WWW Subdomain)

Add this **CNAME Record**:

```
Type: CNAME
Name: www
Value: [your-github-username].github.io
TTL: 3600
```

**Important**: Replace `[your-github-username]` with your actual GitHub username.

### Step 3: Verify in GitHub

1. After pushing code to GitHub, go to repository **Settings** > **Pages**
2. Under **Custom domain**, enter: `marinsolutions.com`
3. Check "Enforce HTTPS" (will be available after DNS propagates)

## DNS Provider Examples

### GoDaddy
1. Log in → My Products → DNS
2. Add 4 A records with Name: `@`, Value: (IP addresses above)
3. Add CNAME record with Name: `www`, Value: `[username].github.io`

### Namecheap
1. Domain List → Manage → Advanced DNS
2. Add 4 A records with Host: `@`, Value: (IP addresses above)
3. Add CNAME record with Host: `www`, Value: `[username].github.io`

### Cloudflare
1. Select domain → DNS → Records
2. Add 4 A records with Name: `@`, IPv4 address: (IP addresses above)
3. Add CNAME record with Name: `www`, Target: `[username].github.io`, Proxy status: DNS only (gray cloud)

## Verification

After DNS changes (wait 24-48 hours for propagation):

```bash
# Check A records
dig marinsolutions.com +short

# Check CNAME
dig www.marinsolutions.com +short
```

You should see the GitHub Pages IP addresses.

## Troubleshooting

- **DNS not working**: Wait up to 48 hours for full propagation
- **Only www works**: Check A records are correctly set for root domain
- **Only root works**: Check CNAME record for www subdomain
- **HTTPS not available**: Wait for DNS to fully propagate, then enable in GitHub Pages settings

