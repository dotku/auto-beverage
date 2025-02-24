/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#2563eb',
          900: '#1e3a8a',
        },
        purple: {
          800: '#6b21a8',
        },
      },
    },
  },
  plugins: [],
};