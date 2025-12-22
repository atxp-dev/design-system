import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Design System/Scrollbar',
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2823-2148',
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Custom scrollbar styling applied globally across the design system.
 * The scrollbar automatically adapts to the current theme using design tokens.
 *
 * Features:
 * - Rounded corners matching the design system
 * - Theme-aware colors (primary thumb, muted track)
 * - Hover states for better interactivity
 * - Support for both Firefox and WebKit browsers
 */
export const VerticalScrollbar: Story = {
  render: () => (
    <div className="w-80 h-96 overflow-y-auto border border-border rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Vertical Scrollbar Demo</h3>
      <p className="mb-4">
        This container demonstrates the custom scrollbar styling. The scrollbar
        uses theme tokens for colors:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>Track: muted background color</li>
        <li>Thumb: primary color with rounded corners</li>
        <li>Hover: primary-hover for interactive feedback</li>
        <li>Border: subtle spacing between thumb and track</li>
      </ul>
      {Array.from({ length: 20 }).map((_, i) => (
        <p key={i} className="mb-3">
          Line {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>
      ))}
    </div>
  ),
};

export const HorizontalScrollbar: Story = {
  render: () => (
    <div className="h-64 w-96 overflow-x-auto border border-border rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Horizontal Scrollbar Demo</h3>
      <div className="w-[800px] space-y-3">
        <p>
          This container demonstrates horizontal scrolling with custom scrollbar
          styling.
        </p>
        <p>
          The horizontal scrollbar uses the same theme-aware styling as the
          vertical scrollbar.
        </p>
        <div className="bg-muted p-4 rounded-lg">
          <code className="text-sm">
            Scroll horizontally to see the custom scrollbar in action →
          </code>
        </div>
      </div>
    </div>
  ),
};

export const BothScrollbars: Story = {
  render: () => (
    <div className="w-96 h-96 overflow-auto border border-border rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">
        Both Scrollbars Demo
      </h3>
      <div className="w-[600px]">
        <p className="mb-4">
          This container has both vertical and horizontal scrolling enabled,
          showing how the scrollbars work together.
        </p>
        {Array.from({ length: 30 }).map((_, i) => (
          <p key={i} className="mb-3">
            Line {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Scroll both ways!
          </p>
        ))}
      </div>
    </div>
  ),
};

export const ThemeComparison: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-2">Current Theme</h3>
        <div className="w-80 h-64 overflow-y-auto border border-border rounded-lg p-4">
          {Array.from({ length: 15 }).map((_, i) => (
            <p key={i} className="mb-3">
              Line {i + 1}: Scrollbar adapts to the current theme automatically.
            </p>
          ))}
        </div>
      </div>
      <p className="text-sm text-muted-foreground max-w-xl">
        Try switching themes in Storybook to see how the scrollbar colors
        automatically adapt. The scrollbar uses design tokens (--theme-primary,
        --theme-muted, --theme-primary-hover) which change based on the active
        theme.
      </p>
    </div>
  ),
};
