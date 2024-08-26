/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        triangle: "url('/src/assets/transparent.png')",
      },
    },
  },
  plugins: [],
}
