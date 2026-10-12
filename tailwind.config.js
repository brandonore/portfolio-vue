/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        // The page itself: ink on white. The names match pomkatsu.com so markup moves between the two.
        primary: {
          DEFAULT: '#1D1E22', // headings and text
          light: '#5C6068',   // secondary text
          dark: '#0F1012',    // strongest text, hover on ink fills
        },
        secondary: {
          DEFAULT: '#FFFFFF', // page
          light: '#F4F5F7',   // trays and hover fills
          dark: '#E3E5E9',    // borders
        },
        live: '#12D45F', // status dot for a shipped product

        // Each product keeps its own colours inside its room.
        // The Futures Desk: its app background and the gold of its logo
        tfd: {
          night: '#101010',
          bezel: '#2C2C2C',
          gold: '#CCBA83',
          'gold-dark': '#B9A66C',
        },
        myseedstory: {
          forest: '#1B4332',
          'forest-light': '#2D6A4F',
          clay: '#A05C42',
          'parch-warm': '#F5F1E8',
          'parch-text': '#1A1A16',
        },
        // CertMatrix Carbon Light
        certmatrix: {
          wall: '#efece5',
          paper: '#e7e3da',
          ink: '#15140f',
          acc: '#8136e3',
          'acc-dark': '#6a25c9',
        },
        et: {
          purple: '#a855f7',
          'purple-dark': '#9333ea',
          navy: '#000922', // app icon background
        },
        // BCP Flow: the slate of its app, a pale tint of it for the room, and its orange
        // (a shade deeper than the app's, so white text on it passes AA)
        bcp: {
          mist: '#E4E9F2',
          slate: '#1B2433',
          orange: '#CC4A27',
          'orange-dark': '#B8401F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        brand: ['Figtree', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
