# Abdul Rehman — Portfolio

A dark, Jupyter-notebook-themed portfolio built with React 19, Vite, and
Tailwind CSS. Every section is framed like a notebook cell (`In [ ]:` /
`Out[ ]:`) to match a data-scientist's actual workflow.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Before you deploy — 3 things to finish

1. **Favicon image** — `index.html` points to `/public/profile.png`.
   Drop a square image at `public/profile.png` (or update the path).

2. **Contact form (EmailJS)** — open `src/components/Contact.jsx` and
   replace the three placeholders near the top with your own
   [EmailJS](https://www.emailjs.com/) values:
   ```js
   const SERVICE_ID = 'YOUR_SERVICE_ID'
   const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
   ```
   Your EmailJS template should expect `user_name`, `user_email`, and
   `message` fields — that's what the form sends.

3. **Content** — all personal info, skills, and project copy live in
   one place: `src/data/profile.js`. Edit that file to update your
   bio, skills, or add new projects; every section pulls from it
   automatically.

## Structure

```
src/
  data/profile.js       ← all content (name, links, skills, projects)
  components/
    Navbar.jsx
    Hero.jsx             ← typed intro + animated stats
    About.jsx
    Skills.jsx
    Projects.jsx         ← reads from data/profile.js
    Contact.jsx          ← EmailJS form + social links
    Footer.jsx
  App.jsx
  index.css
```

## Suggested next step

Deploy free on GitHub Pages, Vercel, or Netlify — all work well with a
Vite project out of the box.
"# ABXREHMAN-PORTFOLIO" 
 
