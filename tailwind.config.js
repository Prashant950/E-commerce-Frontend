/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          50: '#faf8f6',
          100: '#f5f1ed',
          200: '#e8dfd6',
          300: '#dccdbf',
          400: '#c9ada7',
          500: '#b69890',
          600: '#9d7f7a',
          700: '#6d5d59',
          800: '#483c38',
          900: '#2a211e',
        },
        gold: {
          50: '#fffbf0',
          100: '#fef5e0',
          200: '#fce4b1',
          300: '#fad382',
          400: '#f7b724',
          500: '#f4a400',
          600: '#d68a00',
          700: '#b87000',
          800: '#9a5600',
          900: '#7c3c00',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Segoe UI', 'sans-serif'],
      },
      spacing: {
        'safe': 'env(safe-area-inset-bottom)',
      },
    },
  },
  plugins: [],
}
