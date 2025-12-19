import type { Meta, StoryObj } from '@storybook/react';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
} from './Pagination';

/**
 * Pagination with page navigation, next and previous links.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2674-2154
 */
const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2674-2154&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Pagination>
      <PaginationLink direction="previous" />
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationEllipsis />
      <PaginationLink direction="next" />
    </Pagination>
  ),
};

export const Simple: Story = {
  render: () => (
    <Pagination>
      <PaginationLink direction="previous">Previous</PaginationLink>
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
      <PaginationLink direction="next">Next</PaginationLink>
    </Pagination>
  ),
};

export const WithEllipsis: Story = {
  render: () => (
    <Pagination>
      <PaginationLink direction="previous" />
      <PaginationItem>1</PaginationItem>
      <PaginationItem isActive>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
      <PaginationEllipsis />
      <PaginationItem>10</PaginationItem>
      <PaginationLink direction="next" />
    </Pagination>
  ),
};

export const ManyPages: Story = {
  render: () => (
    <Pagination>
      <PaginationLink direction="previous" />
      <PaginationItem>1</PaginationItem>
      <PaginationEllipsis />
      <PaginationItem>4</PaginationItem>
      <PaginationItem isActive>5</PaginationItem>
      <PaginationItem>6</PaginationItem>
      <PaginationEllipsis />
      <PaginationItem>20</PaginationItem>
      <PaginationLink direction="next" />
    </Pagination>
  ),
};

export const FirstPage: Story = {
  render: () => (
    <Pagination>
      <PaginationLink direction="previous" disabled />
      <PaginationItem isActive>1</PaginationItem>
      <PaginationItem>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
      <PaginationEllipsis />
      <PaginationItem>10</PaginationItem>
      <PaginationLink direction="next" />
    </Pagination>
  ),
};

export const LastPage: Story = {
  render: () => (
    <Pagination>
      <PaginationLink direction="previous" />
      <PaginationItem>1</PaginationItem>
      <PaginationEllipsis />
      <PaginationItem>8</PaginationItem>
      <PaginationItem>9</PaginationItem>
      <PaginationItem isActive>10</PaginationItem>
      <PaginationLink direction="next" disabled />
    </Pagination>
  ),
};

export const Compact: Story = {
  render: () => (
    <Pagination>
      <PaginationLink direction="previous">Prev</PaginationLink>
      <PaginationItem isActive>5</PaginationItem>
      <span className="text-sm text-muted-foreground">of 20</span>
      <PaginationLink direction="next">Next</PaginationLink>
    </Pagination>
  ),
};
