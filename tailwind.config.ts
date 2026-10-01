import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#07090d',
        panel: '#0e131b',
        muted: '#9ba6b7',
        accent: '#7b8cff',
        dayos: '#7b8cff',
        sudoku: '#6ec7b7',
      },
      boxShadow: {
        premium: '0 24px 80px rgba(0, 0, 0, 0.28)',
        insetsoft: 'inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      borderRadius: {
        xl2: '20px',
        xl3: '28px',
        xl4: '32px',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
} satisfies Config;
