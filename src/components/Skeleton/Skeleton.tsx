import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Skeleton Component
 *
 * Display a placeholder preview of content before the data loads.
 *
 * Based on Figma component: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2824-2174
 *
 * @see https://ui.shadcn.com/docs/components/skeleton
 *
 * @example
 * ```tsx
 * <div className="flex flex-col gap-2">
 *   <Skeleton className="h-32 w-60" />
 *   <Skeleton className="h-4 w-60" />
 *   <Skeleton className="h-4 w-48" />
 * </div>
 * ```
 *
 * @example
 * ```tsx
 * // Circle skeleton for avatars
 * <Skeleton className="h-10 w-10 rounded-full" />
 * ```
 */
const Skeleton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'animate-pulse rounded-md bg-muted',
      className
    )}
    {...props}
  />
));
Skeleton.displayName = 'Skeleton';

export { Skeleton };
