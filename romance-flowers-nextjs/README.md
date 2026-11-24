# زهور رومانس | Romance Flowers — Luxury Bilingual E-Commerce Storefront

A modern, high-converting, bilingual (**Arabic RTL** & **English LTR**) Next.js App Router e-commerce website built for **Romance Flowers (زهور رومانس)** in Al-Madinah Al-Munawwarah, Saudi Arabia.

## Highlights

- **Next.js App Router + React 18 + Tailwind CSS + Lucide React**: 100% ready for GitHub push and zero-config deployment on Vercel (`vercel.app`).
- **Instant Bilingual Switcher (`EN` / `عربي`)**: Zero-reload React Context toggling `dir="rtl"` (`lang="ar"`) and `dir="ltr"` (`lang="en"`), with Saudi Riyal pricing (`ر.س` / `SAR`).
- **Luxury Visual Identity**: Warm Off-White (`#FAF8F5`), Soft Blush Pink (`#F4E6E6`), Deep Charcoal (`#222222`), and Muted Gold (`#C5A059`), paired with Google Fonts (`Cairo`, `Playfair Display`, and `Plus Jakarta Sans`).
- **4 Saudi-Tailored Product Collections**: 40 real boutique photos from your Google Drive folder organized into Luxury Hand Bouquets, Royal Vases & Arrangements, Flowers & Luxury Chocolates, and Bridal Bouquets & Occasions.
- **Interactive Reels/Stories Video Gallery**: All 8 real MP4 videos from your Google Drive folder with lazy-loading, `IntersectionObserver` muted autoplay, custom play/pause & mute controls, poster thumbnails, and fullscreen preview modal.
- **Automatic Studio Photo Enhancement**: Custom `.luxury-photo-filter` CSS grading with subtle contrast boost, warm studio tone, soft vignette, and hover zoom.
- **Slide-Out Cart Drawer & Bilingual WhatsApp Integration**: One-click WhatsApp order buttons on every product card, video reel, and inside the shopping cart drawer with pre-filled Saudi-friendly messages.

## Quick Start (Local Development)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Zero-Config Deployment to GitHub & Vercel

1. Push this folder to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Romance Flowers bilingual Next.js store"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/romance-flowers.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new), import your GitHub repository, and click **Deploy**.
3. No extra environment variables or build overrides are required — `next.config.mjs` is pre-configured for Google Drive and Googleusercontent image domains.

## Easy Customization

- **Store info, WhatsApp number, prices, and Google Drive media IDs**: Edit `src/data/catalog.js`.
- **Brand colors & fonts**: Edit `tailwind.config.js` and `src/app/layout.jsx`.
- **Photographic filter intensity**: Adjust `.luxury-photo-filter` in `src/app/globals.css`.
