import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * InputGroup Component
 *
 * Groups form inputs with labels and optional help text.
 * Based on Figma component: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2818-1785
 *
 * @example
 * ```tsx
 * <InputGroup>
 *   <InputGroupLabel>Email</InputGroupLabel>
 *   <Input type="email" placeholder="Enter email" />
 *   <InputGroupHelpText>We'll never share your email.</InputGroupHelpText>
 * </InputGroup>
 * ```
 */

export type InputGroupProps = React.HTMLAttributes<HTMLDivElement>;

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col gap-2', className)}
        {...props}
      />
    );
  }
);
InputGroup.displayName = 'InputGroup';

export type InputGroupLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

const InputGroupLabel = React.forwardRef<
  HTMLLabelElement,
  InputGroupLabelProps
>(({ className, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn(
        'text-sm font-medium leading-5 text-foreground',
        className
      )}
      {...props}
    />
  );
});
InputGroupLabel.displayName = 'InputGroupLabel';

export type InputGroupHelpTextProps = React.HTMLAttributes<HTMLParagraphElement>;

const InputGroupHelpText = React.forwardRef<
  HTMLParagraphElement,
  InputGroupHelpTextProps
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        'text-sm font-normal leading-5 text-muted-foreground',
        className
      )}
      {...props}
    />
  );
});
InputGroupHelpText.displayName = 'InputGroupHelpText';

export { InputGroup, InputGroupLabel, InputGroupHelpText };
