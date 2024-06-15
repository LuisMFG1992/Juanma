const flowbite = require('flowbite-react/tailwind')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        contact: 'https://dummyimage.com/720x600'
      },
      colors: {
        primary: '#05445E',
        light: '#f3f4f6',
        lightGray: '#94a3b8'
      },
      fontSize: {
        paragraph: '1.3rem',
        subtitle: '1.7rem',
        title: '2.25rem'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: [flowbite.content()]
}
