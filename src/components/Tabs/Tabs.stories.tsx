import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

/**
 * A set of layered sections of content—known as tab panels—that are displayed one at a time.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2737-489
 */
const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2737-489&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default tabs
 */
export const Default: Story = {
  render: () => (
    <Tabs defaultValue="basic" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="basic">Basic</TabsTrigger>
        <TabsTrigger value="integrations">Integrations</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="advanced">Advanced</TabsTrigger>
      </TabsList>
      <TabsContent value="basic">
        <div className="rounded-lg border border-border p-6">
          <h3 className="text-lg font-semibold">Basic Settings</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Configure your basic application settings.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="integrations">
        <div className="rounded-lg border border-border p-6">
          <h3 className="text-lg font-semibold">Integrations</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Connect with third-party services.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="billing">
        <div className="rounded-lg border border-border p-6">
          <h3 className="text-lg font-semibold">Billing</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Manage your subscription and payment methods.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="profile">
        <div className="rounded-lg border border-border p-6">
          <h3 className="text-lg font-semibold">Profile</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Update your personal information.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="advanced">
        <div className="rounded-lg border border-border p-6">
          <h3 className="text-lg font-semibold">Advanced</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Advanced configuration options.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * Account settings example
 */
export const Account: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[500px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Name</label>
          <input
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            defaultValue="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Username</label>
          <input
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            defaultValue="@johndoe"
          />
        </div>
      </TabsContent>
      <TabsContent value="password" className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Current Password</label>
          <input
            type="password"
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">New Password</label>
          <input
            type="password"
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * Documentation tabs
 */
export const Documentation: Story = {
  render: () => (
    <Tabs defaultValue="preview" className="w-[600px]">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        <div className="rounded-lg border border-border p-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Component Preview</h2>
            <p className="text-muted-foreground">
              This is how your component will look when rendered.
            </p>
            <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
              Click me
            </button>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="code">
        <div className="rounded-lg border border-border p-6">
          <pre className="text-sm">
            <code>{`<button className="btn-primary">
  Click me
</button>`}</code>
          </pre>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * Vertical tabs
 */
export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="general" className="flex w-[600px] gap-4">
      <TabsList className="flex-col h-auto">
        <TabsTrigger value="general" className="w-full justify-start">
          General
        </TabsTrigger>
        <TabsTrigger value="security" className="w-full justify-start">
          Security
        </TabsTrigger>
        <TabsTrigger value="notifications" className="w-full justify-start">
          Notifications
        </TabsTrigger>
        <TabsTrigger value="display" className="w-full justify-start">
          Display
        </TabsTrigger>
      </TabsList>
      <div className="flex-1">
        <TabsContent value="general">
          <div className="rounded-lg border border-border p-6">
            <h3 className="text-lg font-semibold">General Settings</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Configure general application preferences.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="security">
          <div className="rounded-lg border border-border p-6">
            <h3 className="text-lg font-semibold">Security Settings</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Manage security and privacy options.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="notifications">
          <div className="rounded-lg border border-border p-6">
            <h3 className="text-lg font-semibold">Notification Preferences</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Control how you receive notifications.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="display">
          <div className="rounded-lg border border-border p-6">
            <h3 className="text-lg font-semibold">Display Options</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Customize the appearance and layout.
            </p>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  ),
};
