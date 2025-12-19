import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * NavSidePanel Component
 *
 * A vertical side navigation panel for application navigation.
 * Based on Figma component: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=4722-5838
 *
 * @example
 * ```tsx
 * <NavSidePanel>
 *   <NavSidePanelHeader>My App</NavSidePanelHeader>
 *   <NavSidePanelNav>
 *     <NavSidePanelItem selected icon={<Icon />}>Dashboard</NavSidePanelItem>
 *     <NavSidePanelItem icon={<Icon />}>Settings</NavSidePanelItem>
 *   </NavSidePanelNav>
 * </NavSidePanel>
 * ```
 */

export type NavSidePanelProps = React.HTMLAttributes<HTMLDivElement>;

const NavSidePanel = React.forwardRef<HTMLDivElement, NavSidePanelProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex w-[180px] flex-col justify-between overflow-hidden bg-sidebar-background',
          className
        )}
        {...props}
      />
    );
  }
);
NavSidePanel.displayName = 'NavSidePanel';

export type NavSidePanelHeaderProps = React.HTMLAttributes<HTMLDivElement>;

const NavSidePanelHeader = React.forwardRef<
  HTMLDivElement,
  NavSidePanelHeaderProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col gap-3.5 px-4 pt-6', className)}
      {...props}
    />
  );
});
NavSidePanelHeader.displayName = 'NavSidePanelHeader';

export type NavSidePanelBrandProps = React.HTMLAttributes<HTMLDivElement>;

const NavSidePanelBrand = React.forwardRef<
  HTMLDivElement,
  NavSidePanelBrandProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'flex justify-center text-xl font-extrabold leading-7 text-black',
        className
      )}
      {...props}
    />
  );
});
NavSidePanelBrand.displayName = 'NavSidePanelBrand';

export type NavSidePanelSeparatorProps = React.HTMLAttributes<HTMLDivElement>;

const NavSidePanelSeparator = React.forwardRef<
  HTMLDivElement,
  NavSidePanelSeparatorProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('h-px w-full bg-[#beeaec]', className)}
      {...props}
    />
  );
});
NavSidePanelSeparator.displayName = 'NavSidePanelSeparator';

export type NavSidePanelNavProps = React.HTMLAttributes<HTMLElement>;

const NavSidePanelNav = React.forwardRef<HTMLElement, NavSidePanelNavProps>(
  ({ className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn('flex flex-1 flex-col gap-0 px-4', className)}
        {...props}
      />
    );
  }
);
NavSidePanelNav.displayName = 'NavSidePanelNav';

const navSidePanelItemVariants = cva(
  'flex h-10 w-full items-center gap-1.5 rounded-sm bg-secondary px-4 py-0 shadow-xs transition-colors',
  {
    variants: {
      selected: {
        true: 'border-r-4 border-primary bg-accent',
        false: 'hover:bg-accent',
      },
    },
    defaultVariants: {
      selected: false,
    },
  }
);

export interface NavSidePanelItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof navSidePanelItemVariants> {
  /**
   * Optional icon to display
   */
  icon?: React.ReactNode;
}

const NavSidePanelItem = React.forwardRef<
  HTMLButtonElement,
  NavSidePanelItemProps
>(({ className, selected, icon, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(navSidePanelItemVariants({ selected }), className)}
      {...props}
    >
      {icon}
      <span className="text-sm font-medium leading-5 text-accent-foreground">
        {children}
      </span>
    </button>
  );
});
NavSidePanelItem.displayName = 'NavSidePanelItem';

export type NavSidePanelFooterProps = React.HTMLAttributes<HTMLDivElement>;

const NavSidePanelFooter = React.forwardRef<
  HTMLDivElement,
  NavSidePanelFooterProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col gap-0 px-4 pb-4', className)}
      {...props}
    />
  );
});
NavSidePanelFooter.displayName = 'NavSidePanelFooter';

export {
  NavSidePanel,
  NavSidePanelHeader,
  NavSidePanelBrand,
  NavSidePanelSeparator,
  NavSidePanelNav,
  NavSidePanelItem,
  NavSidePanelFooter,
  navSidePanelItemVariants,
};
