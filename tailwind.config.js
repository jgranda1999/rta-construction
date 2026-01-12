/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626', // Main red
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        charcoal: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        whatsapp: {
          50: '#f0f9f4',
          100: '#dcf2e3',
          200: '#bce4cc',
          300: '#8fcfab',
          400: '#5cb384',
          500: '#2E8659', // Soft professional green - easy on the eyes
          600: '#256d4d', // Darker for hover states
          700: '#1f5a42',
          800: '#1c4a37',
          900: '#173d2e',
        }
      },
    },
  },
  plugins: [],
}

