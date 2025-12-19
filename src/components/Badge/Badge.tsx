import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Badge variants using class-variance-authority
 * Based on Figma component: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=620:965
 */
const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-primary bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-secondary bg-secondary text-secondary-foreground hover:brightness-95',
        destructive:
          'border-destructive bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline:
          'border-border bg-transparent text-foreground hover:bg-muted',
        success:
          'border-success bg-success-background text-foreground hover:brightness-95',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs font-semibold',
        md: 'px-2 py-0.5 text-sm font-medium',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

/**
 * Badge Component
 *
 * Displays a badge or a component that looks like a badge.
 *
 * @see https://ui.shadcn.com/docs/components/badge
 *
 * @example
 * ```tsx
 * <Badge>Default</Badge>
 * <Badge variant="secondary">Secondary</Badge>
 * <Badge variant="destructive">Error</Badge>
 * <Badge variant="outline">Outline</Badge>
 * <Badge variant="success">Success</Badge>
 * <Badge size="md">Larger Badge</Badge>
 * ```
 */
function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
