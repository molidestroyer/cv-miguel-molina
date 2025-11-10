# Deployment Guide - CV Website

This guide will help you deploy your CV website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js and npm installed

## Step-by-Step Deployment

### 1. Prepare Your Repository

If you haven't already, initialize a git repository:

```bash
git init
git add .
git commit -m "Initial commit: CV website"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `cv-miguel-molina` (or any name you prefer)
3. Don't initialize with README (we already have one)

### 3. Connect Local Repository to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/cv-miguel-molina.git
git branch -M main
git push -u origin main
```

### 4. Configure Vite for GitHub Pages

The `vite.config.ts` file is already configured, but make sure the `base` property matches your repository name:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/cv-miguel-molina/', // Change this to match your repo name
})
```

### 5. Deploy Using npm Script (Method 1)

This is the quickest method:

```bash
npm run deploy
```

This command will:
- Build your project
- Create a `gh-pages` branch
- Deploy the `dist` folder to that branch

### 6. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select the `gh-pages` branch
5. Click "Save"

Your site will be live at: `https://YOUR_USERNAME.github.io/cv-miguel-molina/`

### 7. Automated Deployment with GitHub Actions (Method 2)

The repository includes a GitHub Actions workflow that automatically deploys your site when you push to the main branch.

#### Enable GitHub Actions Deployment:

1. Go to your repository settings on GitHub
2. Navigate to "Pages"
3. Under "Source", select "GitHub Actions"
4. Push any changes to the main branch:
   ```bash
   git add .
   git commit -m "Update CV"
   git push
   ```

The site will automatically build and deploy!

## Updating Your CV

### Making Changes

1. Edit `src/data/cvData.ts` with your updated information
2. Test locally:
   ```bash
   npm run dev
   ```
3. Build to verify:
   ```bash
   npm run build
   ```

### Deploy Updates

#### If using npm script:
```bash
npm run deploy
```

#### If using GitHub Actions:
```bash
git add .
git commit -m "Update CV information"
git push
```

The changes will be live in a few minutes!

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the `public` folder:
   ```
   your-domain.com
   ```

2. Configure DNS settings with your domain provider:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`

3. In GitHub repository settings > Pages:
   - Enter your custom domain
   - Enable "Enforce HTTPS"

## Troubleshooting

### Blank Page After Deployment

If you see a blank page, check:
1. The `base` property in `vite.config.ts` matches your repository name
2. The path includes the trailing slash: `/cv-miguel-molina/`

### Build Fails

If the build fails:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### GitHub Pages Not Showing Updates

- Wait a few minutes (can take 5-10 minutes)
- Clear your browser cache
- Check the Actions tab for build errors

## Environment-Specific Builds

### Production Build
```bash
npm run build
```

### Preview Production Build Locally
```bash
npm run preview
```

### Development Server
```bash
npm run dev
```

## Monitoring Deployments

### Using GitHub Actions
- Go to the "Actions" tab in your repository
- View the status of each deployment
- Click on a workflow run to see detailed logs

### Using gh-pages
- Check the `gh-pages` branch to see deployed files
- The branch is automatically managed by the deploy script

## Security Notes

- Never commit sensitive information (API keys, passwords)
- Keep `node_modules` in `.gitignore`
- Regularly update dependencies:
  ```bash
  npm update
  ```

## Performance Optimization

The site is already optimized, but you can further improve:

1. **Lazy Loading**: Images load on demand
2. **Code Splitting**: Vite handles this automatically
3. **Minification**: Production builds are minified
4. **Caching**: Static assets are cached

## Analytics (Optional)

To add Google Analytics:

1. Get your tracking ID
2. Add to `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   ```

## Support

If you encounter issues:
- Check GitHub Actions logs
- Review browser console for errors
- Verify all dependencies are installed
- Ensure Node.js version is 18+

## Backup

Always keep a backup:
```bash
git tag -a v1.0 -m "Version 1.0"
git push origin v1.0
```

---

Your CV website should now be live and accessible to the world! 🎉
