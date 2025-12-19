import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Icon, Check } from '@/components/Icon';

/**
 * Indicator variants using class-variance-authority
 * Based on Figma component: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=4717-4109
 */

// Indicator Dot Component
const indicatorDotVariants = cva('h-2.5 w-2.5 rounded-full', {
  variants: {
    status: {
      high: 'bg-[#E76E50]',
      medium: 'bg-[#E8C468]',
      low: 'bg-[#00BC7D]',
      info: 'bg-[#E76E50]',
    },
  },
  defaultVariants: {
    status: 'high',
  },
});

export interface IndicatorDotProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof indicatorDotVariants> {}

/**
 * IndicatorDot Component
 *
 * Displays a small colored dot indicator for status visualization.
 *
 * @example
 * ```tsx
 * <IndicatorDot status="high" />
 * <IndicatorDot status="medium" />
 * <IndicatorDot status="low" />
 * ```
 */
const IndicatorDot = React.forwardRef<HTMLDivElement, IndicatorDotProps>(
  ({ className, status, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(indicatorDotVariants({ status }), className)}
        {...props}
      />
    );
  }
);
IndicatorDot.displayName = 'IndicatorDot';

// Indicator Circle Component
const indicatorCircleVariants = cva('relative h-5 w-5', {
  variants: {
    status: {
      complete: '',
      partial: '',
      minimal: '',
    },
  },
  defaultVariants: {
    status: 'complete',
  },
});

export interface IndicatorCircleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof indicatorCircleVariants> {}

/**
 * IndicatorCircle Component
 *
 * Displays a circular progress indicator.
 *
 * @example
 * ```tsx
 * <IndicatorCircle status="complete" />
 * <IndicatorCircle status="partial" />
 * <IndicatorCircle status="minimal" />
 * ```
 */
const IndicatorCircle = React.forwardRef<HTMLDivElement, IndicatorCircleProps>(
  ({ className, status = 'complete', ...props }, ref) => {
    const isComplete = status === 'complete';
    const isPartial = status === 'partial';

    return (
      <div
        ref={ref}
        className={cn(indicatorCircleVariants({ status }), className)}
        {...props}
      >
        {isComplete && (
          <Icon
            icon={Check}
            size={20}
            className="text-[#5DCBCF]"
            strokeWidth={2}
          />
        )}
        {isPartial && (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0"
          >
            <circle
              cx="10"
              cy="10"
              r="6.5"
              stroke="#E2E8F0"
              strokeWidth="1.5"
            />
            <path
              d="M 10,3.5 A 6.5,6.5 0 0,1 16.5,10"
              stroke="#5DCBCF"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        )}
        {!isComplete && !isPartial && (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0"
          >
            <circle
              cx="10"
              cy="10"
              r="6.5"
              stroke="#E2E8F0"
              strokeWidth="1.5"
            />
          </svg>
        )}
      </div>
    );
  }
);
IndicatorCircle.displayName = 'IndicatorCircle';

export { IndicatorDot, IndicatorCircle, indicatorDotVariants, indicatorCircleVariants };
