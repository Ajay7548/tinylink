# 🚀 TinyLink — Modern URL Shortener 
A fast, secure, and production-ready URL shortening service built with Next.js 16 (App Router), Prisma, PostgreSQL (Neon), and deployed on Vercel.

TinyLink allows users to create custom short links, track analytics, and manage URLs in a clean dashboard.

---
🔗 **Live Demo:** [Click Here](https://realtime-chat-app-asqu.onrender.com)  
## 📌 Features  

### 🌐 Core Functionality
- Shorten any long URL  
- Custom short codes (6–8 characters)  
- Redirect via /{code}  
- Track:
  - Total clicks  
  - Last clicked time  
  - Creation timestamp  

### 🖥️ Dashboard
- Responsive table view of all links  
- Add new short link (modal form)  
- Delete link (modal confirmation)  
- Clean UI with Tailwind CSS  
- Real-time toast notifications (Sonner)

### 🧠 Backend Validation
- Valid URL format  
- Short code regex: /^[A-Za-z0-9]{6,8}$/  
- Duplicate code → 409  
- Missing fields → 400  

### 🔁 Redirect Behavior
- /code → Redirect to original URL  
- Increments click count  
- Stores last-clicked timestamp  
- Uses 302 Redirect

### 🩺 Health Check  
Endpoint: /healthz  
Response example:
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

---

## 🛠️ Tech Stack  

| Layer     | Technology |
|----------|------------|
| Frontend | Next.js 16 • React • Tailwind CSS |
| Backend  | Next.js Route Handlers |
| Database | Neon PostgreSQL |
| ORM      | Prisma |
| Deploy   | Vercel |
| Toasts   | Sonner |

---

## 📁 Project Structure  

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

---

## 🔧 Environment Variables  

DATABASE_URL="your-neon-postgres-url"  
NEXT_PUBLIC_BASE_URL="https://your-vercel-project.vercel.app"  

---

## 🗄️ Prisma Setup  

npx prisma generate  
npx prisma db push  

---

## ▶️ Development Setup  

npm install  
npm run dev  

Visit: http://localhost:3000

---

## 🚀 Deployment (Vercel + Neon)

### 1. Add Prisma Build Script
In package.json:
"build": "prisma generate && next build"

### 2. Add Vercel Environment Variables
DATABASE_URL=  
NEXT_PUBLIC_BASE_URL=  

### 3. Push to GitHub  
Vercel auto-deploys.

---

## 📡 API Endpoints

### Create Short Link  
POST /api/links

### Get All Links  
GET /api/links

### Delete Link  
DELETE /api/links/{code}

### Redirect  
GET /{code}

### Health Check  
GET /healthz

---

## 🧪 Demonstrates
- Next.js full-stack  
- API validation  
- Prisma  
- Database schema  
- UI/UX with Tailwind  
- Deployment  
- Error-handling  
- Production-ready patterns  

---

## 📜 License  
MIT License © 2025 — Ajay Kumar Mourya
