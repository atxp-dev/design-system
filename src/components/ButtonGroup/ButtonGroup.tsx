import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Button Group Component
 *
 * A container for grouping multiple buttons together with consistent spacing.
 *
 * Based on Figma component: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=4720-4795
 *
 * @example
 * ```tsx
 * <ButtonGroup>
 *   <Button variant="outline">Cancel</Button>
 *   <Button>Save</Button>
 * </ButtonGroup>
 * ```
 *
 * @example
 * ```tsx
 * <ButtonGroup orientation="vertical">
 *   <Button>First</Button>
 *   <Button>Second</Button>
 *   <Button>Third</Button>
 * </ButtonGroup>
 * ```
 */

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The orientation of the button group
   * @default "horizontal"
   */
  orientation?: 'horizontal' | 'vertical';
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation = 'horizontal', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center',
          orientation === 'horizontal' ? 'flex-row gap-3' : 'flex-col gap-2',
          className
        )}
        role="group"
        {...props}
      >
        {children}
      </div>
    );
  }
);
ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
