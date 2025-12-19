import type { Meta, StoryObj } from '@storybook/react';
import {
  NavSidePanel,
  NavSidePanelHeader,
  NavSidePanelBrand,
  NavSidePanelSeparator,
  NavSidePanelNav,
  NavSidePanelItem,
  NavSidePanelFooter,
} from './NavSidePanel';
import { Icon, Home, CheckWaves, Settings, LogOut } from '@/components/Icon';

/**
 * A vertical side navigation panel for application navigation.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=4722-5838
 */
const meta = {
  title: 'Components/NavSidePanel',
  component: NavSidePanel,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=4722-5838&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavSidePanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NavSidePanel className="h-screen">
      <div>
        <NavSidePanelHeader>
          <NavSidePanelBrand>ToothChat</NavSidePanelBrand>
          <NavSidePanelSeparator />
        </NavSidePanelHeader>
        <NavSidePanelNav>
          <NavSidePanelItem
            selected
            icon={<Icon icon={Home} size={24} />}
          >
            Dashboard
          </NavSidePanelItem>
          <NavSidePanelSeparator />
          <NavSidePanelItem icon={<Icon icon={CheckWaves} size={20} />}>
            Verifications
          </NavSidePanelItem>
        </NavSidePanelNav>
      </div>
      <NavSidePanelFooter>
        <NavSidePanelItem icon={<Icon icon={Settings} size={20} />}>
          Settings
        </NavSidePanelItem>
        <NavSidePanelSeparator />
        <NavSidePanelItem icon={<Icon icon={LogOut} size={20} />}>
          Logout
        </NavSidePanelItem>
      </NavSidePanelFooter>
    </NavSidePanel>
  ),
};

export const Simple: Story = {
  render: () => (
    <NavSidePanel className="h-96">
      <div>
        <NavSidePanelHeader>
          <NavSidePanelBrand>App</NavSidePanelBrand>
          <NavSidePanelSeparator />
        </NavSidePanelHeader>
        <NavSidePanelNav>
          <NavSidePanelItem selected>Home</NavSidePanelItem>
          <NavSidePanelItem>Projects</NavSidePanelItem>
          <NavSidePanelItem>Team</NavSidePanelItem>
        </NavSidePanelNav>
      </div>
      <NavSidePanelFooter>
        <NavSidePanelItem>Settings</NavSidePanelItem>
      </NavSidePanelFooter>
    </NavSidePanel>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <NavSidePanel className="h-96">
      <div>
        <NavSidePanelHeader>
          <NavSidePanelBrand>Dashboard</NavSidePanelBrand>
          <NavSidePanelSeparator />
        </NavSidePanelHeader>
        <NavSidePanelNav>
          <NavSidePanelItem
            selected
            icon={<Icon icon={Home} size={24} />}
          >
            Home
          </NavSidePanelItem>
          <NavSidePanelSeparator />
          <NavSidePanelItem icon={<Icon icon={CheckWaves} size={20} />}>
            Tasks
          </NavSidePanelItem>
        </NavSidePanelNav>
      </div>
      <NavSidePanelFooter>
        <NavSidePanelSeparator />
        <NavSidePanelItem icon={<Icon icon={Settings} size={20} />}>
          Settings
        </NavSidePanelItem>
        <NavSidePanelSeparator />
        <NavSidePanelItem icon={<Icon icon={LogOut} size={20} />}>
          Logout
        </NavSidePanelItem>
      </NavSidePanelFooter>
    </NavSidePanel>
  ),
};

export const Minimal: Story = {
  render: () => (
    <NavSidePanel className="h-64">
      <div>
        <NavSidePanelHeader>
          <NavSidePanelBrand>App</NavSidePanelBrand>
        </NavSidePanelHeader>
        <NavSidePanelNav>
          <NavSidePanelItem selected>Dashboard</NavSidePanelItem>
          <NavSidePanelItem>Settings</NavSidePanelItem>
        </NavSidePanelNav>
      </div>
    </NavSidePanel>
  ),
};

export const LongList: Story = {
  render: () => (
    <NavSidePanel className="h-screen">
      <div>
        <NavSidePanelHeader>
          <NavSidePanelBrand>Portal</NavSidePanelBrand>
          <NavSidePanelSeparator />
        </NavSidePanelHeader>
        <NavSidePanelNav>
          <NavSidePanelItem selected>Dashboard</NavSidePanelItem>
          <NavSidePanelItem>Projects</NavSidePanelItem>
          <NavSidePanelItem>Tasks</NavSidePanelItem>
          <NavSidePanelItem>Team</NavSidePanelItem>
          <NavSidePanelSeparator />
          <NavSidePanelItem>Reports</NavSidePanelItem>
          <NavSidePanelItem>Analytics</NavSidePanelItem>
          <NavSidePanelItem>Documents</NavSidePanelItem>
        </NavSidePanelNav>
      </div>
      <NavSidePanelFooter>
        <NavSidePanelSeparator />
        <NavSidePanelItem>Settings</NavSidePanelItem>
        <NavSidePanelItem>Help</NavSidePanelItem>
        <NavSidePanelSeparator />
        <NavSidePanelItem>Logout</NavSidePanelItem>
      </NavSidePanelFooter>
    </NavSidePanel>
  ),
};
