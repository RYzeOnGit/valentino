# Valentine's Website 💕🐱

A cute, cat-themed Valentine's Day website with mobile-responsive design.

## Deployment to Netlify

### Option 1: Netlify CLI (Recommended)

1. Install Netlify CLI (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Initialize and deploy:
   ```bash
   netlify init
   netlify deploy --prod
   ```

### Option 2: Git-based Deployment

1. Push your code to GitHub/GitLab/Bitbucket:
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your Git repository
5. Netlify will auto-detect settings (build command: none, publish directory: root)
6. Click "Deploy site"

### Option 3: Drag & Drop

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop your project folder
3. Your site will be live instantly!

## Files Structure

```
valentino/
├── index.html      # Main page
├── styles.css      # Styling
├── script.js       # Interactive functionality
├── assets/         # Images, videos, and other assets
└── netlify.toml    # Netlify configuration
```

## Features

- 🐱 Cat-themed design
- 💕 Valentine's Day theme
- 📱 Mobile-responsive
- ✨ Smooth animations
- 🎉 Celebration screen on "Yes"

