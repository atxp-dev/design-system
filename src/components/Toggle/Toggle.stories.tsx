import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Toggle } from './Toggle';
import { Bold, Italic, Underline, Type } from 'lucide-react';

/**
 * A two-state button that can be either on or off.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2775-856
 */
const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2775-856&m=dev',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default toggle
 */
export const Default: Story = {
  args: {
    'aria-label': 'Toggle bold',
    children: <Bold className="h-4 w-4" />,
  },
};

/**
 * Outline variant
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
    'aria-label': 'Toggle italic',
    children: <Italic className="h-4 w-4" />,
  },
};

/**
 * With text
 */
export const WithText: Story = {
  args: {
    'aria-label': 'Toggle bold',
    children: (
      <>
        <Bold className="mr-2 h-4 w-4" />
        Bold
      </>
    ),
  },
};

/**
 * Small size
 */
export const Small: Story = {
  args: {
    size: 'sm',
    'aria-label': 'Toggle bold',
    children: <Bold className="h-4 w-4" />,
  },
};

/**
 * Large size
 */
export const Large: Story = {
  args: {
    size: 'lg',
    'aria-label': 'Toggle bold',
    children: <Bold className="h-4 w-4" />,
  },
};

/**
 * Disabled
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    'aria-label': 'Toggle bold',
    children: <Bold className="h-4 w-4" />,
  },
};

/**
 * Text formatting toolbar
 */
export const Toolbar: Story = {
  render: () => (
    <div className="flex gap-1">
      <Toggle aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </Toggle>
      <Toggle aria-label="Toggle text">
        <Type className="h-4 w-4" />
      </Toggle>
    </div>
  ),
};

/**
 * Outline toolbar
 */
export const OutlineToolbar: Story = {
  render: () => (
    <div className="flex gap-1">
      <Toggle variant="outline" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle text">
        <Type className="h-4 w-4" />
      </Toggle>
    </div>
  ),
};

/**
 * Controlled toggle
 */
const ControlledToggleComponent = () => {
  const [pressed, setPressed] = React.useState(false);
  return (
    <div className="flex flex-col gap-4">
      <Toggle
        pressed={pressed}
        onPressedChange={setPressed}
        aria-label="Toggle bold"
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      <p className="text-sm text-muted-foreground">
        Toggle is {pressed ? 'pressed' : 'not pressed'}
      </p>
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledToggleComponent />,
};
