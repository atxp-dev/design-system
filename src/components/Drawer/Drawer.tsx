import * as React from 'react';
import { cn } from '@/lib/utils';
import { Icon, X } from '@/components/Icon';

/**
 * Drawer Component
 *
 * A window overlaid on either the primary window or another dialog window,
 * rendering the content underneath inert. Slides up from the bottom of the screen.
 *
 * Based on Figma component: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2786-829
 *
 * @see https://ui.shadcn.com/docs/components/drawer
 *
 * @example
 * ```tsx
 * <Drawer open={isOpen} onOpenChange={setIsOpen}>
 *   <DrawerContent>
 *     <DrawerHeader>
 *       <DrawerTitle>Drawer Title</DrawerTitle>
 *       <DrawerDescription>Drawer Description</DrawerDescription>
 *     </DrawerHeader>
 *     <div>Main content</div>
 *     <DrawerFooter>
 *       <Button>Action</Button>
 *     </DrawerFooter>
 *   </DrawerContent>
 * </Drawer>
 * ```
 */

export interface DrawerProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

const Drawer = ({ open, onOpenChange, children }: DrawerProps) => {
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
Drawer.displayName = 'Drawer';

interface DrawerContentProps extends React.HTMLAttributes<HTMLDivElement> {
  onOpenChange?: (open: boolean) => void;
}

const DrawerContent = React.forwardRef<HTMLDivElement, DrawerContentProps>(
  ({ className, children, onOpenChange, ...props }, ref) => (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center"
      onClick={() => onOpenChange?.(false)}
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/80" aria-hidden="true" />

      {/* Drawer */}
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        className={cn(
          'relative z-50 flex w-[320px] flex-col gap-4 overflow-hidden rounded-t-lg border-t border-x border-border bg-background p-6 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-2px_rgba(0,0,0,0.05)]',
          className
        )}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {/* Drag Handle */}
        <div className="absolute left-1/2 top-4 h-2 w-[100px] -translate-x-1/2 rounded-full bg-muted" />

        <button
          onClick={() => onOpenChange?.(false)}
          className="absolute right-[15px] top-[15px] rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          aria-label="Close"
        >
          <Icon icon={X} size={16} />
        </button>
        {children}
      </div>
    </div>
  )
);
DrawerContent.displayName = 'DrawerContent';

const DrawerHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col gap-1 pt-4 text-center', className)}
    {...props}
  />
));
DrawerHeader.displayName = 'DrawerHeader';

const DrawerTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn('text-lg font-semibold leading-7 text-foreground', className)}
    {...props}
  />
));
DrawerTitle.displayName = 'DrawerTitle';

const DrawerDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm leading-5 text-muted-foreground', className)}
    {...props}
  />
));
DrawerDescription.displayName = 'DrawerDescription';

const DrawerFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col gap-2', className)}
    {...props}
  />
));
DrawerFooter.displayName = 'DrawerFooter';

export {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
};
