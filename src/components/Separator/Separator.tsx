import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cn } from '@/lib/utils';

/**
 * Separator Component
 *
 * Visually or semantically separates content.
 *
 * Based on Figma component: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2723-432
 *
 * @see https://ui.shadcn.com/docs/components/separator
 * @see https://www.radix-ui.com/docs/primitives/components/separator
 *
 * @example
 * ```tsx
 * <div>
 *   <p>Item 1</p>
 *   <Separator />
 *   <p>Item 2</p>
 * </div>
 * ```
 *
 * @example
 * ```tsx
 * <div className="flex h-5 items-center">
 *   <span>Link 1</span>
 *   <Separator orientation="vertical" />
 *   <span>Link 2</span>
 * </div>
 * ```
 */
const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
