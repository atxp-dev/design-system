import type { Meta } from '@storybook/react';
import { Toaster, toast } from './Toast';
import { Button } from '../Button';

/**
 * A succinct message that is displayed temporarily.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2806-824
 */
const meta = {
  title: 'Components/Toast',
  component: Toaster,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2806-824&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toaster>;

export default meta;

/**
 * Default toast notification
 */
export const Default = {
  render: () => (
    <div>
      <Toaster />
      <Button
        onClick={() =>
          toast('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
          })
        }
      >
        Show Toast
      </Button>
    </div>
  ),
};

/**
 * Success toast with action button
 */
export const Success = {
  render: () => (
    <div>
      <Toaster />
      <Button
        onClick={() =>
          toast.success('Event has been created', {
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Success Toast
      </Button>
    </div>
  ),
};

/**
 * Info toast
 */
export const Info = {
  render: () => (
    <div>
      <Toaster />
      <Button
        onClick={() =>
          toast.info('You are on the latest version', {
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Info Toast
      </Button>
    </div>
  ),
};

/**
 * Warning toast
 */
export const Warning = {
  render: () => (
    <div>
      <Toaster />
      <Button
        onClick={() =>
          toast.warning('This action requires attention', {
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Warning Toast
      </Button>
    </div>
  ),
};

/**
 * Error toast
 */
export const Error = {
  render: () => (
    <div>
      <Toaster />
      <Button
        onClick={() =>
          toast.error('There was a problem with your request', {
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        Show Error Toast
      </Button>
    </div>
  ),
};

/**
 * Toast with description
 */
export const WithDescription = {
  render: () => (
    <div>
      <Toaster />
      <Button
        onClick={() =>
          toast('Event has been created', {
            description: 'Monday, January 3rd at 6:00pm',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        With Description
      </Button>
    </div>
  ),
};

/**
 * Toast with action button
 */
export const WithAction = {
  render: () => (
    <div>
      <Toaster />
      <Button
        onClick={() =>
          toast('Event has been created', {
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        With Action
      </Button>
    </div>
  ),
};

/**
 * Promise toast for async operations
 */
export const PromiseToast = {
  render: () => {
    const handlePromise = () => {
      const promise = () =>
        new Promise<{ name: string }>((resolve) =>
          setTimeout(() => resolve({ name: 'Sonner' }), 2000)
        );

      toast.promise(promise, {
        loading: 'Loading...',
        success: (data) => {
          return `${data.name} toast has been added`;
        },
        error: 'Error',
      });
    };

    return (
      <div>
        <Toaster />
        <Button onClick={handlePromise}>Show Promise Toast</Button>
      </div>
    );
  },
};

/**
 * Multiple toasts
 */
export const Multiple = {
  render: () => {
    const showMultiple = () => {
      toast('First notification');
      setTimeout(() => toast.success('Second notification'), 500);
      setTimeout(() => toast.error('Third notification'), 1000);
    };

    return (
      <div>
        <Toaster />
        <Button onClick={showMultiple}>Show Multiple Toasts</Button>
      </div>
    );
  },
};

/**
 * Custom position
 */
export const Position = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toaster position="top-left" />
      <Button onClick={() => toast('Top Left')}>Top Left</Button>
      <Button onClick={() => toast('Top Center')}>Top Center</Button>
      <Button onClick={() => toast('Top Right')}>Top Right</Button>
      <Button onClick={() => toast('Bottom Left')}>Bottom Left</Button>
      <Button onClick={() => toast('Bottom Center')}>Bottom Center</Button>
      <Button onClick={() => toast('Bottom Right')}>Bottom Right</Button>
    </div>
  ),
};

/**
 * Custom duration
 */
export const Duration = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toaster />
      <Button onClick={() => toast('Short (1s)', { duration: 1000 })}>
        Short Duration
      </Button>
      <Button onClick={() => toast('Default (4s)')}>Default Duration</Button>
      <Button onClick={() => toast('Long (10s)', { duration: 10000 })}>
        Long Duration
      </Button>
      <Button onClick={() => toast('Infinite', { duration: Infinity })}>
        Infinite Duration
      </Button>
    </div>
  ),
};
