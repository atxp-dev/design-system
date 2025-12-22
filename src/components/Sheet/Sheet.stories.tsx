import type { Meta } from '@storybook/react';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from './Sheet';
import { Button } from '../Button';

/**
 * Extends Dialog to display content that complements the main content of the screen.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2774-707
 */
const meta = {
  title: 'Components/Sheet',
  component: Sheet,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2774-707&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet>;

export default meta;

const FromRightStory = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Sheet (Right)</Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>
              This is a sheet that slides in from the right side of the screen.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p className="text-sm text-foreground">
              Sheet content goes here. This is the main area where you can add
              forms, lists, or any other content.
            </p>
          </div>
          <SheetFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Save Changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

/**
 * Default sheet sliding in from the right side
 */
export const FromRight = {
  render: () => <FromRightStory />,
};

const FromLeftStory = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Sheet (Left)</Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>
              Slide-in navigation from the left side
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-sm text-foreground hover:underline">
                Home
              </a>
              <a href="#" className="text-sm text-foreground hover:underline">
                About
              </a>
              <a href="#" className="text-sm text-foreground hover:underline">
                Services
              </a>
              <a href="#" className="text-sm text-foreground hover:underline">
                Contact
              </a>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

/**
 * Sheet sliding in from the left side
 */
export const FromLeft = {
  render: () => <FromLeftStory />,
};

const FromTopStory = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Sheet (Top)</Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="top" className="h-[300px]">
          <SheetHeader>
            <SheetTitle>Notification Bar</SheetTitle>
            <SheetDescription>
              A sheet that slides down from the top
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p className="text-sm text-foreground">
              This layout works well for notifications, banners, or quick actions.
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

/**
 * Sheet sliding in from the top
 */
export const FromTop = {
  render: () => <FromTopStory />,
};

const FromBottomStory = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Sheet (Bottom)</Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="bottom" className="h-[400px]">
          <SheetHeader>
            <SheetTitle>Bottom Sheet</SheetTitle>
            <SheetDescription>
              Commonly used on mobile for action sheets
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <div className="flex flex-col gap-2">
              <button className="rounded-md border border-border bg-background p-3 text-sm hover:bg-accent">
                Option 1
              </button>
              <button className="rounded-md border border-border bg-background p-3 text-sm hover:bg-accent">
                Option 2
              </button>
              <button className="rounded-md border border-border bg-background p-3 text-sm hover:bg-accent">
                Option 3
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

/**
 * Sheet sliding in from the bottom
 */
export const FromBottom = {
  render: () => <FromBottomStory />,
};

const WithFormStory = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Add Task</Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Add Task</SheetTitle>
            <SheetDescription>
              Create a new task for your project
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="task-name" className="text-sm font-medium">
                Task Name
              </label>
              <input
                id="task-name"
                type="text"
                className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Enter task name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <textarea
                id="description"
                rows={4}
                className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Enter task description"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="priority" className="text-sm font-medium">
                Priority
              </label>
              <select
                id="priority"
                className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>
          <SheetFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Create Task</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

/**
 * Sheet with form (matches Figma example)
 */
export const WithForm = {
  render: () => <WithFormStory />,
};

const WithScrollableContentStory = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Long Content</Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Terms and Conditions</SheetTitle>
            <SheetDescription>
              Please read our terms carefully
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="mb-4">
                <h3 className="mb-2 text-sm font-semibold">
                  Section {i + 1}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
              </div>
            ))}
          </div>
          <SheetFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Decline
            </Button>
            <Button onClick={() => setOpen(false)}>Accept</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

/**
 * Sheet with long scrollable content
 */
export const WithScrollableContent = {
  render: () => <WithScrollableContentStory />,
};

const WithoutFooterStory = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>View Details</Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Product Details</SheetTitle>
            <SheetDescription>
              View detailed information about this product
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <div className="space-y-4">
              <div>
                <h4 className="mb-1 text-sm font-medium">Name</h4>
                <p className="text-sm text-muted-foreground">
                  Premium Widget Pro
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-medium">Price</h4>
                <p className="text-sm text-muted-foreground">$99.99</p>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-medium">Description</h4>
                <p className="text-sm text-muted-foreground">
                  A high-quality widget designed for professional use. Features
                  include advanced customization, durable materials, and
                  lifetime warranty.
                </p>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-medium">Availability</h4>
                <p className="text-sm text-success">In Stock</p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

/**
 * Sheet without footer
 */
export const WithoutFooter = {
  render: () => <WithoutFooterStory />,
};

const MultipleSheetsStory = () => {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  return (
    <div className="flex items-center justify-center gap-4 p-8">
      <Button onClick={() => setLeftOpen(true)}>Open Left Sheet</Button>
      <Button onClick={() => setRightOpen(true)}>Open Right Sheet</Button>

      <Sheet open={leftOpen} onOpenChange={setLeftOpen}>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Left Panel</SheetTitle>
            <SheetDescription>Navigation and filters</SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p className="text-sm text-foreground">
              This sheet contains navigation options and filters.
            </p>
          </div>
        </SheetContent>
      </Sheet>

      <Sheet open={rightOpen} onOpenChange={setRightOpen}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Right Panel</SheetTitle>
            <SheetDescription>Details and actions</SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p className="text-sm text-foreground">
              This sheet contains detailed information and actions.
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

/**
 * Multiple sheets demonstration
 */
export const MultipleSheets = {
  render: () => <MultipleSheetsStory />,
};
