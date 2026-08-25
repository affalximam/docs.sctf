// src/layout/js/tailwindConfig.js

tailwind.config = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        canvas:        '#ECECE4',
        'canvas-dark': '#0B0C08',
        panel:         '#FFFFFF',
        'panel-dark':  '#131511',
        panel2:        '#DFE1D3',
        'panel2-dark': '#1B1E17',
        paper:         '#FFFFFF',
        ink:           '#0E0F0A',
        'paper-fg':    '#ECEDE3',
        lime:          '#3D7A0F',
        'lime-dark':   '#A6FF00',
        pink:          '#BE1668',
        'pink-dark':   '#FF2E93',
        yellow:        '#9C6600',
        'yellow-dark': '#FFD100',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'sans-serif'],
        body: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  safelist: [
    'dark',
    'bg-panel-dark',
    'text-pink-dark',
    'shadow-[7px_7px_0_0_#ECEDE3]',
    'border-[3px]',
    'dark:shadow-[7px_7px_0_0_#ECEDE3]'
  ],
}