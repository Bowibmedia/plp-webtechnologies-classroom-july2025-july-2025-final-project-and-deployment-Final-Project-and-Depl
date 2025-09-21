# Regibu Global Logistics — Multipage Website

This repository contains a multipage static website for a logistics company built with HTML, CSS and vanilla JavaScript. It demonstrates responsive layouts, interactive UI components, and an organized project structure suitable for deploying to a static host.

## Purpose

- Present the company (Home, About, Services, Gallery, Contact).
- Showcase services, partners, and an image gallery.
- Provide interactive elements: animated counters, FAQ accordion, quote form, gallery cards, and a scrolling partners bar.


## Project structure

Top-level:

- `README.md` 
- `html/` — site source (open `html/index.html` to preview).

Inside `html/`:

- `index.html`, `about.html`, `services.html`, `gallery.html`, `contact.html` — main pages.
- `css/style.css` — primary stylesheet (layout and components).
- `js/script.js` — page scripts (counters, FAQ accordion, partners marquee, small UI logic).
- `image/` — image assets used across the site (logos, hero, icons, photos).


- Header/footer: present in each page — change in every HTML file or adopt a templating workflow.
- Logo image: `html/image/plogo.jpg` — replace to update branding.
- Gallery: `html/gallery.html` (uses `figure.gallery-card` with captions).
- FAQ: located in `index.html` and toggled in `js/script.js`.
- Quote form: `index.html` under `.quote-section`

---

## Key features

- Responsive layout with CSS Grid and Flexbox.
- Hero with call-to-action buttons.
- Services cards, steps, and animated counters.
- Quote form in a dedicated section.
- Partners marquee with continuous scrolling logos.
- Gallery cards with captions.
- FAQ accordion with accessible patterns 


## Editing notes

- Header/footer: to change navigation or logo, update those blocks in each `html/*.html` file or use a build step to include a shared header/footer.
- Logo filenames: avoid spaces (rename to `logo.jpg`) to simplify references.
- Gallery items: edit `gallery.html`, use `figure.gallery-card` and update `<figcaption>` for descriptions.
- FAQ: edit the `.faq-list` in `index.html`. Keep `aria-expanded` and `hidden` attributes for accessibility.
- Quote form: change `form action="#"` to your endpoint or add AJAX in `js/script.js`.
- Partners: update both `.partners-track` lists in `index.html` to keep marquee seamless.

---

## Scripts and behavior

- `html/js/script.js` includes:
   - Counter animation (starts when counters enter viewport using IntersectionObserver).
   - FAQ accordion logic (toggles answers; only one open at a time by default).

- To add AJAX form submission: intercept the submit event, validate inputs, call `fetch()` to your backend, and show success/error UI.

---

## Deployment

- GitHub Pages: push to GitHub and configure Pages. Use the `html/` folder as the site root if needed.
link to website   https://regibugloballogistics.netlify.app/

## Accessibility & responsiveness

- FAQ uses semantic buttons and ARIA attributes — preserve these if modifying.
- Images include `alt` attributes; update them to describe content.
- Test responsive behavior across devices; CSS includes responsive breakpoints.
