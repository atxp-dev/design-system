import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

/**
 * A control that allows the user to toggle between checked and not checked.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2674-1733
 */
const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2674-1733&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

export const WithLabel = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-5 text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Label Text
      </label>
    </div>
  ),
};

export const MultipleWithLabels = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox id="option1" defaultChecked />
        <label htmlFor="option1" className="text-sm font-medium leading-5">
          Option 1
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="option2" />
        <label htmlFor="option2" className="text-sm font-medium leading-5">
          Option 2
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="option3" disabled />
        <label htmlFor="option3" className="text-sm font-medium leading-5 opacity-50">
          Option 3 (Disabled)
        </label>
      </div>
    </div>
  ),
};
