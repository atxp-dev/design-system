import type { Meta, StoryObj } from '@storybook/react';
import {
  HoverCard,
  HoverCardHeader,
  HoverCardTitle,
  HoverCardDescription,
} from './HoverCard';

/**
 * For sighted users to preview content available behind a link.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2785-814
 */
const meta = {
  title: 'Components/HoverCard',
  component: HoverCard,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2785-814&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardHeader>
        <HoverCardTitle>Hover Card Title</HoverCardTitle>
        <HoverCardDescription>Hover Card Description</HoverCardDescription>
      </HoverCardHeader>
      <div className="h-[85px] w-full border-2 border-dashed border-border" />
    </HoverCard>
  ),
};

export const WithContent: Story = {
  render: () => (
    <HoverCard>
      <HoverCardHeader>
        <HoverCardTitle>@nextjs</HoverCardTitle>
        <HoverCardDescription>
          The React Framework – created and maintained by @vercel.
        </HoverCardDescription>
      </HoverCardHeader>
      <div className="flex items-center gap-2 text-sm">
        <div className="flex items-center gap-1">
          <span className="font-semibold">20.3k</span>
          <span className="text-muted-foreground">Followers</span>
        </div>
      </div>
    </HoverCard>
  ),
};

export const WithAvatar: Story = {
  render: () => (
    <HoverCard>
      <HoverCardHeader>
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-full bg-primary" />
          <div className="flex flex-col gap-1">
            <HoverCardTitle>Next.js</HoverCardTitle>
            <HoverCardDescription>@nextjs</HoverCardDescription>
          </div>
        </div>
      </HoverCardHeader>
      <p className="text-sm">
        The React Framework for Production. Built with love by @vercel.
      </p>
    </HoverCard>
  ),
};
