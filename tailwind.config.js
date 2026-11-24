/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Archivo', 'sans-serif'],
        sans: ['"Source Sans 3"', 'sans-serif'],
      },
      colors: {
        // Construction amber — hard-hat / machinery accent (not fire-engine red)
        primary: {
          50: '#FFF9ED',
          100: '#FEF1D0',
          200: '#FDE0A0',
          300: '#FBC865',
          400: '#F5AE2E',
          500: '#E8981A',
          600: '#C47A0A',
          700: '#9A5E0C',
          800: '#764812',
          900: '#583610',
        },
        // Concrete / slate neutrals for calm corporate hierarchy
        charcoal: {
          50: '#F7F8F9',
          100: '#EFF1F3',
          200: '#E0E3E8',
          300: '#C8CDD5',
          400: '#9AA3AF',
          500: '#6B7380',
          600: '#4B5563',
          700: '#364152',
          800: '#1E2937',
          900: '#0F1720',
        },
        whatsapp: {
          50: '#f0f9f4',
          100: '#dcf2e3',
          200: '#bce4cc',
          300: '#8fcfab',
          400: '#5cb384',
          500: '#2E8659',
          600: '#256d4d',
          700: '#1f5a42',
          800: '#1c4a37',
          900: '#173d2e',
        }
      },
      keyframes: {
        'hero-ken': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.06)' },
        },
      },
      animation: {
        'hero-ken': 'hero-ken 18s ease-out forwards',
      },
    },
  },
  plugins: [],
}
