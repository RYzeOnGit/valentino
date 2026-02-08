# Valentine's Website 💕🐱

A beautiful, cat-themed Valentine's Day website built with React + Vite. Features an interactive magazine-style experience with a February calendar scrapbook page.

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```
The site will open at `http://localhost:8000` with hot module replacement!

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
valentino/
├── src/
│   ├── components/          # React components
│   │   ├── ValentinePage.jsx
│   │   ├── Celebration.jsx
│   │   ├── MagazineBook.jsx
│   │   ├── MagazineCover.jsx
│   │   ├── CalendarPage.jsx
│   │   ├── CalendarDay.jsx
│   │   ├── FloatingHearts.jsx
│   │   └── AudioPlayer.jsx
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # React entry point
│   └── index.css            # All styles
├── public/
│   └── assets/              # Images, videos, audio
├── index.html               # HTML template
├── vite.config.js          # Vite configuration
└── package.json
```

## 🎨 Features

- 🐱 Cat-themed design
- 💕 Valentine's Day theme
- 📱 Mobile-responsive (optimized for iPhone 16)
- ✨ Smooth animations
- 🎉 Celebration screen
- 📖 Interactive magazine book with page turning
- 📅 February calendar scrapbook page
- 🎵 Background music (starts at 30 seconds)
- 💖 Floating hearts animation

## 🌐 Deployment to Netlify

### Option 1: Netlify CLI

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login and deploy:
   ```bash
   netlify login
   netlify deploy --prod
   ```

### Option 2: Git-based Deployment

1. Push your code to GitHub/GitLab/Bitbucket

2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your Git repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Option 3: Drag & Drop

1. Build the project: `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with animations
- **HTML5 Audio** - Background music

## 📱 Mobile Optimization

The site is fully responsive and optimized for:
- iPhone 16 (393x852px)
- iPhone 16 Pro Max (430x932px)
- All mobile devices

## 🎯 Development Tips

- Hot Module Replacement (HMR) - Changes reflect instantly
- Fast refresh - React components update without losing state
- Optimized builds - Vite uses esbuild for lightning-fast builds

## 🎁 What's Inside

1. **Valentine Question Page** - "Will you be my valentine?"
2. **Celebration Screen** - Pink celebration with confetti
3. **Magazine Cover** - Beautiful magazine-style cover
4. **Calendar Page** - February scrapbook with photos and stickers

Enjoy! 💕
