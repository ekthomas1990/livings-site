# Livings Architecture + Interiors — Website (Next.js + Tailwind)

This folder is ready to deploy. Follow the steps below (no coding required).

## What you need
- A **GitHub** account (free) — stores your site’s files.
- A **Vercel** account (free) — builds and hosts your site.

---

## Step 1 — Download the project
If you received this as a ZIP, unzip it so you have a folder named `livings-site`.

Files to note:
- `public/assets/livings_logo.png` — your logo (already included)
- `components/Site.tsx` — your website content
- `public/assets/Jordan-Livings-CV.pdf` — placeholder CV for download

---

## Step 2 — Create a GitHub repository
1. Go to https://github.com and log in (create an account if needed).
2. Click **+** (top-right) → **New repository**.
3. Name it **livings-site** and click **Create repository**.
4. On the new repo page, click **“uploading an existing file”**.
5. Drag all the files **from inside** the `livings-site` folder into the GitHub upload area.   (Tip: open the `livings-site` folder on your computer, select everything inside it, and drag to the browser.)
6. Scroll down and click **Commit changes**.

---

## Step 3 — Deploy on Vercel
1. Go to https://vercel.com and log in with GitHub.
2. Click **Add New… → Project** → **Import Git Repository**.
3. Choose your **livings-site** repo and click **Import**.
4. On the configuration screen, you can leave defaults. Framework auto-detects **Next.js**.
5. Click **Deploy**. Vercel will build your site and give you a live URL like `https://livings-site.vercel.app`.

---

## Step 4 — Replace the placeholder CV (optional)
- Replace `public/assets/Jordan-Livings-CV.pdf` with your real PDF, then “Commit” on GitHub.  Vercel will auto-redeploy and the **Request CV (PDF)** link will download the new file.

---

## Step 5 — Custom domain (optional)
- In Vercel, open your project → **Settings → Domains** → add `livingsarchitecture.com` (or your domain).
- Follow Vercel’s steps to update your DNS.

---

## Step 6 — Font (Acadflux) later
- Put your `acadflux.woff2` at `public/assets/fonts/acadflux.woff2` and tell your developer to add an `@font-face` rule in `styles/globals.css`. (We left a comment there.)

---

## Day-to-day changes
- Edit text or sections in `components/Site.tsx` (in GitHub’s editor or locally).
- When you commit changes, Vercel automatically updates your live site.

If you need help with any step, grab me and I’ll adjust it in minutes.
