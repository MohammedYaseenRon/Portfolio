/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '1': '1',
      },
      colors: {
        'eerie-black': '#1B1B1B',
        'y-gradient':'linear-gradient(to right, hsl(45, 100%, 72%), hsl(35, 100%, 68%))',
        'framer-text': 'rgba(182, 180, 189, 0.2)', // Add a fallback value for the variable

      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)',
        'yellow-gradient':'linear-gradient(to right, hsl(45, 100%, 72%), hsl(35, 100%, 68%))',
        
      },
      boxShadow: {
        'custom-soft': '-4px 8px 24px hsla(0, 0%, 0%, 0.125)',
      },
      zIndex: {
        '1': '1',
      },
    },
  },
  plugins: [],
}

