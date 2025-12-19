import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Icon, Plus } from '@/components/Icon';

/**
 * Displays a button or a component that looks like a button.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2674-1721
 */
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2674-1721&m=dev',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'destructive-subtle',
        'outline',
        'secondary-outline',
        'secondary',
        'ghost',
        'link',
        'success',
        'side-panel',
      ],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Button',
    variant: 'destructive',
  },
};

export const DestructiveSubtle: Story = {
  args: {
    children: 'Button',
    variant: 'destructive-subtle',
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
};

export const SecondaryOutline: Story = {
  args: {
    children: 'Button',
    variant: 'secondary-outline',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Button',
    variant: 'link',
  },
};

export const Success: Story = {
  args: {
    children: 'Button',
    variant: 'success',
  },
};

export const SidePanel: Story = {
  args: {
    children: 'Button',
    variant: 'side-panel',
  },
};

export const WithIcon = {
  render: () => (
    <div className="flex gap-4">
      <Button>
        <Icon icon={Plus} size={20} />
        Add
      </Button>
      <Button variant="outline">
        <Icon icon={Plus} size={20} />
        Add
      </Button>
    </div>
  ),
};

export const IconOnly = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="default" size="icon">
        <Icon icon={Plus} size={20} />
      </Button>
      <Button variant="outline" size="icon">
        <Icon icon={Plus} size={20} />
      </Button>
      <Button variant="secondary" size="icon">
        <Icon icon={Plus} size={20} />
      </Button>
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const AllVariants = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="destructive-subtle">Destructive Subtle</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary-outline">Secondary Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="success">Success</Button>
      <Button variant="side-panel">Side Panel</Button>
    </div>
  ),
};

export const Disabled = {
  render: () => (
    <div className="flex gap-4">
      <Button disabled>Default</Button>
      <Button variant="outline" disabled>
        Outline
      </Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="destructive" disabled>
        Destructive
      </Button>
    </div>
  ),
};
