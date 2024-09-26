import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'rainbow-text': 'rainbow-text 8s linear infinite',
      },
      keyframes: {
        'rainbow-text': {
          '0%, 100%': { color: '#ff0000' },
          '14%': { color: '#ff7f00' },
          '28%': { color: '#ffff00' },
          '42%': { color: '#00ff00' },
          '57%': { color: '#0000ff' },
          '71%': { color: '#8b00ff' },
          '85%': { color: '#ff00ff' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
