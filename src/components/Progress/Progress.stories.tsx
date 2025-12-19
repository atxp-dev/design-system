import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';
import { useState, useEffect } from 'react';

/**
 * Displays an indicator showing the completion progress of a task,
 * typically displayed as a progress bar.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2674-2160
 */
const meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2674-2160&m=dev',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 33,
    className: 'w-[296px]',
  },
};

export const Empty: Story = {
  args: {
    value: 0,
    className: 'w-[296px]',
  },
};

export const Half: Story = {
  args: {
    value: 50,
    className: 'w-[296px]',
  },
};

export const Complete: Story = {
  args: {
    value: 100,
    className: 'w-[296px]',
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex w-[296px] flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span>0%</span>
        </div>
        <Progress value={0} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span>33%</span>
        </div>
        <Progress value={33} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span>66%</span>
        </div>
        <Progress value={66} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span>100%</span>
        </div>
        <Progress value={100} />
      </div>
    </div>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <div className="flex w-[296px] flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm font-medium">
          <span>Uploading files...</span>
          <span>25%</span>
        </div>
        <Progress value={25} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm font-medium">
          <span>Processing...</span>
          <span>60%</span>
        </div>
        <Progress value={60} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm font-medium">
          <span>Complete!</span>
          <span>100%</span>
        </div>
        <Progress value={100} />
      </div>
    </div>
  ),
};

export const Animated: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 10;
        });
      }, 500);

      return () => clearInterval(timer);
    }, []);

    return (
      <div className="flex w-[296px] flex-col gap-2">
        <div className="flex justify-between text-sm font-medium">
          <span>Loading...</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} />
      </div>
    );
  },
};
