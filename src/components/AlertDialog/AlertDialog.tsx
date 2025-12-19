import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * AlertDialog Component
 *
 * A modal dialog that interrupts the user with important content and expects a response.
 *
 * Based on Figma component: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2673-1596
 *
 * @see https://ui.shadcn.com/docs/components/alert-dialog
 *
 * @example
 * ```tsx
 * <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
 *   <AlertDialogContent>
 *     <AlertDialogHeader>
 *       <AlertDialogTitle>Delete Account?</AlertDialogTitle>
 *       <AlertDialogDescription>
 *         Deleting your account is irreversible and will erase all your data.
 *       </AlertDialogDescription>
 *     </AlertDialogHeader>
 *     <AlertDialogFooter>
 *       <AlertDialogCancel>Cancel</AlertDialogCancel>
 *       <AlertDialogAction>Continue</AlertDialogAction>
 *     </AlertDialogFooter>
 *   </AlertDialogContent>
 * </AlertDialog>
 * ```
 */

export interface AlertDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

const AlertDialog = ({ open, onOpenChange, children }: AlertDialogProps) => {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onOpenChange?.(false);
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return React.cloneElement(child as any, { onOpenChange });
        }
        return child;
      })}
    </>
  );
};
AlertDialog.displayName = 'AlertDialog';

interface AlertDialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
  onOpenChange?: (open: boolean) => void;
}

const AlertDialogContent = React.forwardRef<
  HTMLDivElement,
  AlertDialogContentProps
>(({ className, children, onOpenChange, ...props }, ref) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center"
    onClick={() => onOpenChange?.(false)}
  >
    {/* Overlay */}
    <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

    {/* Dialog */}
    <div
      ref={ref}
      role="alertdialog"
      aria-modal="true"
      className={cn(
        'relative z-50 flex w-[512px] flex-col gap-4 rounded-lg border border-border bg-background p-6',
        className
      )}
      onClick={(e) => e.stopPropagation()}
      {...props}
    >
      {children}
    </div>
  </div>
));
AlertDialogContent.displayName = 'AlertDialogContent';

const AlertDialogHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col gap-2', className)}
    {...props}
  />
));
AlertDialogHeader.displayName = 'AlertDialogHeader';

const AlertDialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn('text-lg font-semibold leading-7 text-foreground', className)}
    {...props}
  />
));
AlertDialogTitle.displayName = 'AlertDialogTitle';

const AlertDialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm leading-5 text-muted-foreground', className)}
    {...props}
  />
));
AlertDialogDescription.displayName = 'AlertDialogDescription';

const AlertDialogFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center justify-end gap-2', className)}
    {...props}
  />
));
AlertDialogFooter.displayName = 'AlertDialogFooter';

const AlertDialogCancel = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    className={cn(
      'flex h-9 items-center justify-center rounded-lg border-2 border-border bg-background px-4 py-2 text-sm font-medium leading-5 text-accent-foreground shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] transition-colors hover:bg-muted',
      className
    )}
    {...props}
  />
));
AlertDialogCancel.displayName = 'AlertDialogCancel';

const AlertDialogAction = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    className={cn(
      'flex h-9 items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium leading-5 text-primary-foreground transition-colors hover:bg-primary/90',
      className
    )}
    {...props}
  />
));
AlertDialogAction.displayName = 'AlertDialogAction';

export {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
};
