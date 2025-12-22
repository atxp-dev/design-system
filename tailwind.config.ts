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
        border: {
          DEFAULT: 'var(--theme-border)',
          hover: 'var(--theme-border-hover)',
        },
        input: 'var(--theme-input)',
        ring: 'var(--theme-ring)',
        background: 'var(--theme-background)',
        foreground: 'var(--theme-foreground)',
        primary: {
          DEFAULT: 'var(--theme-primary)',
          foreground: 'var(--theme-primary-foreground)',
          hover: 'var(--theme-primary-hover)',
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
        warning: {
          DEFAULT: 'var(--theme-warning)',
          foreground: 'var(--theme-warning-foreground)',
          alt: 'var(--theme-warning-alt)',
        },
        info: {
          DEFAULT: 'var(--theme-info)',
          foreground: 'var(--theme-info-foreground)',
        },
        muted: {
          DEFAULT: 'var(--theme-muted)',
          foreground: 'var(--theme-muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--theme-accent)',
          foreground: 'var(--theme-accent-foreground)',
          hover: 'var(--theme-accent-hover)',
          muted: 'var(--theme-accent-muted)',
        },
        card: {
          DEFAULT: 'var(--theme-card)',
          foreground: 'var(--theme-card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--theme-popover)',
          foreground: 'var(--theme-popover-foreground)',
        },
        sidebar: {
          background: 'var(--theme-sidebar-background)',
          foreground: 'var(--theme-sidebar-foreground)',
          primary: 'var(--theme-sidebar-primary)',
          'primary-foreground': 'var(--theme-sidebar-primary-foreground)',
          accent: 'var(--theme-sidebar-accent)',
          'accent-foreground': 'var(--theme-sidebar-accent-foreground)',
          border: 'var(--theme-sidebar-border)',
        },
        chart: {
          '1': 'var(--theme-chart-1)',
          '2': 'var(--theme-chart-2)',
          '3': 'var(--theme-chart-3)',
          '4': 'var(--theme-chart-4)',
          '5': 'var(--theme-chart-5)',
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
