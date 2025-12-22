import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

/**
 * A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2674-2166
 */
const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2674-2166&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'example',
  },
};

export const Checked: Story = {
  args: {
    name: 'example',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    name: 'example',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    name: 'example',
    disabled: true,
    defaultChecked: true,
  },
};

export const WithLabel = {
  render: () => (
    <div className="flex items-center gap-2">
      <Radio name="notify" id="notify" />
      <label
        htmlFor="notify"
        className="text-sm font-medium leading-5 text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Notify me
      </label>
    </div>
  ),
};

export const RadioGroup = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Radio name="plan" id="plan-free" value="free" defaultChecked />
        <label htmlFor="plan-free" className="text-sm font-medium leading-5">
          Free
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Radio name="plan" id="plan-pro" value="pro" />
        <label htmlFor="plan-pro" className="text-sm font-medium leading-5">
          Pro
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Radio name="plan" id="plan-enterprise" value="enterprise" />
        <label htmlFor="plan-enterprise" className="text-sm font-medium leading-5">
          Enterprise
        </label>
      </div>
    </div>
  ),
};

export const RadioGroupWithDisabled = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Radio name="subscription" id="sub-monthly" value="monthly" defaultChecked />
        <label htmlFor="sub-monthly" className="text-sm font-medium leading-5">
          Monthly
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Radio name="subscription" id="sub-yearly" value="yearly" />
        <label htmlFor="sub-yearly" className="text-sm font-medium leading-5">
          Yearly
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Radio name="subscription" id="sub-lifetime" value="lifetime" disabled />
        <label htmlFor="sub-lifetime" className="text-sm font-medium leading-5 opacity-50">
          Lifetime (Coming soon)
        </label>
      </div>
    </div>
  ),
};
