/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        clashdisplay: ['ClashDisplay-Variable', 'sans-serif'],
        archivo: ['Archivo-Variable', 'sans-serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
