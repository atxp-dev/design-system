import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * NavHeader Component
 *
 * A horizontal navigation header for application navigation.
 * Based on Figma component: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=4722-5662
 *
 * @example
 * ```tsx
 * <NavHeader>
 *   <NavHeaderBrand>My App</NavHeaderBrand>
 *   <NavHeaderNav>
 *     <NavHeaderItem selected>Dashboard</NavHeaderItem>
 *     <NavHeaderItem>Settings</NavHeaderItem>
 *   </NavHeaderNav>
 * </NavHeader>
 * ```
 */

export type NavHeaderProps = React.HTMLAttributes<HTMLElement>;

const NavHeader = React.forwardRef<HTMLElement, NavHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          'flex w-full items-center justify-between border-b border-slate-200 bg-background p-4',
          className
        )}
        {...props}
      />
    );
  }
);
NavHeader.displayName = 'NavHeader';

export type NavHeaderBrandProps = React.HTMLAttributes<HTMLDivElement>;

const NavHeaderBrand = React.forwardRef<HTMLDivElement, NavHeaderBrandProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex items-center', className)}
        {...props}
      />
    );
  }
);
NavHeaderBrand.displayName = 'NavHeaderBrand';

export type NavHeaderNavProps = React.HTMLAttributes<HTMLElement>;

const NavHeaderNav = React.forwardRef<HTMLElement, NavHeaderNavProps>(
  ({ className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn('flex items-center gap-4', className)}
        {...props}
      />
    );
  }
);
NavHeaderNav.displayName = 'NavHeaderNav';

const navHeaderItemVariants = cva(
  'inline-flex h-9 items-center justify-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium leading-5 transition-colors',
  {
    variants: {
      variant: {
        default: 'text-foreground hover:bg-muted',
        selected: 'bg-accent text-secondary-foreground font-bold',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface NavHeaderItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof navHeaderItemVariants> {
  /**
   * Whether this item is currently selected
   */
  selected?: boolean;
  /**
   * Optional icon to display
   */
  icon?: React.ReactNode;
}

const NavHeaderItem = React.forwardRef<HTMLButtonElement, NavHeaderItemProps>(
  ({ className, variant, selected, icon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          navHeaderItemVariants({
            variant: selected ? 'selected' : variant,
          }),
          className
        )}
        {...props}
      >
        {icon}
        {children}
      </button>
    );
  }
);
NavHeaderItem.displayName = 'NavHeaderItem';

export type NavHeaderDividerProps = React.HTMLAttributes<HTMLDivElement>;

const NavHeaderDivider = React.forwardRef<
  HTMLDivElement,
  NavHeaderDividerProps
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('text-base font-normal leading-6 text-input', className)}
      {...props}
    >
      |
    </div>
  );
});
NavHeaderDivider.displayName = 'NavHeaderDivider';

export {
  NavHeader,
  NavHeaderBrand,
  NavHeaderNav,
  NavHeaderItem,
  NavHeaderDivider,
  navHeaderItemVariants,
};
