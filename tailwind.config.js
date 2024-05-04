const flowbite = require('flowbite-react/tailwind')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: '#05445E',
        light: '#f3f4f6',
        lightGray: '#94a3b8'
      }
    }
  },
  plugins: [flowbite.content()]
}
