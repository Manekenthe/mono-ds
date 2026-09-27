/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:      '#0071FC',
        secondary:    '#2A2A2A',
        tertiary:     '#1A1A1A',
        neutral:      '#121212',
        surface:      '#1A1A1A',
        'on-surface': '#FFFFFF',
        muted:        '#A0A0A0',
        accent:       '#55CFFF',
        border:       '#2A2A2A',
        success:      '#22C55E',
        error:        '#EF4444',
        warning:      '#E36209',
        purple:       '#6F42C1',
      },
      fontFamily: {
        mono: ['Geist Mono', 'monospace'],
      },
      borderRadius: {
        none: '0px',
        xs:   '2px',
        sm:   '4px',
        md:   '8px',
        lg:   '16px',
        xl:   '24px',
        full: '9999px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0', opacity: '0' },
          to:   { height: 'var(--radix-accordion-content-height)', opacity: '1' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
          to:   { height: '0', opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'accordion-up':   'accordion-up 0.2s cubic-bezier(0.4, 0, 1, 1)',
      },
    },
  },
  plugins: [],
};
