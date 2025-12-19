import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * HoverCard Component
 *
 * For sighted users to preview content available behind a link.
 * Based on Figma component: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2785-828
 *
 * @see https://ui.shadcn.com/docs/components/hover-card
 *
 * @example
 * ```tsx
 * <HoverCard>
 *   <HoverCardHeader>
 *     <HoverCardTitle>Hover Card Title</HoverCardTitle>
 *     <HoverCardDescription>Hover Card Description</HoverCardDescription>
 *   </HoverCardHeader>
 *   <div>Main content goes here</div>
 * </HoverCard>
 * ```
 */

export interface HoverCardProps extends React.HTMLAttributes<HTMLDivElement> {}

const HoverCard = React.forwardRef<HTMLDivElement, HoverCardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex w-64 flex-col gap-4 rounded-md border border-border bg-popover p-4 text-popover-foreground shadow-md',
          className
        )}
        {...props}
      />
    );
  }
);
HoverCard.displayName = 'HoverCard';

export interface HoverCardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const HoverCardHeader = React.forwardRef<HTMLDivElement, HoverCardHeaderProps>(
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
HoverCardHeader.displayName = 'HoverCardHeader';

export interface HoverCardTitleProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const HoverCardTitle = React.forwardRef<
  HTMLParagraphElement,
  HoverCardTitleProps
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
HoverCardTitle.displayName = 'HoverCardTitle';

export interface HoverCardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const HoverCardDescription = React.forwardRef<
  HTMLParagraphElement,
  HoverCardDescriptionProps
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn('text-sm font-normal leading-5 text-muted-foreground', className)}
      {...props}
    />
  );
});
HoverCardDescription.displayName = 'HoverCardDescription';

export { HoverCard, HoverCardHeader, HoverCardTitle, HoverCardDescription };
