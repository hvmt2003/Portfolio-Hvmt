# Harshvardhan Portfolio

Portfolio website built with Next.js (App Router) and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Update profile content

- Main page content: `src/app/page.js`
- Resume file for download: `public/resume.pdf`
- Profile photo: `public/profile.png` (sourced from `HMT PIC.png` in project root)

## Build

```bash
npm run build
npm run start
```

## Deploy on Render

This repo includes `render.yaml` for Render Blueprint deploy.

### Option 1: Blueprint (recommended)
1. Push this repo to GitHub.
2. In Render, click **New +** -> **Blueprint**.
3. Select this repo and deploy.

### Option 2: Manual Web Service
Use these settings:
- **Environment**: Node
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm run start`
- **Node version**: `20`
