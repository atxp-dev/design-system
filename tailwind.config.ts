import type { Config } from 'tailwindcss';

/**
 * Tailwind CSS v4 Configuration
 * Uses CSS-first configuration with design tokens as CSS variables
 */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--theme-border)',
        background: 'var(--theme-background)',
        foreground: 'var(--theme-foreground)',
        primary: {
          DEFAULT: 'var(--theme-primary)',
          foreground: 'var(--theme-primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--theme-secondary)',
          foreground: 'var(--theme-secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--theme-destructive)',
          foreground: 'var(--theme-destructive-foreground)',
        },
        success: {
          DEFAULT: 'var(--theme-success)',
          background: 'var(--theme-success-background-fill)',
        },
        muted: {
          DEFAULT: 'var(--theme-muted)',
        },
      },
      borderRadius: {
        DEFAULT: 'var(--theme-radius)',
        md: 'var(--radius-md)',
        '2xl': 'var(--radius-2xl)',
      },
      spacing: {
        '0.5': 'var(--spacing-0-5)',
        '2': 'var(--spacing-2)',
        '3.5': 'var(--spacing-3-5)',
        '4': 'var(--spacing-4)',
        '5': 'var(--spacing-5)',
        '6': 'var(--spacing-6)',
        '8': 'var(--spacing-8)',
      },
      fontSize: {
        xs: ['var(--font-size-xs)', { lineHeight: 'var(--font-leading-4)' }],
        sm: ['var(--font-size-sm)', { lineHeight: 'var(--font-leading-5)' }],
        base: ['var(--font-size-base)', { lineHeight: 'var(--font-leading-6)' }],
      },
      fontWeight: {
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
      },
      fontFamily: {
        sans: ['var(--font-family-sans)', 'Inter', 'sans-serif'],
      },
      borderWidth: {
        DEFAULT: 'var(--border-width-1)',
        '2': 'var(--border-width-2)',
      },
      opacity: {
        '80': 'var(--opacity-80)',
        '100': 'var(--opacity-100)',
      },
    },
  },
} satisfies Config;
