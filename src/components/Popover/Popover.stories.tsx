import type { Meta, StoryObj } from '@storybook/react';
import {
  Popover,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from './Popover';
import { Button } from '@/components/Button';

/**
 * Displays rich content in a portal, triggered by a button.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2780-1666
 */
const meta = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2780-1666&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverHeader>
        <PopoverTitle>Popover Title</PopoverTitle>
        <PopoverDescription>Popover Description</PopoverDescription>
      </PopoverHeader>
      <div className="h-[85px] w-full border-2 border-dashed border-border" />
    </Popover>
  ),
};

export const WithContent: Story = {
  render: () => (
    <Popover>
      <PopoverHeader>
        <PopoverTitle>Dimensions</PopoverTitle>
        <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
      </PopoverHeader>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Width</label>
          <input
            type="text"
            defaultValue="100%"
            className="h-8 rounded-md border border-input bg-background px-2 text-sm"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Max Width</label>
          <input
            type="text"
            defaultValue="300px"
            className="h-8 rounded-md border border-input bg-background px-2 text-sm"
          />
        </div>
      </div>
    </Popover>
  ),
};

export const WithButtons: Story = {
  render: () => (
    <Popover>
      <PopoverHeader>
        <PopoverTitle>Are you sure?</PopoverTitle>
        <PopoverDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </PopoverDescription>
      </PopoverHeader>
      <div className="flex justify-end gap-2">
        <Button variant="outline" size="sm">
          Cancel
        </Button>
        <Button variant="destructive" size="sm">
          Delete
        </Button>
      </div>
    </Popover>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Popover>
      <PopoverHeader>
        <PopoverTitle>About this project</PopoverTitle>
        <PopoverDescription>
          Learn more about the features and capabilities of this project.
        </PopoverDescription>
      </PopoverHeader>
      <div className="text-sm text-foreground">
        <p className="mb-2">
          This is a comprehensive design system built with React and TypeScript.
          It includes a wide variety of components that are fully customizable
          and accessible.
        </p>
        <p>
          The system is built using modern best practices and includes extensive
          documentation to help you get started quickly.
        </p>
      </div>
    </Popover>
  ),
};
