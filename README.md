# My Learning Journey Website

A simple multi-page personal website built with **Next.js (App Router)** and **TypeScript**, introducing myself, my learning journey, and my goals as a developer. This project was built as a hands-on assignment to practice the fundamentals of the Next.js App Router.

## 🔗 Live Deployment

- **Live site:** _add your Vercel URL here after deploying_
- **GitHub repository:** _add your GitHub repo URL here_

## 📝 Description

The site is a small "personal brand" website with four main sections — Home, About, Contact, and Blog — where the Blog section itself contains three sub-pages (Frontend, Backend, Mobile). It demonstrates the App Router folder structure, shared root layout vs. nested layout, global styling with a custom Google Font and color palette, and per-page SEO metadata.

## ✨ Features

- **7 routes total**: `/`, `/about`, `/contact`, `/blog`, `/blog/frontend`, `/blog/backend`, `/blog/mobile`
- **Reusable Navbar** with active-link highlighting and a mobile hamburger menu, present on every page
- **Reusable Footer** shared across the whole app
- **Root layout** (`app/layout.tsx`) providing the global font, colors, Navbar, and Footer to every page
- **Nested Blog layout** (`app/blog/layout.tsx`) that automatically wraps every page under `/blog/*` with a Blog Header and Blog Sidebar, without needing to repeat that code on each blog page
- **Global font & colors**: Google Font "Poppins" applied app-wide via `next/font/google`; custom `primary` (indigo) and `secondary` (amber) colors defined in `tailwind.config.ts`
- **Unique SEO metadata** (title + description) exported from every single page via the Next.js Metadata API, with a title template configured in the root layout
- **Fully responsive** layout (mobile, tablet, desktop) using Tailwind's responsive utility classes
- **Bonus features implemented:**
  - Custom `not-found.tsx` (404) page
  - `loading.tsx` skeleton loading state for the Blog section
  - Reusable `<Button />` component (supports link or button usage, with `primary` / `secondary` / `outline` variants) used across Home, Contact, and the 404 page

## 🛠️ Technologies Used

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (Google Font: Poppins)

## 🚀 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-learning-journey
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**
   ```bash
   npm run build
   npm run start
   ```

5. **Deploy to Vercel**
   - Push this repository to GitHub.
   - Import the repo at [vercel.com/new](https://vercel.com/new).
   - Vercel auto-detects Next.js — no extra configuration needed. Click **Deploy**.

## 📁 Folder Structure

```
my-learning-journey/
├── app/
│   ├── layout.tsx              # Root layout: global font, colors, Navbar, Footer
│   ├── page.tsx                # Home page ("/")
│   ├── globals.css             # Global Tailwind styles
│   ├── not-found.tsx           # Custom 404 page (bonus)
│   │
│   ├── about/
│   │   └── page.tsx            # About page ("/about")
│   │
│   ├── contact/
│   │   └── page.tsx            # Contact page ("/contact")
│   │
│   └── blog/
│       ├── layout.tsx          # Nested Blog layout: Blog Header + Sidebar
│       ├── page.tsx            # Blog landing page ("/blog")
│       ├── loading.tsx         # Loading skeleton for blog routes (bonus)
│       │
│       ├── frontend/
│       │   └── page.tsx        # Frontend blog page ("/blog/frontend")
│       ├── backend/
│       │   └── page.tsx        # Backend blog page ("/blog/backend")
│       └── mobile/
│           └── page.tsx        # Mobile blog page ("/blog/mobile")
│
├── components/
│   ├── Navbar.tsx               # Reusable, responsive navigation bar
│   ├── Footer.tsx                # Reusable footer
│   ├── Button.tsx                 # Reusable Button component (bonus)
│   ├── BlogHeader.tsx           # Header used only inside the Blog nested layout
│   └── BlogSidebar.tsx          # Sidebar used only inside the Blog nested layout
│
├── tailwind.config.ts           # Tailwind config with custom primary/secondary colors
├── postcss.config.js
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

### Layout Hierarchy

```
Root Layout (app/layout.tsx)
│
├── Navigation (Navbar)
├── Footer
├── Global Font (Poppins) & Colors (primary / secondary)
│
├── Home Page  ("/")
├── About Page ("/about")
├── Contact Page ("/contact")
│
└── Blog Layout (app/blog/layout.tsx)   ← nested inside Root Layout
    │
    ├── Blog Header
    ├── Blog Sidebar (Blog Navigation)
    │
    ├── Blog Landing Page ("/blog")
    ├── Frontend Blog Page ("/blog/frontend")
    ├── Backend Blog Page ("/blog/backend")
    └── Mobile Blog Page ("/blog/mobile")
```

Every page under `/blog/*` is automatically wrapped by both the **Root Layout** (Navbar/Footer/font/colors) and the **Blog Layout** (Blog Header/Sidebar), demonstrating how nested layouts compose in the Next.js App Router.

## 🎨 Design Choices

- **Font:** Poppins (Google Font), loaded via `next/font/google` and exposed as a CSS variable used by Tailwind's `font-sans`.
- **Primary Color:** Indigo (`#4F46E5`) — used for the navbar, headings, links, and primary buttons.
- **Secondary Color:** Amber (`#F59E0B`) — used for accents, active nav links, and secondary buttons.

## 📱 Responsive Design

The layout adapts across breakpoints using Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`):
- **Mobile:** collapsible hamburger navigation, single-column content and blog sidebar stacked above content.
- **Tablet/Desktop:** full horizontal navigation, multi-column grids, and the blog sidebar sitting alongside the content.
