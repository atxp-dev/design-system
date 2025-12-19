import type { Meta, StoryObj } from '@storybook/react';
import {
  NavHeader,
  NavHeaderBrand,
  NavHeaderNav,
  NavHeaderItem,
  NavHeaderDivider,
} from './NavHeader';
import { Icon, Settings, BookOpen, Pen, Cog, LogOut } from '@/components/Icon';

/**
 * A horizontal navigation header for application navigation.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=4722-5662
 */
const meta = {
  title: 'Components/NavHeader',
  component: NavHeader,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=4722-5662&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NavHeader className="max-w-screen-xl">
      <NavHeaderBrand>
        <h1 className="text-xl font-bold">My App</h1>
      </NavHeaderBrand>
      <NavHeaderNav>
        <NavHeaderItem selected icon={<Icon icon={Pen} size={20} />}>
          Create
        </NavHeaderItem>
        <NavHeaderItem icon={<Icon icon={Settings} size={20} />}>
          Settings
        </NavHeaderItem>
      </NavHeaderNav>
    </NavHeader>
  ),
};

export const WithMultipleItems: Story = {
  render: () => (
    <NavHeader className="max-w-screen-xl">
      <NavHeaderBrand>
        <span className="text-xl font-extrabold">ToothChat</span>
      </NavHeaderBrand>
      <NavHeaderNav>
        <NavHeaderItem selected icon={<Icon icon={Pen} size={20} />}>
          Create
        </NavHeaderItem>
        <NavHeaderItem icon={<Icon icon={BookOpen} size={20} />}>
          My posts
        </NavHeaderItem>
        <NavHeaderDivider />
        <NavHeaderItem icon={<Icon icon={Settings} size={20} />}>
          Settings
        </NavHeaderItem>
        <NavHeaderItem icon={<Icon icon={Cog} size={20} />}>
          Admin
        </NavHeaderItem>
        <NavHeaderItem icon={<Icon icon={LogOut} size={20} />}>
          Log out
        </NavHeaderItem>
      </NavHeaderNav>
    </NavHeader>
  ),
};

export const Simple: Story = {
  render: () => (
    <NavHeader>
      <NavHeaderBrand>
        <span className="text-lg font-semibold">Brand</span>
      </NavHeaderBrand>
      <NavHeaderNav>
        <NavHeaderItem selected>Dashboard</NavHeaderItem>
        <NavHeaderItem>Projects</NavHeaderItem>
        <NavHeaderItem>Team</NavHeaderItem>
        <NavHeaderItem>Settings</NavHeaderItem>
      </NavHeaderNav>
    </NavHeader>
  ),
};

export const WithLogo: Story = {
  render: () => (
    <NavHeader>
      <NavHeaderBrand>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary" />
          <span className="text-lg font-bold">Company</span>
        </div>
      </NavHeaderBrand>
      <NavHeaderNav>
        <NavHeaderItem>Home</NavHeaderItem>
        <NavHeaderItem>About</NavHeaderItem>
        <NavHeaderItem selected>Products</NavHeaderItem>
        <NavHeaderItem>Contact</NavHeaderItem>
      </NavHeaderNav>
    </NavHeader>
  ),
};

export const Minimal: Story = {
  render: () => (
    <NavHeader>
      <NavHeaderBrand>
        <span className="font-mono text-sm">app/</span>
      </NavHeaderBrand>
      <NavHeaderNav>
        <NavHeaderItem selected>Home</NavHeaderItem>
        <NavHeaderItem>Docs</NavHeaderItem>
      </NavHeaderNav>
    </NavHeader>
  ),
};
