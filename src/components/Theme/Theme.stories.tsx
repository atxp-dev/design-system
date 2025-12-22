import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, useTheme, Theme } from '@/lib/theme';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { Alert } from '@/components/Alert';

/**
 * The Circuit & Chisel Design System supports multiple themes with easy runtime switching.
 *
 * ## Available Themes
 * - **light** - Clean, bright theme (default)
 * - **dark** - Dark mode with adjusted colors
 * - **ocean** - Ocean-inspired blue palette
 * - **forest** - Nature-inspired green palette
 * - **auto** - Automatically adapts to system preference
 *
 * See THEMES.md for complete documentation.
 */
const meta = {
  title: 'Theme/Theme System',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

function ThemeShowcase() {
  const { theme, setTheme, actualTheme } = useTheme();

  const themes: Theme[] = ['light', 'dark', 'ocean', 'forest', 'auto'];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Theme Selector */}
        <Card className="p-6">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Theme Selector
          </h2>
          <div className="mb-4 flex flex-wrap gap-2">
            {themes.map((t) => (
              <Button
                key={t}
                variant={theme === t ? 'default' : 'outline'}
                onClick={() => setTheme(t)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </Button>
            ))}
          </div>
          <p className="text-sm text-secondary-foreground">
            Selected: <Badge>{theme}</Badge> | Active:{' '}
            <Badge variant="secondary">{actualTheme}</Badge>
          </p>
        </Card>

        {/* Color Showcase */}
        <Card className="p-6">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Colors</h2>
          <div className="space-y-4">
            {/* Primary */}
            <div className="flex items-center gap-4">
              <div className="h-16 w-24 rounded bg-primary flex items-center justify-center">
                <span className="text-sm font-medium text-primary-foreground">
                  Primary
                </span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Primary</p>
                <p className="text-sm text-muted-foreground">
                  Brand color for primary actions
                </p>
              </div>
            </div>

            {/* Secondary */}
            <div className="flex items-center gap-4">
              <div className="h-16 w-24 rounded bg-secondary flex items-center justify-center">
                <span className="text-sm font-medium text-secondary-foreground">
                  Secondary
                </span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Secondary</p>
                <p className="text-sm text-muted-foreground">
                  Subtle background color
                </p>
              </div>
            </div>

            {/* Destructive */}
            <div className="flex items-center gap-4">
              <div className="h-16 w-24 rounded bg-destructive flex items-center justify-center">
                <span className="text-sm font-medium text-destructive-foreground">
                  Destructive
                </span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Destructive</p>
                <p className="text-sm text-muted-foreground">
                  Error and danger states
                </p>
              </div>
            </div>

            {/* Success */}
            <div className="flex items-center gap-4">
              <div className="h-16 w-24 rounded bg-success flex items-center justify-center">
                <span className="text-sm font-medium text-white">Success</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Success</p>
                <p className="text-sm text-muted-foreground">
                  Success and positive states
                </p>
              </div>
            </div>

            {/* Warning */}
            <div className="flex items-center gap-4">
              <div className="h-16 w-24 rounded bg-warning flex items-center justify-center">
                <span className="text-sm font-medium text-warning-foreground">
                  Warning
                </span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Warning</p>
                <p className="text-sm text-muted-foreground">
                  Warning and caution states
                </p>
              </div>
            </div>

            {/* Info */}
            <div className="flex items-center gap-4">
              <div className="h-16 w-24 rounded bg-info flex items-center justify-center">
                <span className="text-sm font-medium text-info-foreground">
                  Info
                </span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Info</p>
                <p className="text-sm text-muted-foreground">
                  Informational and accent elements
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Component Examples */}
        <Card className="p-6">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Component Examples
          </h2>
          <div className="space-y-4">
            {/* Buttons */}
            <div>
              <h3 className="mb-2 font-semibold text-foreground">Buttons</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>

            {/* Badges */}
            <div>
              <h3 className="mb-2 font-semibold text-foreground">Badges</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>

            {/* Alerts */}
            <div>
              <h3 className="mb-2 font-semibold text-foreground">Alerts</h3>
              <div className="space-y-2">
                <Alert variant="default">
                  <p className="font-semibold">Default Alert</p>
                  <p className="text-sm">This is a default alert message.</p>
                </Alert>
                <Alert variant="destructive">
                  <p className="font-semibold">Destructive Alert</p>
                  <p className="text-sm">This is a destructive alert message.</p>
                </Alert>
              </div>
            </div>
          </div>
        </Card>

        {/* Typography */}
        <Card className="p-6">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Typography
          </h2>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground">
              Heading 1 - The quick brown fox
            </h1>
            <h2 className="text-3xl font-bold text-foreground">
              Heading 2 - The quick brown fox
            </h2>
            <h3 className="text-2xl font-semibold text-foreground">
              Heading 3 - The quick brown fox
            </h3>
            <p className="text-foreground">
              Body text - The quick brown fox jumps over the lazy dog. This
              demonstrates how body text appears in the current theme.
            </p>
            <p className="text-sm text-muted-foreground">
              Muted text - This is muted, secondary text that provides
              additional context.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

/**
 * Interactive theme showcase demonstrating all available themes
 * and how components adapt to each theme.
 */
export const Interactive: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <ThemeShowcase />
    </ThemeProvider>
  ),
};

/**
 * Light theme (default) - Clean, bright appearance
 */
export const LightTheme: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <ThemeShowcase />
    </ThemeProvider>
  ),
};

/**
 * Dark theme - Optimized for low-light environments
 */
export const DarkTheme: Story = {
  render: () => (
    <ThemeProvider defaultTheme="dark">
      <ThemeShowcase />
    </ThemeProvider>
  ),
};

/**
 * Ocean theme - Blue-inspired brand variation
 */
export const OceanTheme: Story = {
  render: () => (
    <ThemeProvider defaultTheme="ocean">
      <ThemeShowcase />
    </ThemeProvider>
  ),
};

/**
 * Forest theme - Green-inspired brand variation
 */
export const ForestTheme: Story = {
  render: () => (
    <ThemeProvider defaultTheme="forest">
      <ThemeShowcase />
    </ThemeProvider>
  ),
};
