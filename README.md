🚀 TinyLink — Modern URL Shortener

A fast, secure, and production-ready URL shortening service built with Next.js 16 (App Router), Prisma, PostgreSQL (Neon), and deployed on Vercel.

TinyLink allows users to create custom short links, track analytics, and manage URLs in a clean dashboard.

📌 Features
🌐 Core Functionality

Shorten any long URL

Custom short codes (6–8 characters)

Redirect via /{code}

Track:

Total clicks

Last clicked time

Creation timestamp

🖥️ Dashboard

Responsive table view of all links

Add new short link (modal form)

Delete link (modal confirmation)

Clean UI with Tailwind CSS

Real-time toast notifications (Sonner)

🧠 Backend Validation

Valid URL format

Short code regex:

/^[A-Za-z0-9]{6,8}$/


Duplicate code → 409 Conflict

Missing fields → 400 Bad Request

🔁 Redirect Behavior

/code → Redirect to original URL

Increments click count

Stores last-clicked timestamp

Uses 302 Redirect

🩺 Health Check

Endpoint: /healthz
Returns:

{
  "ok": true,
  "version": "1.0",
  "system": {
    "platform": "...",
    "arch": "...",
    "node": "..."
  },
  "uptime": 123.45
}

🛠️ Tech Stack
Layer	Technology
Frontend	Next.js 16 • React • Tailwind CSS
Backend	Next.js Route Handlers
Database	Neon PostgreSQL
ORM	Prisma
Deploy	Vercel
Toasts	Sonner
📁 Project Structure
/app
  /api
    /links
      route.js
    /links/[code]
      route.js
  /[code]
      page.js
  /Dashboard
      page.js
  /components
      Navbar.jsx
      AddModal.jsx
      DeleteModal.jsx
  /healthz
      route.js

/prisma
  schema.prisma

/lib
  db.js

.env
README.md

🔧 Environment Variables

Inside .env:

DATABASE_URL="your-neon-postgres-url"
NEXT_PUBLIC_BASE_URL="https://your-vercel-project.vercel.app"

🗄️ Prisma Setup

Run once:

npx prisma generate
npx prisma db push

▶️ Development Setup
npm install
npm run dev


Visit:
👉 http://localhost:3000

🚀 Deployment (Vercel + Neon)
🔹 1. Add Prisma Build Script

Edit package.json:

"scripts": {
  "dev": "next dev",
  "build": "prisma generate && next build",
  "start": "next start"
}

🔹 2. Add Environment Variables in Vercel
DATABASE_URL=
NEXT_PUBLIC_BASE_URL=

🔹 3. Push to GitHub

Vercel auto-builds & deploys.

📡 API Endpoints
➤ Create Short Link

POST /api/links

Body:

{
  "fullUrl": "https://google.com",
  "code": "abc123"
}


Responses:

201 Created

409 Duplicate

400 Invalid input

➤ Get All Links

GET /api/links

➤ Delete Link

DELETE /api/links/{code}

➤ Redirect

GET /{code}
Redirects + increments clicks

➤ Health Check

GET /healthz

🧪 What This Project Demonstrates

Next.js full-stack capability

API + validation logic

Prisma ORM skills

Database schema design

Client-side modals + UX

Production deployment skills

Error-handling and logs

Clean, minimal, professional UI

Perfect for:

✔️ Resume
✔️ Portfolio
✔️ Interview showcase
✔️ Real-world deployment experience

📜 License

MIT License © 2025 — Ajay Kumar Mourya

✅ Done.

Your complete README is above — fully ready to COPY & PASTE.
