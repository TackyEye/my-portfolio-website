# My Portfolio Website

A modern, responsive portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**. Showcasing full-stack development skills and projects.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode Support**: Built-in dark theme with smooth transitions
- **Fast Performance**: Next.js optimization, static generation, and image optimization
- **TypeScript**: Type-safe codebase for reliability
- **SEO Optimized**: Meta tags, sitemap, robots.txt, and Open Graph support
- **Contact Form**: Functional contact form with form validation
- **Modern UI**: Clean, professional design with smooth interactions
- **Accessibility**: WCAG compliant components and semantic HTML

## 📋 Pages

- **Home** (`/`): Hero section with call-to-action buttons and tech stack showcase
- **About** (`/about`): Personal story, skills grid, and experience timeline
- **Projects** (`/projects`): Portfolio of projects with descriptions and links
- **Contact** (`/contact`): Contact form and information

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Icon library

### Development Tools
- **ESLint** - Code linting
- **Turbopack** - Fast bundler

### Deployment
- **Vercel** - Hosting and CI/CD

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or higher
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

### Production Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ProjectCard.tsx
└── public/
```

## 🎨 Customization

1. Update your name and info in `src/app/page.tsx`
2. Add your projects in `src/app/projects/page.tsx`
3. Update your bio in `src/app/about/page.tsx`
4. Update social links in `src/components/Footer.tsx`
5. Customize colors using Tailwind CSS classes

## 🚀 Deploy to Vercel

1. Push to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Click Deploy

That's it! Your portfolio is live.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Documentation](https://react.dev)

## 📝 License

MIT License - feel free to use this template for your portfolio!
