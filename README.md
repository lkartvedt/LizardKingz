# Lizard Kingz LLC — Perilous (Next.js Dark Site)

Dark-only site built with **Next.js (App Router)** + **Tailwind**.

**Colors:** Black (#0B0D0F) / White (#FFFFFF) / Accent **#FF7C26**

**Pages:** Home, Perilous, Celebrity Contestants, Talent, Creators, Contact, Shop (coming soon)

## Setup
```bash
npm install
npm run dev
```
Place video at: `public/videos/perilous_home_page_video.mp4`

## Deploy
Push to GitHub → Import into Vercel → Deploy.
Connect domain later in Vercel → Domains when ready.

## Content
- Events: `data/events.json`
- People: `data/contestants.json`, `data/talent.json`, `data/creators.json`
- Perilous gallery + IMDB link: `app/perilous/page.tsx`
- Contact form goes to: mikal@lizardkingz.com (via mailto)
