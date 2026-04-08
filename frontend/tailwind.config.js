import typography from '@tailwindcss/typography';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mixy: {
          950: '#0c0120',
          900: '#12072c',
          orange: '#fb8500',
          blue: '#7dd3fc',
          white: '#f8fafc',
          gold: '#fcd34d'
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif']
      },
      boxShadow: {
        glow: '0 30px 120px rgba(125, 211, 252, 0.12)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(125,211,252,0.25), transparent 45%), radial-gradient(circle at bottom right, rgba(251,133,0,0.16), transparent 30%)'
      }
    }
  },
  plugins: [typography]
};
