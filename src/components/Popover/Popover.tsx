import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Popover Component
 *
 * Displays rich content in a portal, triggered by a button.
 * Based on Figma component: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2782-1741
 *
 * @see https://ui.shadcn.com/docs/components/popover
 *
 * @example
 * ```tsx
 * <Popover>
 *   <PopoverHeader>
 *     <PopoverTitle>Popover Title</PopoverTitle>
 *     <PopoverDescription>Popover Description</PopoverDescription>
 *   </PopoverHeader>
 *   <div>Content goes here</div>
 * </Popover>
 * ```
 */

export type PopoverProps = React.HTMLAttributes<HTMLDivElement>;

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'w-72 flex flex-col gap-4 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md',
          className
        )}
        {...props}
      />
    );
  }
);
Popover.displayName = 'Popover';

export type PopoverHeaderProps = React.HTMLAttributes<HTMLDivElement>;

const PopoverHeader = React.forwardRef<HTMLDivElement, PopoverHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col gap-1', className)}
        {...props}
      />
    );
  }
);
PopoverHeader.displayName = 'PopoverHeader';

export type PopoverTitleProps = React.HTMLAttributes<HTMLParagraphElement>;

const PopoverTitle = React.forwardRef<
  HTMLParagraphElement,
  PopoverTitleProps
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        'text-base font-medium leading-6 text-popover-foreground',
        className
      )}
      {...props}
    />
  );
});
PopoverTitle.displayName = 'PopoverTitle';

export type PopoverDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

const PopoverDescription = React.forwardRef<
  HTMLParagraphElement,
  PopoverDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn('text-sm font-normal leading-5 text-muted-foreground', className)}
      {...props}
    />
  );
});
PopoverDescription.displayName = 'PopoverDescription';

export { Popover, PopoverHeader, PopoverTitle, PopoverDescription };
