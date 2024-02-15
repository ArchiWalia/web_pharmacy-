/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#3D78CB',
        'secondary-color': '#77a0db',
        'base-color': 'var(--base-color)',
      }
    },
  },
  plugins: [],
}

