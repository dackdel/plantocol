# Plantocol - Vercel Deployment Guide

## Quick Deploy Steps

### 1. Push to GitHub
```bash
cd /Users/dackdel/Documents/GitHub/plantocol/plantocol-app
git init
git add .
git commit -m "Initial commit - Plantocol tissue culture protocols"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/plantocol.git
git push -u origin main
```

### 2. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your `plantocol` repository
5. Vercel will auto-detect SvelteKit
6. Click "Deploy"

**That's it!** Your site will be live in ~2 minutes.

## Optimizations Included

### ✅ Performance
- **Precompression enabled**: Gzip + Brotli compression
- **Static site generation**: Fast CDN delivery
- **Local fonts**: No external font loading
- **Aggressive caching**: 1-year cache for static assets

### ✅ Caching Headers
- **Fonts**: Cached for 1 year (immutable)
- **Images**: Cached for 1 year (immutable)
- **CSS/JS**: Cached for 1 year (immutable)

### ✅ Clean URLs
- `/protocols/monstera` instead of `/protocols/monstera.html`
- No trailing slashes

## Build Settings (Auto-detected)

```
Framework: SvelteKit
Build Command: npm run build
Output Directory: build
Install Command: npm install
```

## Custom Domain (Optional)

1. Go to your project settings on Vercel
2. Click "Domains"
3. Add your custom domain
4. Follow DNS instructions

## Environment Variables

This project doesn't require any environment variables for production.

## Performance Tips

After deployment, check:
- **Lighthouse Score**: Should be 95+ on all metrics
- **Web Vitals**: Monitor in Vercel Analytics
- **Build Time**: Should be under 1 minute

## Troubleshooting

### Build fails?
- Check that all dependencies are in `package.json`
- Ensure Node version is 18+ (Vercel default)

### 404 errors?
- Verify `adapter-static` is properly configured
- Check that all routes are properly exported

### Fonts not loading?
- Fonts are in `/static/fonts/` directory
- Should be accessible at `/fonts/` in production

## Your Site URL

After deployment, you'll get a URL like:
```
https://plantocol.vercel.app
```

You can customize this in project settings!

---

**Need help?** Check the [SvelteKit docs](https://kit.svelte.dev/) or [Vercel docs](https://vercel.com/docs)
