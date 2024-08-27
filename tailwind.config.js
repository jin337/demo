/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      Courier: ['Courier New', 'Courier', 'monospace'],
    },
    extend: {
      backgroundImage: {
        triangle: "url('/src/assets/transparent.png')",
      },
    },
  },
  plugins: [],
}
