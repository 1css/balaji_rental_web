# Balaji Rentals — Website Redesign

A responsive, animated Vite + React rebuild of rentals.balajitransports.in, styled
in a "site plan / blueprint" theme suited to a commercial & industrial rental brand.

## Stack
- Vite + React 18
- React Router v6 (Home, About, Properties, Contact + 404)
- Plain CSS — one stylesheet per component, no CSS framework
- No external UI libraries; animations are hand-rolled CSS + a couple of small hooks

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/        one folder per component, each with Component.jsx + Component.css
  pages/              Home, About, Services, Contact, NotFound
  data/               properties.js, clients.js (edit these to update listings/content)
  hooks/              useScrollReveal.js, useCountUp.js
  styles/theme.css    design tokens (color, type, spacing, motion) + global reset
```

## CSS convention

Every component's CSS is scoped by nesting under the component's root class, e.g.:

```css
.navbar .navbar-link { ... }
.property-card .property-card-title { ... }
```

This keeps each stylesheet self-contained and avoids class name collisions without
needing CSS Modules.

## Editing content

- Property listings: `src/data/properties.js`
- Client logos, stats, contact details: `src/data/clients.js`
- Copy on each page: edit directly inside `src/pages/*/*.jsx`

## Notes

- Images currently reference the original site's asset URLs (`rentals.balajitransports.in/assets/...`)
  and a couple of Unsplash stock photos for hero imagery. Swap these for your own
  hosted images before going live.
- The contact form is front-end only (simulated submit with validation). Wire the
  `handleSubmit` function in `src/components/ContactForm/ContactForm.jsx` up to your
  backend or a form service (Formspree, EmailJS, etc.) to actually deliver messages.
- Motion respects `prefers-reduced-motion`.
