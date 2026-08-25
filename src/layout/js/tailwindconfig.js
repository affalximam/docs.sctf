tailwind.config = {
    darkMode: ['selector', '[data-theme="dark"]'],
    theme: {
      extend: {
        colors: {
          bg:       'rgb(var(--c-bg) / <alpha-value>)',
          surface:  'rgb(var(--c-surface) / <alpha-value>)',
          surface2: 'rgb(var(--c-surface2) / <alpha-value>)',
          paper:    'rgb(var(--c-paper) / <alpha-value>)',
          fg:       'rgb(var(--c-fg) / <alpha-value>)',
          lime:     'rgb(var(--c-lime) / <alpha-value>)',
          pink:     'rgb(var(--c-pink) / <alpha-value>)',
          yellow:   'rgb(var(--c-yellow) / <alpha-value>)',
        },
        fontFamily: {
          display: ['"Archivo Black"', 'sans-serif'],
          body: ['"Space Grotesk"', 'sans-serif'],
          mono: ['"JetBrains Mono"', 'monospace'],
        },
      },
    },
  }