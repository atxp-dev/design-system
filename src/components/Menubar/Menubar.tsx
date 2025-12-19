import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Icon, Check, ChevronRight } from '@/components/Icon';

/**
 * Menubar Component
 *
 * A visually persistent menu common in desktop applications that provides
 * quick access to a consistent set of commands.
 * Based on Figma component: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2760-2489
 *
 * @see https://ui.shadcn.com/docs/components/menubar
 */

export interface MenubarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Menubar = React.forwardRef<HTMLDivElement, MenubarProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex h-10 items-center gap-1 rounded-md border border-border bg-background p-1',
          className
        )}
        {...props}
      />
    );
  }
);
Menubar.displayName = 'Menubar';

const menubarTriggerVariants = cva(
  'inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium leading-5 transition-colors',
  {
    variants: {
      selected: {
        true: 'bg-accent text-accent-foreground',
        false: 'text-foreground hover:bg-accent hover:text-accent-foreground',
      },
    },
    defaultVariants: {
      selected: false,
    },
  }
);

export interface MenubarTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof menubarTriggerVariants> {}

const MenubarTrigger = React.forwardRef<HTMLButtonElement, MenubarTriggerProps>(
  ({ className, selected, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(menubarTriggerVariants({ selected }), className)}
        {...props}
      />
    );
  }
);
MenubarTrigger.displayName = 'MenubarTrigger';

export interface MenubarDropdownProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const MenubarDropdown = React.forwardRef<HTMLDivElement, MenubarDropdownProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex w-56 flex-col gap-0 rounded-md border border-border bg-popover p-1 shadow-md',
          className
        )}
        {...props}
      />
    );
  }
);
MenubarDropdown.displayName = 'MenubarDropdown';

const menubarItemVariants = cva(
  'flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm font-normal leading-5 transition-colors',
  {
    variants: {
      disabled: {
        true: 'cursor-not-allowed opacity-50',
        false: 'cursor-pointer text-popover-foreground hover:bg-accent hover:text-accent-foreground',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

export interface MenubarItemProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof menubarItemVariants> {
  /**
   * Optional keyboard shortcut to display
   */
  shortcut?: string;
  /**
   * Whether to show a checkmark
   */
  checked?: boolean;
  /**
   * Whether this item has a submenu
   */
  hasSubmenu?: boolean;
}

const MenubarItem = React.forwardRef<HTMLButtonElement, MenubarItemProps>(
  (
    {
      className,
      disabled = false,
      shortcut,
      checked,
      hasSubmenu,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = Boolean(disabled);
    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(menubarItemVariants({ disabled: isDisabled }), className)}
        {...props}
      >
        {checked && (
          <Icon icon={Check} size={16} className="shrink-0" />
        )}
        {!checked && <div className="w-4 shrink-0" />}
        <span className="flex-1 text-left">{children}</span>
        {shortcut && (
          <span className="ml-auto text-xs leading-4 opacity-60">
            {shortcut}
          </span>
        )}
        {hasSubmenu && (
          <Icon icon={ChevronRight} size={10.67} className="ml-auto opacity-60" />
        )}
      </button>
    );
  }
);
MenubarItem.displayName = 'MenubarItem';

export interface MenubarSeparatorProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const MenubarSeparator = React.forwardRef<HTMLDivElement, MenubarSeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('my-1 h-px w-full bg-border', className)}
        {...props}
      />
    );
  }
);
MenubarSeparator.displayName = 'MenubarSeparator';

export interface MenubarLabelProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const MenubarLabel = React.forwardRef<HTMLDivElement, MenubarLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'px-2 py-1.5 text-sm font-semibold leading-5 text-popover-foreground',
          className
        )}
        {...props}
      />
    );
  }
);
MenubarLabel.displayName = 'MenubarLabel';

export {
  Menubar,
  MenubarTrigger,
  MenubarDropdown,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  menubarTriggerVariants,
  menubarItemVariants,
};
