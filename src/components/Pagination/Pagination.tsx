import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Icon, ChevronLeft, ChevronRight, Dots } from '@/components/Icon';

/**
 * Pagination Component
 *
 * Pagination with page navigation, next and previous links.
 * Based on Figma component: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2648-223
 *
 * @see https://ui.shadcn.com/docs/components/pagination
 */

export type PaginationProps = React.HTMLAttributes<HTMLElement>;

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({ className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="pagination"
        className={cn('flex items-center justify-center gap-2', className)}
        {...props}
      />
    );
  }
);
Pagination.displayName = 'Pagination';

const paginationItemVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium leading-5 transition-colors',
  {
    variants: {
      variant: {
        default: 'hover:bg-muted',
        active:
          'border border-border bg-background hover:bg-muted',
      },
      size: {
        default: 'h-10 w-10',
        sm: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface PaginationItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof paginationItemVariants> {
  /**
   * Whether this page is currently active
   */
  isActive?: boolean;
}

const PaginationItem = React.forwardRef<HTMLButtonElement, PaginationItemProps>(
  ({ className, variant, size, isActive, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          paginationItemVariants({
            variant: isActive ? 'active' : variant,
            size,
          }),
          className
        )}
        aria-current={isActive ? 'page' : undefined}
        {...props}
      />
    );
  }
);
PaginationItem.displayName = 'PaginationItem';

export interface PaginationLinkProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Direction of the link
   */
  direction?: 'previous' | 'next';
}

const PaginationLink = React.forwardRef<HTMLButtonElement, PaginationLinkProps>(
  ({ className, direction = 'next', children, ...props }, ref) => {
    const isPrevious = direction === 'previous';
    const isNext = direction === 'next';

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex h-10 items-center justify-center gap-1 rounded-md px-3 text-sm font-medium leading-5 transition-colors hover:bg-muted',
          className
        )}
        {...props}
      >
        {isPrevious && <Icon icon={ChevronLeft} size={16} />}
        {children || (isPrevious ? 'Previous' : 'Next')}
        {isNext && <Icon icon={ChevronRight} size={16} />}
      </button>
    );
  }
);
PaginationLink.displayName = 'PaginationLink';

export type PaginationEllipsisProps = React.HTMLAttributes<HTMLSpanElement>;

const PaginationEllipsis = React.forwardRef<
  HTMLSpanElement,
  PaginationEllipsisProps
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      aria-hidden
      className={cn(
        'flex h-9 w-9 items-center justify-center',
        className
      )}
      {...props}
    >
      <Icon icon={Dots} size={24} />
    </span>
  );
});
PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
  Pagination,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  paginationItemVariants,
};
