import type { Meta } from '@storybook/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './Carousel';
import { Card, CardContent } from '@/components/Card';

/**
 * A carousel optimizes screen space by displaying only a subset of images
 * from a collection of images in a cyclic view.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2813-1109
 */
const meta = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2813-1109&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>;

export default meta;

export const Default = {
  render: () => (
    <Carousel>
      <CarouselPrevious />
      <CarouselContent>
        <CarouselItem>
          <div className="flex items-center justify-center h-full">
            <span className="text-4xl font-semibold text-foreground">1</span>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex items-center justify-center h-full">
            <span className="text-4xl font-semibold text-foreground">2</span>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex items-center justify-center h-full">
            <span className="text-4xl font-semibold text-foreground">3</span>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  ),
};

export const WithCards = {
  render: () => (
    <Carousel>
      <CarouselPrevious />
      <CarouselContent>
        <CarouselItem>
          <div className="p-6">
            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <span className="text-2xl font-semibold">Slide 1</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-6">
            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <span className="text-2xl font-semibold">Slide 2</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-6">
            <Card>
              <CardContent className="flex items-center justify-center p-6">
                <span className="text-2xl font-semibold">Slide 3</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  ),
};

export const WithContent = {
  render: () => (
    <Carousel>
      <CarouselPrevious />
      <CarouselContent>
        <CarouselItem>
          <div className="flex flex-col items-center justify-center h-full gap-4 p-8">
            <h3 className="text-2xl font-semibold text-foreground">
              Welcome
            </h3>
            <p className="text-center text-muted-foreground">
              This is the first slide with some content
            </p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex flex-col items-center justify-center h-full gap-4 p-8">
            <h3 className="text-2xl font-semibold text-foreground">
              Features
            </h3>
            <p className="text-center text-muted-foreground">
              Explore the amazing features in this slide
            </p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex flex-col items-center justify-center h-full gap-4 p-8">
            <h3 className="text-2xl font-semibold text-foreground">
              Get Started
            </h3>
            <p className="text-center text-muted-foreground">
              Ready to begin your journey?
            </p>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  ),
};

export const ManySlides = {
  render: () => (
    <Carousel>
      <CarouselPrevious />
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="flex items-center justify-center h-full">
              <span className="text-4xl font-semibold text-foreground">
                {index + 1}
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  ),
};
