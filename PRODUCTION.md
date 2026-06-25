# Production Deployment Guide

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Environment Variables

Create a `.env.production` file for production environment:

```env
VITE_APP_NAME="Company Name"
VITE_APP_TITLE="IT Consulting Website"

# Production Contact Information
VITE_CONTACT_EMAIL=contact@yourcompany.com
VITE_CONTACT_PHONE=+971 4 XXX XXXX
VITE_CONTACT_ADDRESS=Your Address, Dubai, UAE

# Analytics (optional)
VITE_ENABLE_ANALYTICS=true
VITE_GA_TRACKING_ID=UA-XXXXXXXXX-X
```

## Performance Optimizations

### Already Implemented

- ✅ Code splitting with React lazy loading
- ✅ Optimized build with Vite
- ✅ Tree shaking for unused code
- ✅ Minified CSS and JavaScript
- ✅ Image optimization (external CDN - Unsplash)
- ✅ Framer Motion for smooth animations

### Recommended for Production

1. **Enable Gzip Compression** (on server)
2. **Add Cache Headers** for static assets
3. **Use HTTPS** for secure connections
4. **Configure CORS** if needed for API calls

## Hosting Options

### Option 1: Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Option 2: Netlify

1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Option 3: Traditional Hosting

1. Build: `npm run build`
2. Upload `dist/` folder to your web server
3. Configure server to serve `index.html` for all routes

## Server Configuration

### Apache (.htaccess)

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Nginx

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Security Checklist

- [ ] Update all dummy contact information with real data
- [ ] Remove console.logs in production build
- [ ] Add security headers (CSP, X-Frame-Options, etc.)
- [ ] Implement rate limiting for contact form
- [ ] Add CAPTCHA to contact form
- [ ] Enable HTTPS/SSL certificate
- [ ] Configure firewall rules

## SEO Optimization

### Meta Tags (update in index.html)

- Title tags for each page
- Meta descriptions
- Open Graph tags for social sharing
- Favicon and app icons

### Sitemap

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yoursite.com/about</loc>
    <priority>0.8</priority>
  </url>
  <!-- Add more URLs -->
</urlset>
```

### robots.txt

Create `public/robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://yoursite.com/sitemap.xml
```

## Monitoring & Analytics

### Google Analytics Setup

1. Create GA4 property
2. Add tracking ID to `.env.production`
3. Analytics will be automatically enabled

### Error Tracking (Optional)

Consider adding:

- Sentry for error tracking
- LogRocket for session replay
- Google Search Console for SEO monitoring

## Performance Monitoring

- Lighthouse CI for performance audits
- Web Vitals monitoring
- Uptime monitoring (e.g., UptimeRobot)

## Backup & Maintenance

- Regular database backups (if applicable)
- Monitor server resources
- Keep dependencies updated: `npm audit` and `npm update`
- Test after each update

## Post-Deployment Checklist

- [ ] Test all pages and links
- [ ] Verify contact form works
- [ ] Check mobile responsiveness
- [ ] Test on multiple browsers
- [ ] Verify SEO meta tags
- [ ] Check page load speeds
- [ ] Test navigation and dropdown menus
- [ ] Verify all images load correctly
- [ ] Check for console errors
- [ ] Test analytics tracking
