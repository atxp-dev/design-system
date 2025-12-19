import * as React from 'react';
import { cn } from '@/lib/utils';
import { Icon, Check } from '@/components/Icon';

/**
 * Checkbox Component
 *
 * A control that allows the user to toggle between checked and not checked.
 *
 * Based on Figma component: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2674-1733
 *
 * @see https://ui.shadcn.com/docs/components/checkbox
 *
 * @example
 * ```tsx
 * <Checkbox id="terms" />
 * <label htmlFor="terms">Accept terms and conditions</label>
 * ```
 */

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, onCheckedChange, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      onCheckedChange?.(e.target.checked);
    };

    return (
      <div className="relative inline-flex items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          ref={ref}
          onChange={handleChange}
          {...props}
        />
        <div
          className={cn(
            'flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-primary transition-colors',
            'peer-checked:bg-primary peer-checked:text-primary-foreground',
            'peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2',
            'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
            className
          )}
        >
          <Icon
            icon={Check}
            size={12}
            className="hidden peer-checked:block"
          />
        </div>
      </div>
    );
  }
);
Checkbox.displayName = 'Checkbox';

export { Checkbox };
