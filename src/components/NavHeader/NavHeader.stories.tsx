import type { Meta, StoryObj } from '@storybook/react';
import {
  NavHeader,
  NavHeaderBrand,
  NavHeaderNav,
  NavHeaderItem,
  NavHeaderDivider,
} from './NavHeader';
import { Icon, Settings, BookOpen, Pen, Cog, LogOut } from '@/components/Icon';
import { ThemeProvider, useTheme, Theme } from '@/lib/theme';
import { Button } from '@/components/Button';
import { Badge } from '@/components/Badge';

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

/**
 * Theme Selector Component for testing NavHeader across themes
 */
function ThemeSelector() {
  const { theme, setTheme, actualTheme } = useTheme();
  const themes: Theme[] = ['light', 'dark', 'atxp', 'dbg'];

  return (
    <div className="bg-background p-4 border-b border-border">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-foreground">Theme:</span>
            {themes.map((t) => (
              <Button
                key={t}
                size="sm"
                variant={theme === t ? 'default' : 'outline'}
                onClick={() => setTheme(t)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Active:</span>
            <Badge variant="secondary">{actualTheme}</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Interactive theme tester - Test the NavHeader across all themes
 * Click the theme buttons at the top to see how the selected state appears in each theme
 */
export const ThemeTester: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background">
        <ThemeSelector />
        <div className="p-8 space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              With Icons and Selected State
            </h3>
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
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Multiple Items with Divider
            </h3>
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
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Simple Text Links
            </h3>
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
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

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
