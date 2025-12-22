import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Switch } from './Switch';

/**
 * A control that allows the user to toggle between checked and not checked.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2674-2178
 */
const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2674-2178&m=dev',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default unchecked switch
 */
export const Default: Story = {
  args: {},
};

/**
 * Checked switch
 */
export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

/**
 * Disabled switch
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

/**
 * Disabled and checked
 */
export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

/**
 * Switch with label
 */
export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Switch id="airplane-mode" />
      <label
        htmlFor="airplane-mode"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Airplane Mode
      </label>
    </div>
  ),
};

/**
 * Switch with description
 */
export const WithDescription: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Switch id="notifications" />
      <div className="grid gap-1.5">
        <label
          htmlFor="notifications"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Show app notifications
        </label>
        <p className="text-sm text-muted-foreground">
          Receive notifications from this app
        </p>
      </div>
    </div>
  ),
};

/**
 * Controlled switch
 */
export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Switch checked={checked} onCheckedChange={setChecked} id="controlled" />
          <label htmlFor="controlled" className="text-sm font-medium">
            Controlled Switch
          </label>
        </div>
        <p className="text-sm text-muted-foreground">
          Switch is {checked ? 'checked' : 'unchecked'}
        </p>
      </div>
    );
  },
};

/**
 * Form example
 */
export const Form: Story = {
  render: () => {
    const [settings, setSettings] = React.useState({
      marketing: false,
      security: true,
      newsletter: false,
    });

    return (
      <div className="w-96 space-y-6 rounded-lg border border-border p-6">
        <div>
          <h3 className="text-lg font-semibold">Notification Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage your notification preferences
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label htmlFor="marketing" className="text-sm font-medium">
                Marketing emails
              </label>
              <p className="text-xs text-muted-foreground">
                Receive emails about new products
              </p>
            </div>
            <Switch
              id="marketing"
              checked={settings.marketing}
              onCheckedChange={(checked) =>
                setSettings({ ...settings, marketing: checked })
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label htmlFor="security" className="text-sm font-medium">
                Security alerts
              </label>
              <p className="text-xs text-muted-foreground">
                Get notified of account activity
              </p>
            </div>
            <Switch
              id="security"
              checked={settings.security}
              onCheckedChange={(checked) =>
                setSettings({ ...settings, security: checked })
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label htmlFor="newsletter" className="text-sm font-medium">
                Newsletter
              </label>
              <p className="text-xs text-muted-foreground">
                Weekly digest of news and updates
              </p>
            </div>
            <Switch
              id="newsletter"
              checked={settings.newsletter}
              onCheckedChange={(checked) =>
                setSettings({ ...settings, newsletter: checked })
              }
            />
          </div>
        </div>
      </div>
    );
  },
};
