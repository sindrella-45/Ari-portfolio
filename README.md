# Sindrella Acen — Portfolio

Production-ready personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Syne (display) + DM Sans (body) + DM Mono

## Getting Started

### 1. Clone or download the project

```bash
cd cindy-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your profile photo

Place your photo at:

```
public/profile.png
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or drag the project folder into [vercel.com](https://vercel.com).

## Customisation

| File | What to edit |
|---|---|
| `src/data/projects.ts` | Project cards |
| `src/data/skills.ts` | Skill categories |
| `src/data/experience.ts` | Experience & education |
| `src/components/sections/Hero.tsx` | Name, title, tagline |
| `src/components/sections/About.tsx` | Bio paragraphs |
| `src/components/sections/Contact.tsx` | Contact details |
| `public/profile.png` | Your photo |

## Folder Structure

```
src/
├── app/               # Next.js App Router
├── components/
│   ├── layout/        # Navbar, Footer, ThemeProvider
│   ├── sections/      # Page sections (Hero, About, etc.)
│   └── ui/            # Reusable UI components
├── data/              # Content data files
└── lib/               # Utilities
```