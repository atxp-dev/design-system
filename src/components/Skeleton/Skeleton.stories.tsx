import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

/**
 * Display a placeholder preview of content before the data loads.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2824-2174
 */
const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2824-2174&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default skeleton matching Figma design
 */
export const Default: Story = {
  render: () => (
    <div className="flex w-60 flex-col gap-4 p-6">
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-10 w-10 rounded-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-48" />
    </div>
  ),
};

/**
 * Card skeleton with image and text
 */
export const Card: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4 rounded-lg border border-border p-6">
      <Skeleton className="h-48 w-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  ),
};

/**
 * List item skeleton with avatar
 */
export const ListItem: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  ),
};

/**
 * Article skeleton with header and paragraphs
 */
export const Article: Story = {
  render: () => (
    <div className="w-[600px] space-y-4">
      <Skeleton className="h-8 w-2/3" />
      <Skeleton className="h-4 w-1/3" />
      <div className="space-y-2 pt-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <div className="space-y-2 pt-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  ),
};

/**
 * Profile skeleton with avatar and details
 */
export const Profile: Story = {
  render: () => (
    <div className="flex w-80 flex-col items-center gap-4 rounded-lg border border-border p-8">
      <Skeleton className="h-24 w-24 rounded-full" />
      <div className="w-full space-y-2">
        <Skeleton className="h-5 w-2/3 mx-auto" />
        <Skeleton className="h-4 w-1/2 mx-auto" />
      </div>
      <div className="w-full space-y-2 pt-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  ),
};

/**
 * Table skeleton
 */
export const Table: Story = {
  render: () => (
    <div className="w-[600px] space-y-2 rounded-lg border border-border p-4">
      {/* Header */}
      <div className="flex gap-4 border-b border-border pb-2">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/4" />
      </div>
      {/* Rows */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex gap-4 py-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
        </div>
      ))}
    </div>
  ),
};

/**
 * Form skeleton
 */
export const Form: Story = {
  render: () => (
    <div className="w-96 space-y-4 rounded-lg border border-border p-6">
      <Skeleton className="h-6 w-1/3" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-24 w-full" />
      </div>
      <Skeleton className="h-10 w-full" />
    </div>
  ),
};

/**
 * Grid skeleton for image galleries
 */
export const Grid: Story = {
  render: () => (
    <div className="grid w-[600px] grid-cols-3 gap-4">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="aspect-square w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      ))}
    </div>
  ),
};
