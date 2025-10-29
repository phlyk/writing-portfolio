# GitHub Pages Deployment Guide

## 🚀 Automatic Deployment (Recommended)

Your project is now configured for automatic deployment to GitHub Pages! Here's what's set up:

### What's Configured:
- ✅ GitHub Actions workflow (`.github/workflows/deploy.yml`)
- ✅ Correct base path in `vite.config.ts` (`/writing-portfolio/`)
- ✅ Homepage URL in `package.json`
- ✅ Build scripts ready

### Steps to Enable:

1. **Go to your GitHub repository settings:**
   ```
   https://github.com/phlyk/writing-portfolio/settings/pages
   ```

2. **Configure Pages:**
   - Source: "GitHub Actions"
   - That's it! 🎉

3. **Push your changes:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

4. **Your site will be available at:**
   ```
   https://phlyk.github.io/writing-portfolio/
   ```

## 🔧 Manual Deployment (Alternative)

If you prefer manual deployment, you can use the gh-pages package:

```bash
# Deploy manually
npm run deploy
```

This will:
1. Build the project (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── dist/                       # Built files (auto-generated)
├── src/                        # Source code
├── package.json               # Updated with homepage URL
└── vite.config.ts            # Updated with correct base path
```

## 🔍 Troubleshooting

### If deployment fails:
1. Check GitHub Actions tab for error details
2. Ensure GitHub Pages is enabled in repository settings
3. Verify the base path matches your repository name

### If assets don't load:
- The base path in `vite.config.ts` must match your repository name
- Currently set to `/writing-portfolio/` ✅

### To test locally:
```bash
npm run build
npm run preview
```

## 🌐 What Happens Next

1. Every push to `main` branch triggers automatic deployment
2. GitHub Actions builds your React app
3. Built files are deployed to GitHub Pages
4. Your site updates automatically! 

Your beautiful copywriting portfolio will be live at:
**https://phlyk.github.io/writing-portfolio/**

## 📝 Notes

- First deployment may take 5-10 minutes
- Subsequent deployments are usually faster (2-3 minutes)
- You can monitor deployment progress in the Actions tab
- The site supports custom domains if you want to use your own later
