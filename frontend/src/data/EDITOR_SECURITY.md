# Editor Security Guide

## Password Protection

The content editor at `/#/editor` is protected by a password. This prevents unauthorized access to edit your website content.

## Setting the Password

### Option 1: Environment Variable (Recommended for Production)

Create a `.env` file in the `frontend` directory:

```bash
REACT_APP_EDITOR_PASSWORD=your_secure_password_here
```

**For GitHub Pages deployment**, you can set this as a GitHub Actions secret:

1. Go to your repository → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `REACT_APP_EDITOR_PASSWORD`
4. Value: Your password
5. Update the workflow to use it (see below)

### Option 2: Direct Code Change

Edit `frontend/src/components/Login.jsx` and change:

```javascript
const ADMIN_PASSWORD = process.env.REACT_APP_EDITOR_PASSWORD || "admin123";
```

Replace `"admin123"` with your desired password.

## Default Password

⚠️ **Important**: The default password is `admin123`. **You must change this before deploying to production!**

## Session Management

- Sessions last **24 hours** after login
- Authentication is stored in browser localStorage
- Users are automatically logged out after 24 hours
- Users can manually logout using the logout button

## Security Notes

⚠️ **This is client-side authentication only!**

- The password is checked in the browser (JavaScript)
- The password can be viewed in the source code if not using environment variables
- This provides **basic protection** but is not cryptographically secure
- For stronger security, consider:
  - Using environment variables (not visible in built code)
  - Implementing server-side authentication
  - Using GitHub OAuth or similar

## For GitHub Pages

Since GitHub Pages serves static files, the password will be in the built JavaScript. To make it more secure:

1. **Use environment variables** during build
2. **Set GitHub Actions secrets** for the password
3. **Update the workflow** to inject the password during build

### Workflow Already Updated

The workflow (`.github/workflows/deploy.yml`) is already configured to use the secret. Just add the secret:

1. Go to your repository → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `REACT_APP_EDITOR_PASSWORD`
4. Value: Your secure password
5. Click **Add secret**

The workflow will automatically use this password during the build. This way, the password is only in GitHub secrets and not in your repository code.

## Changing the Password

1. Update the password (via environment variable or code)
2. Rebuild the application
3. All existing sessions will be invalidated (users need to login again)

## Accessing the Editor

1. Navigate to: `https://your-site.github.io/PFhome/#/editor`
2. Enter the password
3. Click "Login"
4. You'll stay logged in for 24 hours
