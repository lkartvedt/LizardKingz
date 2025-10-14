import type { Config } from 'tailwindcss'
export default {
  darkMode: 'class',
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { brand: '#FF7C26', night: '#0B0D0F' },
      borderRadius: { xl: '1rem', '2xl': '1.25rem' }
    }
  },
  plugins: []
} satisfies Config
