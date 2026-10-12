import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'
import './style.css'

// One page, rendered to HTML at build time and hydrated in the browser
export const createApp = ViteSSG(App)
