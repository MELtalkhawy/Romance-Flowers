/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F5',
        blush: '#F4E6E6',
        charcoal: '#222222',
        gold: {
          DEFAULT: '#C5A059',
          light: '#D8BA7C',
          dark: '#A6833E',
        },
      },
      fontFamily: {
        arabic: ['var(--font-cairo)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 14px 40px -12px rgba(34, 34, 34, 0.10)',
        'luxury-hover': '0 22px 50px -14px rgba(197, 160, 89, 0.24)',
        'gold-glow': '0 8px 24px -6px rgba(197, 160, 89, 0.35)',
      },
    },
  },
  plugins: [],
};
