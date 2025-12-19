import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

/**
 * Displays a badge or a component that looks like a badge.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2673-1675
 */
const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'success'],
      description: 'The visual style variant of the badge',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'The size of the badge',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Badge',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Badge',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Badge',
    variant: 'outline',
  },
};

export const Success: Story = {
  args: {
    children: 'Badge',
    variant: 'success',
  },
};

export const Small: Story = {
  args: {
    children: 'Badge',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Badge',
    size: 'md',
  },
};

/**
 * All variants displayed together
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
    </div>
  ),
};

/**
 * All sizes displayed together
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <Badge size="sm">Small Badge</Badge>
        <span className="text-sm text-muted">sm</span>
      </div>
      <div className="flex gap-4 items-center">
        <Badge size="md">Medium Badge</Badge>
        <span className="text-sm text-muted">md</span>
      </div>
    </div>
  ),
};
