/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '375px',
        xl: '1440px',
      },
      colors: {
        primary: {500: '#3B82F6',600: '#2563EB',700:'#1D4ED8'},
        success:'#10B981',
        warning:'#F59E0B',
        gray:{50:'#F9FAFB',100:'#F3F4F6',200:'#E5E7EB',500:'#6B7280',900:'#111827'}
      },
      fontFamily:{sans:['Inter','sans-serif']},
      boxShadow:{'figma-md':'0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)'}
    },
  },
  plugins: [],
};
