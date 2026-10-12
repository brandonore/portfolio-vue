# brandonore.io

My personal site: the work I have shipped, first with a team at The Futures Desk and then on my own.

## Stack

- Vue 3 and Vite
- Tailwind CSS
- [vite-ssg](https://github.com/antfu-collective/vite-ssg) renders the page to static HTML at build time, and Vue hydrates it in the browser

## Commands

```bash
npm install
npm run dev       # local dev server
npm run build     # static build into dist/
npm run preview   # serve the build locally
```

Node 20.19 or newer (see `.nvmrc`).

## Layout

- `index.html`: head tags, link-preview tags and the Person schema
- `src/App.vue`: the page, section by section
- `src/components/`: one component per section, and one per product "room"
- `src/links.js`: the email and GitHub links used across the page
- `tailwind.config.js`: the page palette, plus each product's own colours for its room
- `public/work/`: screenshots, icons and the clip for each product
- `netlify.toml`: build command, publish folder and cache headers
