import type { Meta, StoryObj } from '@storybook/react';
import {
  Menubar,
  MenubarTrigger,
  MenubarDropdown,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
} from './Menubar';

/**
 * A visually persistent menu common in desktop applications that provides
 * quick access to a consistent set of commands.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2759-2424
 */
const meta = {
  title: 'Components/Menubar',
  component: Menubar,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2759-2424&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Menubar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarTrigger selected>File</MenubarTrigger>
      <MenubarTrigger>Edit</MenubarTrigger>
      <MenubarTrigger>View</MenubarTrigger>
      <MenubarTrigger>Text</MenubarTrigger>
      <MenubarTrigger>Window</MenubarTrigger>
    </Menubar>
  ),
};

export const WithDropdown: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Menubar>
        <MenubarTrigger selected>File</MenubarTrigger>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarTrigger>Text</MenubarTrigger>
        <MenubarTrigger>Window</MenubarTrigger>
      </Menubar>
      <MenubarDropdown>
        <MenubarItem shortcut="⌘N">New Window</MenubarItem>
        <MenubarItem shortcut="⌘T">New Tab</MenubarItem>
        <MenubarItem disabled shortcut="⇧O">
          Open File
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem hasSubmenu>Recently Closed Tabs</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Save as .fig</MenubarItem>
        <MenubarItem>Show Version History</MenubarItem>
        <MenubarSeparator />
        <MenubarLabel>View Options</MenubarLabel>
        <MenubarItem checked>Toolbars</MenubarItem>
        <MenubarItem checked>Prototypes</MenubarItem>
        <MenubarItem>Code</MenubarItem>
        <MenubarSeparator />
        <MenubarLabel>Change Profile</MenubarLabel>
        <MenubarItem>Praveen Juge</MenubarItem>
        <MenubarItem>John Smith</MenubarItem>
        <MenubarItem disabled>Praveen Juge - New</MenubarItem>
      </MenubarDropdown>
    </div>
  ),
};

export const SimpleMenu: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Menubar>
        <MenubarTrigger selected>File</MenubarTrigger>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarTrigger>View</MenubarTrigger>
      </Menubar>
      <MenubarDropdown>
        <MenubarItem shortcut="⌘N">New</MenubarItem>
        <MenubarItem shortcut="⌘O">Open</MenubarItem>
        <MenubarItem shortcut="⌘S">Save</MenubarItem>
        <MenubarSeparator />
        <MenubarItem shortcut="⌘W">Close</MenubarItem>
      </MenubarDropdown>
    </div>
  ),
};

export const WithCheckmarks: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Menubar>
        <MenubarTrigger selected>View</MenubarTrigger>
        <MenubarTrigger>Edit</MenubarTrigger>
      </Menubar>
      <MenubarDropdown>
        <MenubarLabel>Show</MenubarLabel>
        <MenubarItem checked>Toolbar</MenubarItem>
        <MenubarItem checked>Sidebar</MenubarItem>
        <MenubarItem>Status Bar</MenubarItem>
        <MenubarSeparator />
        <MenubarLabel>Zoom</MenubarLabel>
        <MenubarItem>Zoom In</MenubarItem>
        <MenubarItem>Zoom Out</MenubarItem>
        <MenubarItem checked>Actual Size</MenubarItem>
      </MenubarDropdown>
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Menubar className="w-full max-w-2xl">
      <MenubarTrigger>Dashboard</MenubarTrigger>
      <MenubarTrigger selected>Projects</MenubarTrigger>
      <MenubarTrigger>Team</MenubarTrigger>
      <MenubarTrigger>Settings</MenubarTrigger>
    </Menubar>
  ),
};
