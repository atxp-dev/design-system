import * as React from 'react';
import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Icon Component
 *
 * A wrapper around lucide-react icons to ensure consistent styling across the design system.
 * All icons are 24x24px by default to match the Figma design system.
 *
 * @see https://lucide.dev/icons
 *
 * @example
 * ```tsx
 * import { Icon } from '@circuitandchisel/design-system';
 * import { AlertCircle } from 'lucide-react';
 *
 * <Icon icon={AlertCircle} />
 * <Icon icon={AlertCircle} size={16} />
 * <Icon icon={AlertCircle} className="text-destructive" />
 * ```
 */
export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'ref'> {
  /** The lucide icon component to render */
  icon: LucideIcon;
  /** Size of the icon in pixels. Defaults to 24 */
  size?: number;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ icon: IconComponent, size = 24, className, ...props }, ref) => {
    return (
      <IconComponent
        ref={ref}
        size={size}
        className={cn('shrink-0', className)}
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';
