import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Input Component
 *
 * Displays a form input field or a component that looks like an input field.
 * Based on Figma component: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2630-194
 *
 * @see https://ui.shadcn.com/docs/components/input
 *
 * @example
 * ```tsx
 * <Input type="email" placeholder="Email" />
 * <Input type="password" placeholder="Password" disabled />
 * ```
 */

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Optional icon to display at the end of the input
   */
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    const WrapperComponent = icon ? 'div' : React.Fragment;
    const wrapperProps = icon
      ? {
          className: cn(
            'flex h-10 w-full items-center gap-2 rounded-md border border-input bg-background px-3 py-2',
            'focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
            className
          ),
        }
      : {};

    const inputElement = (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm leading-5 text-foreground',
          'file:border-0 file:bg-transparent file:text-sm file:font-medium',
          'placeholder:text-muted-foreground',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          icon && 'flex-1 border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0',
          !icon && className
        )}
        ref={ref}
        {...props}
      />
    );

    if (icon) {
      return (
        <WrapperComponent {...wrapperProps}>
          {inputElement}
          {icon}
        </WrapperComponent>
      );
    }

    return inputElement;
  }
);
Input.displayName = 'Input';

export { Input };
