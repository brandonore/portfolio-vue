import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// `npm run build` goes through vite-ssg, which renders the page to static HTML
// and then lets Vue hydrate it, so the content is there before any script runs.
export default defineConfig({
  plugins: [vue()],
  ssgOptions: {
    formatting: 'none',
  },
})
