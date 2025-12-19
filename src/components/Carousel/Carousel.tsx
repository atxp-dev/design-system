import * as React from 'react';
import { cn } from '@/lib/utils';
import { Icon, ArrowLeft, ArrowRight } from '@/components/Icon';

/**
 * Carousel Component
 *
 * A carousel optimizes screen space by displaying only a subset of images
 * from a collection of images in a cyclic view.
 *
 * Based on Figma component: https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2813-1109
 *
 * @see https://ui.shadcn.com/docs/components/carousel
 *
 * @example
 * ```tsx
 * <Carousel>
 *   <CarouselContent>
 *     <CarouselItem>Slide 1</CarouselItem>
 *     <CarouselItem>Slide 2</CarouselItem>
 *     <CarouselItem>Slide 3</CarouselItem>
 *   </CarouselContent>
 *   <CarouselPrevious />
 *   <CarouselNext />
 * </Carousel>
 * ```
 */

interface CarouselContextValue {
  currentIndex: number;
  totalItems: number;
  goToSlide: (index: number) => void;
  nextSlide: () => void;
  previousSlide: () => void;
}

const CarouselContext = React.createContext<CarouselContextValue | undefined>(
  undefined
);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a Carousel');
  }
  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(
  ({ className, children, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [totalItems, setTotalItems] = React.useState(0);

    const goToSlide = React.useCallback((index: number) => {
      setCurrentIndex(index);
    }, []);

    const nextSlide = React.useCallback(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, [totalItems]);

    const previousSlide = React.useCallback(() => {
      setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    }, [totalItems]);

    const value = React.useMemo(
      () => ({
        currentIndex,
        totalItems,
        goToSlide,
        nextSlide,
        previousSlide,
      }),
      [currentIndex, totalItems, goToSlide, nextSlide, previousSlide]
    );

    return (
      <CarouselContext.Provider value={value}>
        <div
          ref={ref}
          className={cn('flex items-center justify-center gap-6', className)}
          {...props}
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              return React.cloneElement(child as any, { setTotalItems });
            }
            return child;
          })}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = 'Carousel';

interface CarouselContentProps extends React.HTMLAttributes<HTMLDivElement> {
  setTotalItems?: (count: number) => void;
}

const CarouselContent = React.forwardRef<HTMLDivElement, CarouselContentProps>(
  ({ className, children, setTotalItems, ...props }, ref) => {
    const { currentIndex } = useCarousel();
    const childrenArray = React.Children.toArray(children);

    React.useEffect(() => {
      setTotalItems?.(childrenArray.length);
    }, [childrenArray.length, setTotalItems]);

    return (
      <div
        ref={ref}
        className={cn(
          'relative w-96 h-96 overflow-hidden rounded-md border-2 border-border bg-card shadow-sm',
          className
        )}
        {...props}
      >
        <div
          className="flex h-full transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {childrenArray}
        </div>
      </div>
    );
  }
);
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'min-w-full flex items-center justify-center',
      className
    )}
    {...props}
  />
));
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { previousSlide, currentIndex } = useCarousel();

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        'flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-background shadow-sm transition-opacity hover:opacity-100',
        currentIndex === 0 ? 'opacity-50' : 'opacity-100',
        className
      )}
      onClick={previousSlide}
      aria-label="Previous slide"
      {...props}
    >
      <Icon icon={ArrowLeft} size={20} />
    </button>
  );
});
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { nextSlide, currentIndex, totalItems } = useCarousel();

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        'flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-background shadow-sm transition-opacity hover:opacity-100',
        currentIndex === totalItems - 1 ? 'opacity-50' : 'opacity-100',
        className
      )}
      onClick={nextSlide}
      aria-label="Next slide"
      {...props}
    >
      <Icon icon={ArrowRight} size={20} />
    </button>
  );
});
CarouselNext.displayName = 'CarouselNext';

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
