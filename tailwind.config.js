/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily:{
      oswald: "Oswald, sans-serif",
      urbanist: "Urbanist, sans-serif"
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        oswald: ['var(--font-oswald)'],
        urbanist: ['var(--font-urbanist)']
      }
    },
  },
  plugins: [],
}
