import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Progress Component
 *
 * Displays an indicator showing the completion progress of a task,
 * typically displayed as a progress bar.
 * Based on Figma component: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2641-182
 *
 * @see https://ui.shadcn.com/docs/components/progress
 *
 * @example
 * ```tsx
 * <Progress value={33} />
 * <Progress value={66} />
 * <Progress value={100} />
 * ```
 */

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The progress value (0-100)
   */
  value?: number;
  /**
   * Optional max value (defaults to 100)
   */
  max?: number;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        className={cn(
          'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
          className
        )}
        {...props}
      >
        <div
          className="h-full bg-primary transition-all duration-300 ease-in-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  }
);
Progress.displayName = 'Progress';

export { Progress };
