import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertDescription, AlertTitle, AlertCircle } from './Alert';

/**
 * Displays a callout for user attention.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2673-1556
 */
const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2673-1556&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Alert className="w-[652px]">
      <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
      <div className="flex flex-col gap-1">
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>
          This is the alert description to shows some information.
        </AlertDescription>
      </div>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[652px]">
      <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
      <div className="flex flex-col gap-1">
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>
          This is the alert description to shows some information.
        </AlertDescription>
      </div>
    </Alert>
  ),
};

export const WithoutIcon: Story = {
  render: () => (
    <Alert className="w-[652px]">
      <div className="flex flex-col gap-1">
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </div>
    </Alert>
  ),
};

export const Simple: Story = {
  render: () => (
    <Alert className="w-[652px]">
      <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
      <div className="flex flex-col gap-1">
        <AlertTitle>Hello World</AlertTitle>
        <AlertDescription>Some description of the alert</AlertDescription>
      </div>
    </Alert>
  ),
};
