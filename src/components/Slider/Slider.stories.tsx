import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Slider } from './Slider';

/**
 * An input where the user selects a value from within a given range.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2674-2172
 */
const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2674-2172&m=dev',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default slider
 */
export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    className: 'w-[296px]',
  },
};

/**
 * Slider at minimum value
 */
export const MinValue: Story = {
  args: {
    defaultValue: [0],
    max: 100,
    step: 1,
    className: 'w-[296px]',
  },
};

/**
 * Slider at maximum value
 */
export const MaxValue: Story = {
  args: {
    defaultValue: [100],
    max: 100,
    step: 1,
    className: 'w-[296px]',
  },
};

/**
 * Range slider with two thumbs
 */
export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    max: 100,
    step: 1,
    className: 'w-[296px]',
  },
};

/**
 * Slider with custom step
 */
export const CustomStep: Story = {
  args: {
    defaultValue: [50],
    min: 0,
    max: 100,
    step: 10,
    className: 'w-[296px]',
  },
};

/**
 * Slider with custom range
 */
export const CustomRange: Story = {
  args: {
    defaultValue: [500],
    min: 0,
    max: 1000,
    step: 50,
    className: 'w-[296px]',
  },
};

/**
 * Disabled slider
 */
export const Disabled: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    disabled: true,
    className: 'w-[296px]',
  },
};

/**
 * Different sizes
 */
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-full max-w-md">
      <div>
        <label className="text-sm font-medium mb-2 block">Small (200px)</label>
        <Slider defaultValue={[33]} max={100} step={1} className="w-[200px]" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">
          Medium (296px - Default)
        </label>
        <Slider defaultValue={[50]} max={100} step={1} className="w-[296px]" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Large (400px)</label>
        <Slider defaultValue={[66]} max={100} step={1} className="w-[400px]" />
      </div>
    </div>
  ),
};

/**
 * With labels and value display
 */
export const WithLabels: Story = {
  render: () => {
    const [value, setValue] = React.useState([50]);
    return (
      <div className="w-[296px] space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Volume</label>
          <span className="text-sm text-muted-foreground">{value[0]}%</span>
        </div>
        <Slider
          value={value}
          onValueChange={setValue}
          max={100}
          step={1}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>0</span>
          <span>100</span>
        </div>
      </div>
    );
  },
};

/**
 * Temperature control example
 */
export const TemperatureControl: Story = {
  render: () => {
    const [temp, setTemp] = React.useState([20]);
    return (
      <div className="w-[320px] rounded-lg border border-border p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold">Temperature</h3>
            <span className="text-2xl font-bold text-primary">{temp[0]}°C</span>
          </div>
          <Slider
            value={temp}
            onValueChange={setTemp}
            min={16}
            max={30}
            step={0.5}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>16°C</span>
            <span>23°C</span>
            <span>30°C</span>
          </div>
        </div>
      </div>
    );
  },
};

/**
 * Price range filter
 */
export const PriceRange: Story = {
  render: () => {
    const [range, setRange] = React.useState([100, 500]);
    return (
      <div className="w-[320px] rounded-lg border border-border p-6">
        <div className="space-y-4">
          <h3 className="text-base font-semibold">Price Range</h3>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Min:</span>
            <span className="font-medium">${range[0]}</span>
          </div>
          <Slider
            value={range}
            onValueChange={setRange}
            min={0}
            max={1000}
            step={10}
          />
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Max:</span>
            <span className="font-medium">${range[1]}</span>
          </div>
        </div>
      </div>
    );
  },
};
