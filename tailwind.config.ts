import type { Config } from 'tailwindcss'

const config = {
  theme: {
    extend: {
      fontFamily: {
        TeXGyreAdventor: ['TeXGyreAdventor', 'sans-serif'],
        sarasa: ['sarasa', 'sans-serif'],
      },
    },
  },
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
  ],
}

export default config
