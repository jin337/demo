/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      Courier: ['Courier New', 'Courier', 'monospace'],
    },
    extend: {
      backgroundImage: {
        triangle: "url('/src/assets/imgs/transparent.png')",
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(-20px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
