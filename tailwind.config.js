/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'club-yellow': '#FFD700', // Gold/Yellow
        'club-black': '#111111',  // Rich Black
        'club-dark': '#1A1A1A',   // Secondary Dark
        'club-gray': '#F3F4F6',
        'club-accent': '#E5C100', // Darker Gold for hover
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'], // For Headings
      },
      backgroundImage: {
        'club-gradient': 'linear-gradient(135deg, #111111 0%, #1A1A1A 100%)',
        'hero-gradient': 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
