import type { Config } from 'tailwindcss'

// Cores e fontes oficiais da Bicuíra. Não adicione cores novas aqui.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        restinga: '#25433D',
        sol: '#C35E2F',
        areia: '#F2EBDD',
        oceano: '#4E889A',
        carvao: '#292A29',
        lima: '#B4CD64',
      },
      fontFamily: {
        display: ['"Baloo 2"', 'system-ui', 'sans-serif'],
        sans: ['Sora', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Títulos fluidos: crescem com a largura da tela
        'giant': ['clamp(3.25rem, 11vw, 10rem)', { lineHeight: '0.86' }],
        'huge': ['clamp(2.1rem, 5.6vw, 5rem)', { lineHeight: '0.95' }],
        'big': ['clamp(1.75rem, 3.9vw, 3.5rem)', { lineHeight: '1' }],
        'mid': ['clamp(1.45rem, 2.4vw, 2.15rem)', { lineHeight: '1.08' }],
      },
    },
  },
  plugins: [],
} satisfies Config
