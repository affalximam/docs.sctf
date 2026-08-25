  // Native Tailwind dark mode: toggling the `dark` class on <html> drives every dark: utility below.
  tailwind.config = {
    darkMode: 'class',
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
  }