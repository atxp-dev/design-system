import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './Separator';

/**
 * Visually or semantically separates content.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2723-432
 */
const meta = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2723-432&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default horizontal separator
 */
export const Horizontal: Story = {
  render: () => (
    <div className="w-80">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
};

/**
 * Separator in a list (matches Figma example)
 */
export const InList: Story = {
  render: () => (
    <div className="w-64 rounded-lg border border-border p-4">
      <div className="space-y-4">
        <p className="text-sm">Apple</p>
        <Separator />
        <p className="text-sm">Banana</p>
        <Separator />
        <p className="text-sm">Blueberry</p>
        <Separator />
        <p className="text-sm">Grapes</p>
        <Separator />
        <p className="text-sm">Pineapple</p>
      </div>
    </div>
  ),
};

/**
 * Vertical separator
 */
export const Vertical: Story = {
  render: () => (
    <div className="flex h-20 items-center">
      <div className="flex h-full flex-col justify-center space-y-2">
        <p className="text-sm font-medium">Item 1</p>
        <p className="text-xs text-muted-foreground">Description</p>
      </div>
      <Separator orientation="vertical" className="mx-4" />
      <div className="flex h-full flex-col justify-center space-y-2">
        <p className="text-sm font-medium">Item 2</p>
        <p className="text-xs text-muted-foreground">Description</p>
      </div>
      <Separator orientation="vertical" className="mx-4" />
      <div className="flex h-full flex-col justify-center space-y-2">
        <p className="text-sm font-medium">Item 3</p>
        <p className="text-xs text-muted-foreground">Description</p>
      </div>
    </div>
  ),
};

/**
 * Separator in navigation
 */
export const InNavigation: Story = {
  render: () => (
    <div>
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div className="cursor-pointer hover:underline">Home</div>
        <Separator orientation="vertical" />
        <div className="cursor-pointer hover:underline">About</div>
        <Separator orientation="vertical" />
        <div className="cursor-pointer hover:underline">Services</div>
        <Separator orientation="vertical" />
        <div className="cursor-pointer hover:underline">Contact</div>
      </div>
    </div>
  ),
};

/**
 * Separator with different spacing
 */
export const WithSpacing: Story = {
  render: () => (
    <div className="w-80 space-y-8">
      <div>
        <h4 className="text-sm font-medium mb-2">Tight Spacing (my-2)</h4>
        <div className="border rounded-lg p-4">
          <p className="text-sm">Content 1</p>
          <Separator className="my-2" />
          <p className="text-sm">Content 2</p>
          <Separator className="my-2" />
          <p className="text-sm">Content 3</p>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">Medium Spacing (my-4)</h4>
        <div className="border rounded-lg p-4">
          <p className="text-sm">Content 1</p>
          <Separator className="my-4" />
          <p className="text-sm">Content 2</p>
          <Separator className="my-4" />
          <p className="text-sm">Content 3</p>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium mb-2">Wide Spacing (my-6)</h4>
        <div className="border rounded-lg p-4">
          <p className="text-sm">Content 1</p>
          <Separator className="my-6" />
          <p className="text-sm">Content 2</p>
          <Separator className="my-6" />
          <p className="text-sm">Content 3</p>
        </div>
      </div>
    </div>
  ),
};

/**
 * Separator in a card
 */
export const InCard: Story = {
  render: () => (
    <div className="w-96 rounded-lg border border-border bg-card p-6">
      <div>
        <h3 className="text-lg font-semibold">Account Settings</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your account preferences
        </p>
      </div>
      <Separator className="my-6" />
      <div className="space-y-4">
        <div className="space-y-1">
          <label className="text-sm font-medium">Email</label>
          <p className="text-sm text-muted-foreground">user@example.com</p>
        </div>
        <Separator />
        <div className="space-y-1">
          <label className="text-sm font-medium">Username</label>
          <p className="text-sm text-muted-foreground">@username</p>
        </div>
        <Separator />
        <div className="space-y-1">
          <label className="text-sm font-medium">Role</label>
          <p className="text-sm text-muted-foreground">Administrator</p>
        </div>
      </div>
    </div>
  ),
};

/**
 * Non-decorative separator (for accessibility)
 */
export const NonDecorative: Story = {
  render: () => (
    <div className="w-80">
      <p className="text-sm">
        This separator has semantic meaning and will be announced by screen
        readers.
      </p>
      <Separator decorative={false} className="my-4" />
      <p className="text-sm">
        Use decorative=false when the separator has semantic importance.
      </p>
    </div>
  ),
};
