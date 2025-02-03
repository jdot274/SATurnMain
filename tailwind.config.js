/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.8, 1) infinite'
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-position': '0% 50%',
            opacity: '0.8'
          },
          '50%': {
            'background-position': '100% 50%',
            opacity: '1'
          }
        },
        'gradient-y': {
          '0%, 100%': {
            'background-position': '50% 0%',
            opacity: '0.8'
          },
          '50%': {
            'background-position': '50% 100%',
            opacity: '1'
          }
        },
        'fade-in': {
          from: {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'pulse': {
          '0%, 100%': {
            opacity: '0.3'
          },
          '50%': {
            opacity: '1'
          }
        }
      }
    },
  },
  plugins: [],
};