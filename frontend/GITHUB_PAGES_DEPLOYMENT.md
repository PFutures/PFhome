# GitHub Pages Deployment Guide

This guide will help you deploy the Polymathic Futures website to GitHub Pages.

## Prerequisites

- A GitHub account
- The repository set up on GitHub
- Node.js and yarn/npm installed locally

## Deployment Steps

### Option 1: Deploy from `frontend` directory (Recommended)

1. **Build the project:**

   ```bash
   cd frontend
   yarn install  # or npm install
   yarn build    # or npm run build
   ```

2. **This creates a `build` folder with all the static files.**

3. **Configure GitHub Pages:**

   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Select **Branch**: `main` (or your default branch)
   - Select **Folder**: `/frontend/build`
   - Click **Save**

4. **Push the build folder to GitHub:**
   ```bash
   # From the project root
   git add frontend/build
   git commit -m "Add build for GitHub Pages"
   git push origin main
   ```

### Option 2: Use GitHub Actions (Automated)

1. **Create `.github/workflows/deploy.yml`:**

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3

         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: "18"
             cache: "yarn"
             cache-dependency-path: frontend/yarn.lock

         - name: Install dependencies
           run: |
             cd frontend
             yarn install --frozen-lockfile

         - name: Build
           run: |
             cd frontend
             yarn build

         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./frontend/build
   ```

2. **Enable GitHub Actions:**

   - Go to repository **Settings** → **Actions** → **General**
   - Enable "Workflow permissions" → "Read and write permissions"
   - Enable "Allow GitHub Actions to create and approve pull requests"

3. **Configure Pages:**
   - Go to **Settings** → **Pages**
   - Select **Source**: "GitHub Actions"

### Option 3: Deploy from root directory

If you want to deploy from the repository root:

1. **Update `package.json` homepage:**

   ```json
   "homepage": "/PFhome"
   ```

   (Replace `PFhome` with your actual repository name)

2. **Build and deploy:**

   ```bash
   cd frontend
   yarn build
   # Copy build contents to root
   cp -r build/* ../docs/
   ```

3. **Configure GitHub Pages to use `/docs` folder**

## Important Notes

### Routing Configuration

- The app uses **HashRouter** which works perfectly with GitHub Pages
- URLs will look like: `https://username.github.io/repo/#/blog`
- This avoids 404 errors when refreshing pages

### Custom Domain (Optional)

If you have a custom domain:

1. Add a `CNAME` file in the `public` folder:

   ```
   yourdomain.com
   ```

2. Update DNS settings to point to GitHub Pages
3. GitHub will automatically detect and configure the CNAME file

### Troubleshooting

**Issue: Blank page after deployment**

- Check browser console for errors
- Verify all asset paths are correct
- Ensure `homepage` in `package.json` is set correctly

**Issue: 404 errors on refresh**

- HashRouter should prevent this, but if using BrowserRouter, ensure you've set the correct `basename`

**Issue: Styles not loading**

- Check that `index.html` has correct paths to CSS files
- Verify build folder contains all assets

## Testing Locally

Before deploying, test the production build locally:

```bash
cd frontend
yarn build
# Install a simple HTTP server
npx serve -s build
# Or use Python
python -m http.server 8000 -d build
```

Visit `http://localhost:8000` to test.

## Updating Content

To update website content:

1. Edit `frontend/src/data/content.json`
2. Rebuild: `yarn build`
3. Commit and push the new build folder

Or set up automated deployment with GitHub Actions (Option 2 above).
