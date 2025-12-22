import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { Textarea } from './Textarea';

/**
 * Displays a form textarea or a component that looks like a textarea.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2674-2219
 */
const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2674-2219&m=dev',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default textarea
 */
export const Default: Story = {
  args: {
    placeholder: 'Write your novel...',
    className: 'w-[340px]',
  },
};

/**
 * With value
 */
export const WithValue: Story = {
  args: {
    defaultValue: 'This is some example text that has been entered into the textarea.',
    className: 'w-[340px]',
  },
};

/**
 * Disabled
 */
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled textarea',
    disabled: true,
    className: 'w-[340px]',
  },
};

/**
 * With label
 */
export const WithLabel: Story = {
  render: () => (
    <div className="w-[340px] space-y-2">
      <label htmlFor="message" className="text-sm font-medium">
        Your message
      </label>
      <Textarea id="message" placeholder="Type your message here." />
    </div>
  ),
};

/**
 * With description
 */
export const WithDescription: Story = {
  render: () => (
    <div className="w-[340px] space-y-2">
      <label htmlFor="bio" className="text-sm font-medium">
        Bio
      </label>
      <Textarea id="bio" placeholder="Tell us about yourself" />
      <p className="text-xs text-muted-foreground">
        You can @mention other users and organizations.
      </p>
    </div>
  ),
};

/**
 * With character counter
 */
export const WithCounter: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    const maxLength = 200;
    return (
      <div className="w-[340px] space-y-2">
        <label htmlFor="description" className="text-sm font-medium">
          Description
        </label>
        <Textarea
          id="description"
          placeholder="Enter description"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength={maxLength}
        />
        <p className="text-xs text-muted-foreground text-right">
          {value.length}/{maxLength}
        </p>
      </div>
    );
  },
};

/**
 * Auto-growing
 */
export const AutoGrowing: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    React.useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }, [value]);

    return (
      <div className="w-[340px] space-y-2">
        <label htmlFor="notes" className="text-sm font-medium">
          Notes
        </label>
        <Textarea
          ref={textareaRef}
          id="notes"
          placeholder="Start typing and this textarea will grow..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="min-h-[82px] resize-none overflow-hidden"
        />
      </div>
    );
  },
};

/**
 * Form example
 */
export const Form: Story = {
  render: () => (
    <div className="w-[400px] space-y-6 rounded-lg border border-border p-6">
      <div>
        <h3 className="text-lg font-semibold">Contact Us</h3>
        <p className="text-sm text-muted-foreground">
          Send us a message and we'll get back to you.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            placeholder="Your name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Tell us how we can help..."
            className="min-h-[120px]"
          />
        </div>

        <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-hover">
          Send Message
        </button>
      </div>
    </div>
  ),
};
