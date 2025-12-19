import type { Meta } from '@storybook/react';
import { useState } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from './Drawer';
import { Button } from '@/components/Button';

/**
 * A window overlaid on either the primary window or another dialog window,
 * rendering the content underneath inert. Slides up from the bottom of the screen.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2786-829
 */
const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2786-829&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer>;

export default meta;

const DefaultStory = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>Drawer Description</DrawerDescription>
          </DrawerHeader>
          <div className="border-2 border-dashed border-border h-[157px]" />
          <DrawerFooter>
            <Button size="sm" onClick={() => setOpen(false)}>
              Action
            </Button>
            <Button variant="outline" size="sm" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export const Default = {
  render: () => <DefaultStory />,
};

const AddTaskStory = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Add Task</Button>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Add Task</DrawerTitle>
            <DrawerDescription>
              New tasks are added to the default category.
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-4 py-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="task-name" className="text-sm font-medium">
                Task Name
              </label>
              <input
                id="task-name"
                type="text"
                placeholder="Input Value"
                className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="assignee" className="text-sm font-medium">
                Assignee
              </label>
              <select
                id="assignee"
                className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm text-muted-foreground"
              >
                <option>Select someone</option>
              </select>
            </div>
          </div>
          <DrawerFooter>
            <Button size="sm" onClick={() => setOpen(false)}>
              Add
            </Button>
            <Button variant="outline" size="sm" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export const AddTask = {
  render: () => <AddTaskStory />,
};
