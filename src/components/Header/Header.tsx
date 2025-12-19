import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Header Component
 *
 * A page header component that combines breadcrumbs, title, actions, and supporting text.
 *
 * Based on Figma component: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=4741-3916
 *
 * @example
 * ```tsx
 * <Header>
 *   <HeaderBreadcrumbs>
 *     <Breadcrumb>
 *       <BreadcrumbList>
 *         <BreadcrumbItem>
 *           <BreadcrumbLink href="/">Home</BreadcrumbLink>
 *         </BreadcrumbItem>
 *         <BreadcrumbSeparator />
 *         <BreadcrumbItem>
 *           <BreadcrumbPage>Current Page</BreadcrumbPage>
 *         </BreadcrumbItem>
 *       </BreadcrumbList>
 *     </Breadcrumb>
 *   </HeaderBreadcrumbs>
 *   <HeaderContent>
 *     <HeaderTitle>Page Title</HeaderTitle>
 *     <HeaderActions>
 *       <Button>Action</Button>
 *     </HeaderActions>
 *   </HeaderContent>
 *   <HeaderDescription>Supporting text goes here</HeaderDescription>
 * </Header>
 * ```
 */

const Header = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <header
    ref={ref}
    className={cn(
      'flex flex-col gap-2 border-b-2 border-accent bg-background px-6 pb-4 pt-6',
      className
    )}
    {...props}
  />
));
Header.displayName = 'Header';

const HeaderBreadcrumbs = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center gap-2.5 w-full', className)}
    {...props}
  />
));
HeaderBreadcrumbs.displayName = 'HeaderBreadcrumbs';

const HeaderContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center justify-between w-full', className)}
    {...props}
  />
));
HeaderContent.displayName = 'HeaderContent';

const HeaderTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      'text-2xl font-medium leading-8 text-foreground',
      className
    )}
    {...props}
  />
));
HeaderTitle.displayName = 'HeaderTitle';

const HeaderActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center gap-3', className)}
    {...props}
  />
));
HeaderActions.displayName = 'HeaderActions';

const HeaderDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      'text-base leading-6 text-muted-foreground',
      className
    )}
    {...props}
  />
));
HeaderDescription.displayName = 'HeaderDescription';

export {
  Header,
  HeaderBreadcrumbs,
  HeaderContent,
  HeaderTitle,
  HeaderActions,
  HeaderDescription,
};
