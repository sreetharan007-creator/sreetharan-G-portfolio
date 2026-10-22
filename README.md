# Sreetharan G: portfolio (React + Vite)

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
```

## Publish on GitHub Pages

Your old site lives in the `sreetharan-G-portfolio` repo. Put these files in that repo (or a new one), then:

```bash
npm run deploy     # builds and pushes ./dist to the gh-pages branch
```

In the repo go to Settings > Pages and set the source to the `gh-pages` branch.
`vite.config.js` uses `base: './'`, so it works under any repo name.

## Pages

The site uses hash routing, so it needs no server setup:

| Page | Address |
| --- | --- |
| Home | `#/` |
| Work (filter and sort) | `#/work` |
| One project, with all its screens | `#/work/cart-drawer` |
| Gallery (filter and lightbox) | `#/gallery` |
| About, skills, experience | `#/about` |
| Contact | `#/contact` |

## What to edit

Almost everything is in `src/data.js`:

- `projects`: add, remove or reorder gallery projects. `featured: true` puts a project in the hero slider.
- `projects[].image`: path to your own screenshot, for example `./images/filter.jpg` with the file in `public/images/`. Leave it empty to show the drawn mock-up.
- `projects[].shots`: the extra images shown on that project's own page.
- `gallery`: every image on the Gallery page. Add an entry with `image: './images/your-file.jpg'`.
- `screens`: the phone slider on the home page.
- `skills`, `learning`, `services`, `experience`, `profile`: the text sections and your email.

Colours and fonts are CSS variables at the top of `src/styles.css`.

## Animation

Page transitions, scroll reveals (`components/Reveal.jsx`), the hero entrance and the tools band
(`components/Marquee.jsx`) are all CSS and a small hook. Everything switches off for visitors who have
"reduce motion" turned on. The animation rules are at the bottom of `src/styles.css`.

## Notes

- The first three projects point at the images already on your old site. If a link breaks, the card falls back to the drawn mock-up.
- The projects after the first three, and every gallery image without a photo, are samples. Replace them with real work.
- The contact form opens the visitor's email app (no server needed). For a real form handler, swap `onSubmit` in `Contact.jsx` for Formspree or Web3Forms.
