# 🌏 Mekong Trails — Web Project

A 9-page Vietnam & Southeast Asia travel website built for **Web Application Development — Lab 1 (Part 3: Assignment 1)**.

---

## 🗺️ Site Map

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, featured destinations, blog teaser, CTA |
| About | `about.html` | Founders story, team, stats, values |
| Destinations | `destinations.html` | Hội An, Sapa, Angkor Wat, Luang Prabang |
| Itineraries | `itineraries.html` | 7-day, 10-day, 14-day curated routes |
| Gallery | `gallery.html` | Masonry photo gallery with figcaptions |
| Blog List | `blog.html` | Blog post cards + sidebar |
| Blog Post | `post-1.html` | Sample post: Cà Phê Sữa Đá Trail in Saigon |
| Visit Us | `map.html` | Google Maps iframe + YouTube iframe |
| Contact / Plan | `contact.html` | **Full trip-request form (all 4.2 types)** |
| Policy | `policy.html` | Privacy policy, credits, AI usage log |

---

## 🛠️ Technical Features

### 4.1 HTML & Structure
- **9 separate HTML files** (exceeds 5–10 requirement)
- Semantic tags throughout: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<figure>`, `<figcaption>`, `<footer>`, `<time>`
- Consistent navigation bar and footer on every page
- Internal links (nav, CTAs, breadcrumbs) and external links (Unsplash, Google Fonts, GitHub)
- **20+ images** with descriptive `alt` text; multiple `<figure>/<figcaption>` pairs
- **Google Maps iframe** (`map.html`) + **YouTube iframe** (`map.html`)
- Full-featured form (`contact.html`)
- Breadcrumb navigation on all inner pages

### 4.2 Form Requirements — All types covered ✅

| Input Type | Field |
|---|---|
| `text` | Full Name |
| `email` | Email Address |
| `tel` | Phone Number |
| `password` | Account Password |
| `number` | Trip Duration (days) |
| `date` | Departure Date |
| `range` | Daily Budget (USD) |
| `color` | Favourite Travel Colour |
| `file` | Inspiration Photos upload |
| `radio` | Travel Group Type |
| `checkbox` | Accommodation Preferences, Newsletter, Privacy Consent |
| `select` + `<optgroup>` | Travel Style (4 option groups) |
| `textarea` | Special Requests |
| `datalist` | Preferred Starting Destination |
| `hidden` | form_version, source_page |
| `submit` / `reset` | Submit Trip Request / Clear Form |

**Attributes used:** `required`, `pattern`, `min`, `max`, `step`, `minlength`, `maxlength`, `accept`, `multiple`

**Bonus elements:** `<progress>` (form completion %), `<meter>` (booking availability), `<output>` (live range value)

- All inputs have `<label for="">` associations
- Grouped with `<fieldset>` + `<legend>` (4 fieldsets)
- Friendly inline error messages via JS + `role="alert"`

### 4.3 CSS & Styling
- **External** `assets/css/styles.css`
- **CSS custom properties** for all colours, spacing, and effects
- **Flexbox** (nav, hero, cards, form layout, footer)
- **CSS Grid** (card grids, gallery, itinerary cards, about layout)
- **Responsive** at **768px breakpoint** (mobile nav, single-column, stacked grids)
- Additional breakpoint at 480px for phones
- Hover/focus states on all interactive elements
- Visible focus rings for keyboard navigation (`focus-visible`)
- Consistent teal/jade + gold colour scheme throughout

### 4.4 Accessibility
- Skip-to-content link on every page
- `aria-label` on nav, iframes, images, buttons
- `aria-required`, `aria-describedby`, `role="alert"` for form errors
- `aria-live="assertive"` on form success message
- `aria-expanded` on mobile hamburger button
- `aria-current="page"` set dynamically on active nav link
- Logical heading order (h1 → h2 → h3 → h4) throughout
- All images have descriptive `alt` text
- Font size ≥ 16px base
- Colour contrast: jade (#1B4F5A) on cream (#F8F3E8) — ratio > 7:1 ✅

### 4.5 Optimization & Quality
- Images loaded from Unsplash CDN (optimised delivery)
- `loading="lazy"` on all below-fold images
- Favicon via emoji (fav.farm — lightweight, no local file needed)
- `<meta viewport>` and `<meta description>` on every page
- Unique `<title>` tags on every page
- Open Graph (og:) tags on every page for social sharing
- Clean folder structure (see below)

### 4.6 Deployment
- Ready to deploy on **GitHub Pages** or **Netlify** (no build step required)
- All paths are relative — works from any root

---

## 📁 Folder Structure

```
mekong-trails/
├── index.html
├── about.html
├── destinations.html
├── itineraries.html
├── gallery.html
├── blog.html
├── post-1.html
├── contact.html
├── map.html
├── policy.html
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    └── js/
        └── main.js
```

---

## 🚀 How to Run

**Locally:** Open `index.html` in any modern browser. No build step required.

**Deploy to GitHub Pages:**
1. Push repo to GitHub
2. Go to **Settings → Pages → Source:** `main` branch, `/ (root)` folder
3. Live URL: `https://<username>.github.io/<repo-name>/`

**Deploy to Netlify:**
1. Drag the `mekong-trails/` folder into [netlify.com/drop](https://app.netlify.com/drop)
2. Or connect GitHub repo for continuous deployment

---

## 🖼️ Credits

- **Photography:** All images from [Unsplash](https://unsplash.com) (Unsplash License)
- **Fonts:** [Cormorant Garant](https://fonts.google.com/specimen/Cormorant+Garant) + [Source Serif 4](https://fonts.google.com/specimen/Source+Serif+4) via Google Fonts (SIL OFL)
- **Favicon:** [fav.farm](https://fav.farm) (🌏 emoji favicon)
- **Map:** Google Maps Embed API
- **Video:** YouTube Embed

---

## 🤖 AI Usage Log

| Tool | Prompt Used | How I Modified |
|------|-------------|----------------|
| Claude (Anthropic) | "Build a Vietnam/Southeast Asia travel site with all 4.2 form requirements, HTML5 semantics, responsive CSS, Google Maps + YouTube iframes, and WCAG accessibility" | Reviewed all code; adjusted destination content to reflect real Vietnam/SEA locations; customised colour scheme (jade + gold travel palette); verified every form field type against the assignment rubric; checked heading hierarchy and ARIA labels; added itinerary content specific to real routes; wrote the blog post narrative |

> All code was reviewed and intentionally customised.

