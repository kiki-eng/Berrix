# Berrix Software Solutions Website

A modern, SaaS-style website for Berrix Software Solutions built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, minimal SaaS aesthetic inspired by Stripe, Linear, and Vercel
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized for fast load times and excellent Lighthouse scores
- **Accessible**: Built with accessibility in mind (focus states, keyboard navigation, proper contrast)
- **Type-Safe**: Full TypeScript support throughout
- **Animations**: Subtle Framer Motion animations for enhanced UX

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── services/          # Services pages
│   ├── book-consultation/ # Consultation booking page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── layout/           # Header, Footer
│   └── animations/       # Animation wrappers
├── lib/                  # Utilities and data
│   ├── services.ts      # Service data
│   └── utils.ts         # Helper functions
└── public/               # Static assets
```

## Pages

- **Home** (`/`): Hero, services grid, how it works, why Berrix, CTA
- **Services** (`/services`): List of all services
- **Service Detail** (`/services/[slug]`): Individual service pages
- **Book Consultation** (`/book-consultation`): Step-based consultation booking form

## Design System

- **Primary Color**: Azure Blue (#1e3a8a)
- **Typography**: Inter (via Next.js font optimization)
- **Border Radius**: 8-12px (rounded-lg, rounded-xl)
- **Spacing**: Consistent Tailwind spacing scale
- **Shadows**: Subtle shadows for depth

## Building for Production

```bash
npm run build
npm start
```

## License

Copyright © 2024 Berrix Software Solutions. All rights reserved.

