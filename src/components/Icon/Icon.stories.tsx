import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import * as Icons from 'lucide-react';

/**
 * Icon library using lucide-react with design system styling.
 * All icons are 24x24px by default to match the Figma design system.
 *
 * Based on the Figma icon library:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=606-1276
 */
const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=606-1276&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: Icons.AlertCircle,
  },
};

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon icon={Icons.Star} size={16} />
      <Icon icon={Icons.Star} size={20} />
      <Icon icon={Icons.Star} size={24} />
      <Icon icon={Icons.Star} size={32} />
      <Icon icon={Icons.Star} size={48} />
    </div>
  ),
};

export const Colors = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon icon={Icons.Heart} className="text-foreground" />
      <Icon icon={Icons.Heart} className="text-primary" />
      <Icon icon={Icons.Heart} className="text-destructive" />
      <Icon icon={Icons.Heart} className="text-success" />
      <Icon icon={Icons.Heart} className="text-muted" />
    </div>
  ),
};

export const Navigation = {
  render: () => (
    <div className="grid grid-cols-6 gap-4 p-4">
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.ArrowLeft} />
        <span className="text-xs">ArrowLeft</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.ArrowRight} />
        <span className="text-xs">ArrowRight</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.ArrowUp} />
        <span className="text-xs">ArrowUp</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.ArrowDown} />
        <span className="text-xs">ArrowDown</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.ChevronLeft} />
        <span className="text-xs">ChevronLeft</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.ChevronRight} />
        <span className="text-xs">ChevronRight</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.ChevronUp} />
        <span className="text-xs">ChevronUp</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.ChevronDown} />
        <span className="text-xs">ChevronDown</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.ChevronsLeft} />
        <span className="text-xs">ChevronsLeft</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.ChevronsRight} />
        <span className="text-xs">ChevronsRight</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.ChevronsUp} />
        <span className="text-xs">ChevronsUp</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.ChevronsDown} />
        <span className="text-xs">ChevronsDown</span>
      </div>
    </div>
  ),
};

export const Actions = {
  render: () => (
    <div className="grid grid-cols-6 gap-4 p-4">
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.Plus} />
        <span className="text-xs">Plus</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.Minus} />
        <span className="text-xs">Minus</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.X} />
        <span className="text-xs">X</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.Check} />
        <span className="text-xs">Check</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.Copy} />
        <span className="text-xs">Copy</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.Edit} />
        <span className="text-xs">Edit</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.Trash} />
        <span className="text-xs">Trash</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.Save} />
        <span className="text-xs">Save</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.Download} />
        <span className="text-xs">Download</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.Upload} />
        <span className="text-xs">Upload</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.Share} />
        <span className="text-xs">Share</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.Send} />
        <span className="text-xs">Send</span>
      </div>
    </div>
  ),
};

export const Status = {
  render: () => (
    <div className="grid grid-cols-6 gap-4 p-4">
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.AlertCircle} />
        <span className="text-xs">AlertCircle</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.AlertTriangle} />
        <span className="text-xs">AlertTriangle</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.Info} />
        <span className="text-xs">Info</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.CheckCircle} />
        <span className="text-xs">CheckCircle</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.XCircle} />
        <span className="text-xs">XCircle</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon icon={Icons.HelpCircle} />
        <span className="text-xs">HelpCircle</span>
      </div>
    </div>
  ),
};

export const AllCommonIcons = {
  render: () => {
    const commonIcons = [
      'Home', 'User', 'Settings', 'Search', 'Star', 'Heart', 'Mail',
      'Phone', 'Calendar', 'Clock', 'Bell', 'Menu', 'Filter', 'Camera',
      'File', 'Folder', 'Image', 'Video', 'Music', 'Lock', 'Unlock',
      'Shield', 'Eye', 'EyeOff', 'Link', 'ExternalLink', 'Download',
      'Upload', 'Share', 'Copy', 'Edit', 'Trash', 'Plus', 'Minus',
      'X', 'Check', 'Play', 'Pause', 'Volume2', 'Mic', 'Sun', 'Moon',
      'Cloud', 'Zap', 'TrendingUp', 'BarChart', 'PieChart', 'Package',
      'ShoppingCart', 'CreditCard', 'Tag', 'Gift', 'Award', 'Flag',
    ];

    return (
      <div className="grid grid-cols-8 gap-4 p-4 max-w-5xl">
        {commonIcons.map((iconName) => {
          const IconComponent = Icons[iconName as keyof typeof Icons] as Icons.LucideIcon;
          if (!IconComponent) return null;
          return (
            <div key={iconName} className="flex flex-col items-center gap-2">
              <Icon icon={IconComponent} />
              <span className="text-xs text-center">{iconName}</span>
            </div>
          );
        })}
      </div>
    );
  },
};
