# Owais Ahmad - Data Engineer Portfolio

Premium recruiter-focused portfolio built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons, React Icons, and Recharts-ready architecture.

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit Portfolio Content

Most content lives in `src/data/portfolio.ts`:

- Profile and social links
- Skills
- Experience
- Projects
- Certifications
- Lakehouse architecture steps

Update this file to add new projects, certificates, technologies, or experience without changing the UI components.

## Project Structure

- `src/app` - Next.js App Router pages, metadata, robots, sitemap, 404
- `src/components` - reusable UI sections and components
- `src/data` - typed portfolio content
- `public` - static assets for Next.js
- `assets` - downloadable resume text files retained from the static version

## Deployment

This project is Vercel-ready.

```bash
npm run build
```

Then deploy the repository to Vercel.
