import * as React from 'react';
import { cn } from '@/lib/utils';
import { Icon, X } from '@/components/Icon';

/**
 * Sheet Component
 *
 * Extends Dialog to display content that complements the main content of the screen.
 * A slide-in panel that can appear from any side of the screen.
 *
 * Based on Figma component: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2774-707
 *
 * @see https://ui.shadcn.com/docs/components/sheet
 *
 * @example
 * ```tsx
 * <Sheet open={isOpen} onOpenChange={setIsOpen}>
 *   <SheetContent>
 *     <SheetHeader>
 *       <SheetTitle>Sheet Title</SheetTitle>
 *       <SheetDescription>Sheet Description</SheetDescription>
 *     </SheetHeader>
 *     <div>Main content</div>
 *     <SheetFooter>
 *       <Button>Action</Button>
 *     </SheetFooter>
 *   </SheetContent>
 * </Sheet>
 * ```
 */

export interface SheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

const Sheet = ({ open, onOpenChange, children }: SheetProps) => {
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
Sheet.displayName = 'Sheet';

type SheetSide = 'top' | 'right' | 'bottom' | 'left';

interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
  onOpenChange?: (open: boolean) => void;
  side?: SheetSide;
}

const sheetVariants: Record<SheetSide, string> = {
  top: 'inset-x-0 top-0 border-b',
  bottom: 'inset-x-0 bottom-0 border-t',
  left: 'inset-y-0 left-0 h-full w-[448px] border-r',
  right: 'inset-y-0 right-0 h-full w-[448px] border-l',
};

const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  ({ className, children, onOpenChange, side = 'right', ...props }, ref) => (
    <div
      className="fixed inset-0 z-50"
      onClick={() => onOpenChange?.(false)}
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

      {/* Sheet */}
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        className={cn(
          'fixed z-50 flex flex-col gap-4 bg-background p-6 shadow-lg transition-transform duration-300',
          sheetVariants[side],
          className
        )}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        <button
          onClick={() => onOpenChange?.(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          aria-label="Close"
        >
          <Icon icon={X} size={16} />
        </button>
        {children}
      </div>
    </div>
  )
);
SheetContent.displayName = 'SheetContent';

const SheetHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
    {...props}
  />
));
SheetHeader.displayName = 'SheetHeader';

const SheetTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn('text-lg font-semibold text-foreground', className)}
    {...props}
  />
));
SheetTitle.displayName = 'SheetTitle';

const SheetDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
SheetDescription.displayName = 'SheetDescription';

const SheetFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
    {...props}
  />
));
SheetFooter.displayName = 'SheetFooter';

const SheetClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    onOpenChange?: (open: boolean) => void;
  }
>(({ className, onOpenChange, ...props }, ref) => (
  <button
    ref={ref}
    onClick={() => onOpenChange?.(false)}
    className={cn(
      'rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none',
      className
    )}
    {...props}
  />
));
SheetClose.displayName = 'SheetClose';

export {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
};
