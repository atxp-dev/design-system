import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Radio Component
 *
 * A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
 *
 * Based on Figma component: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2674-2166
 *
 * @see https://ui.shadcn.com/docs/components/radio-group
 *
 * @example
 * ```tsx
 * <Radio name="notify" id="notify-yes" value="yes" />
 * <label htmlFor="notify-yes">Notify me</label>
 * ```
 */

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  onCheckedChange?: (checked: boolean) => void;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, onCheckedChange, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      onCheckedChange?.(e.target.checked);
    };

    return (
      <div className="relative inline-flex items-center">
        <input
          type="radio"
          className="peer sr-only"
          ref={ref}
          onChange={handleChange}
          {...props}
        />
        <div
          className={cn(
            'relative flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-primary bg-background transition-colors',
            'peer-checked:border-primary',
            'peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2',
            'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
            'after:absolute after:inset-0 after:m-auto after:h-2 after:w-2 after:rounded-full after:bg-primary after:scale-0 after:transition-transform',
            'peer-checked:after:scale-100',
            className
          )}
        />
      </div>
    );
  }
);
Radio.displayName = 'Radio';

export { Radio };
