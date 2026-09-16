# Nikhil Singh — Portfolio & Freelance Web Dev Website

A React + Tailwind CSS website that works both as a personal portfolio and a
freelance web development business site. Frontend only — no backend, no
database, no authentication.

Brand name used on the site: **NS Webcraft** (by Nikhil Singh). You can
change this any time in `src/data/profile.js`.

---

## 1. How to install

You need [Node.js](https://nodejs.org) (v18 or newer) installed.

```bash
npm install
```

## 2. How to run locally

```bash
npm run dev
```

This starts a local dev server, usually at **http://localhost:5173**. The
page auto-reloads whenever you save a file.

## 3. How to build for production

```bash
npm run build
```

This creates a `dist/` folder containing the finished, optimized website.
You can preview that build locally before deploying:

```bash
npm run preview
```

## 4. Where to change your personal information

Almost everything editable lives in `src/data/`. You won't need to touch
component code to update your details.

| File | What it controls |
|---|---|
| `src/data/profile.js` | Name, brand name, tagline, location, email, phone, WhatsApp, GitHub, LinkedIn, portfolio link, resume path, profile photo path |
| `src/data/services.js` | The service cards on the Services section |
| `src/data/projects.js` | Your project portfolio |
| `src/data/skills.js` | Skills & technologies, grouped by category |
| `src/data/experience.js` | Work / internship experience |
| `src/data/education.js` | Education timeline |
| `src/data/certifications.js` | Courses & certificates |
| `src/data/process.js` | The "How I Work" steps |
| `src/data/whyChooseUs.js` | The "Why Choose Us" points |

To change your name, email, phone, or social links, open
**`src/data/profile.js`** and edit the values there — every component reads
from this one file.

## 5. Where to add project screenshots

1. Save an image into `public/projects/` (1200×750px / 16:10 ratio works well as PNG or JPG).
2. Reference it from `src/data/projects.js`:
   ```js
   image: "/projects/your-screenshot.png",
   ```
   If the file is missing, the project card automatically shows a
   "Screenshot coming soon" placeholder instead of a broken image icon.

## 6. Where to add your resume

Place your resume PDF at:

```
public/resume.pdf
```

The Resume section's "View" and "Download" buttons already point to this
path. If the file isn't there yet, the site shows a small notice instead of
pretending the file exists — nothing breaks.

## 7. Where to change project URLs (live site / GitHub)

Open `src/data/projects.js` and edit `liveUrl` and `githubUrl` for each
project. Leave either one as `""` (empty string) if you don't have it yet —
the matching button is automatically hidden.

## 8. Where to change services, skills, and certifications

- Services → `src/data/services.js` (icon name must exist in `src/data/iconMap.js`; add more icons there if you use a new one)
- Skills → `src/data/skills.js`
- Certifications → `src/data/certifications.js`

## 9. Profile photo

Place your photo at:

```
public/profile.jpg
```

(or update `profileImage` in `profile.js` if you use a different filename).
Until you add it, the About section shows a simple placeholder icon instead
of a broken image.

---

## 10. How to deploy to Vercel

**Option A — using the Vercel website (no command line needed):**

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and sign in (you can use your GitHub account).
3. Click **Add New → Project**, then select your repository.
4. Vercel will auto-detect it as a Vite project. Keep the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Deploy**. Your site will be live at a `*.vercel.app` URL within a minute.

**Option B — using the Vercel CLI:**

```bash
npm install -g vercel
vercel login
vercel        # first deploy (follow the prompts)
vercel --prod # deploy to production
```

A `vercel.json` file is already included in this project with the correct
build settings, so either option works without extra configuration.

After deploying, update the placeholder domain (`https://nikhilsingh.dev`)
inside `index.html` (meta tags) and `public/sitemap.xml` with your real
Vercel URL or custom domain.

---

## What still needs to be added before going fully public

- `public/resume.pdf` — your actual resume file
- `public/profile.jpg` — a profile photo
- GitHub repo links for your two live projects (`src/data/projects.js`), if you want the "Code" button to appear
- A screenshot for each project in `public/projects/`
- The third `[YOUR PROJECT NAME]` placeholder project in `projects.js` — replace it with a real project, or delete the object if you only want to show two projects for now
- Your real domain, once you have one (replace `https://nikhilsingh.dev` in `index.html` and `sitemap.xml`)
- Whether you want pricing shown anywhere (not included by default)

## Tech stack

React 19, Tailwind CSS 3, Vite, lucide-react (icons). The contact form uses
`mailto:` to open the visitor's email app — no data is submitted to a server
or stored anywhere. Direct WhatsApp and click-to-call links are also
provided.
