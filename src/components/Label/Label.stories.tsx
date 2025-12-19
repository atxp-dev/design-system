import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

/**
 * Renders an accessible label associated with controls.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2674-2135
 */
const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2674-2135&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Email or Username',
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="email">Email</Label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        className="h-10 w-80 rounded-md border border-input bg-background px-3 py-2 text-sm"
      />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <input
        id="terms"
        type="checkbox"
        className="h-4 w-4 rounded border-input"
      />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const WithRadio: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label>Choose an option</Label>
      <div className="flex items-center gap-2">
        <input
          id="option1"
          name="option"
          type="radio"
          className="h-4 w-4"
        />
        <Label htmlFor="option1">Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <input
          id="option2"
          name="option"
          type="radio"
          className="h-4 w-4"
        />
        <Label htmlFor="option2">Option 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <input
          id="option3"
          name="option"
          type="radio"
          className="h-4 w-4"
        />
        <Label htmlFor="option3">Option 3</Label>
      </div>
    </div>
  ),
};

export const MultipleLabels: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="username">Username</Label>
        <input
          id="username"
          placeholder="Enter username"
          className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Password</Label>
        <input
          id="password"
          type="password"
          placeholder="Enter password"
          className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
      </div>
      <div className="flex items-center gap-2">
        <input id="remember" type="checkbox" className="h-4 w-4" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
    </div>
  ),
};
