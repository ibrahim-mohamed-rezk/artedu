# ArtEdu

ArtEdu — an Arabic (RTL) online education platform for Egyptian secondary students. Browse video courses by subject and grade, meet the teachers, buy books, practise with a question bank, and manage purchases from your profile.

**Live demo:** https://artedu-plum.vercel.app

> This repository contains the frontend only; it loads its content from the project's backend API through Axios (`libs/axios.ts`).

## Features

- **Video courses** — courses by subject and grade, with course detail pages and a video player (`app/(app)/courses`, `app/(app)/course/[id]`).
- **Teachers** — teacher profiles and teacher listings (`app/(app)/teachers`, `app/(app)/teacher/[id]`).
- **Books store** — books for sale, with a book detail page (`app/(app)/books`, `app/(app)/book/[id]`).
- **Question bank** — practice questions (`app/(app)/QuestionsBanck`).
- **Cart & favorites** — a shopping cart and a favorites list (`app/(app)/shopping-cart`, `app/(app)/favorites`).
- **Auth** — sign-in and sign-up (`app/(auth)`).
- **Profile & my purchases** — profile page with purchased courses and books (`app/(app)/profile`).
- **Payments flow** — payment pages for courses and books (`app/(app)/payments/[type]/[itemId]`).
- **Blogs** — articles (`app/(app)/blogs`, `app/(app)/blog/[id]`).
- **Join us** — teacher sign-up (`app/(app)/join-us`).
- **Support pages** — about, contact us, notifications, privacy and terms.
- **Arabic-first, RTL interface** — the app is built for Arabic-speaking students.

## Tech Stack

- Next.js 15.1.11 (App Router) — `next`
- React 19.0.0 — `react`, `react-dom`
- TypeScript — `typescript`
- Tailwind CSS 3.4.1 — `tailwindcss`, `postcss`, `autoprefixer`
- State management — Redux Toolkit 2.5.1 (`@reduxjs/toolkit`, `react-redux`)
- Data fetching — Axios 1.7.9 (`libs/axios.ts`)
- UI — Swiper 11.2.2, `react-toastify` 11.0.2, `react-icons` 5.4.0

## Project Structure

```
app/
  (app)/        # Courses, teachers, books, question bank, cart, profile, payments, blogs
  (auth)/       # Sign-in and sign-up
  layout.tsx    # Root layout
components/     # Shared components (including home-page sections)
libs/           # API client (axios), Redux store
```

## Getting Started

### Prerequisites

- Node.js and npm

### Install and run

```bash
git clone https://github.com/ibrahim-mohamed-rezk/artedu.git
cd artedu
npm install
npm run dev
```

The dev script is `next dev -p 3010`, so open [http://localhost:3010](http://localhost:3010) in your browser.

### Other commands

```bash
npm run build   # Production build (next build)
npm start       # Start the production server (next start)
npm run lint    # Lint (next lint)
```
