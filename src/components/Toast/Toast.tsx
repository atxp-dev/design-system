import * as React from 'react';
import { Toaster as Sonner } from 'sonner';

/**
 * Toast Component
 *
 * A succinct message that is displayed temporarily.
 *
 * Based on Figma component: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2806-824
 *
 * @see https://ui.shadcn.com/docs/components/sonner
 * @see https://sonner.emilkowal.ski/
 *
 * @example
 * ```tsx
 * import { Toaster, toast } from '@/components/Toast';
 *
 * // Add Toaster to your app root
 * <Toaster />
 *
 * // Show toasts
 * toast('Event has been created')
 * toast.success('Event has been created')
 * toast.error('Event creation failed')
 * ```
 */
type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast } from 'sonner';
export { Toaster as Toast };
