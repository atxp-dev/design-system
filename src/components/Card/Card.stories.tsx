import type { Meta } from '@storybook/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './Card';
import { Button } from '@/components/Button';

/**
 * Displays a card with header, content, and footer.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2778-1195
 */
const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2778-1195&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

export const Default = {
  render: () => (
    <Card className="w-[329px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-5 text-muted-foreground">Main Content</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">
          Action
        </Button>
        <Button size="sm">Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const AddTask = {
  render: () => (
    <Card className="w-[329px]">
      <CardHeader>
        <CardTitle>Add Task</CardTitle>
        <CardDescription>
          New tasks are added to the default category.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="task-name"
              className="text-sm font-medium leading-5 text-foreground"
            >
              Task Name
            </label>
            <input
              id="task-name"
              type="text"
              placeholder="Input Value"
              className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm leading-5 text-muted-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="assignee"
              className="text-sm font-medium leading-5 text-foreground"
            >
              Assignee
            </label>
            <select
              id="assignee"
              className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm leading-5 text-muted-foreground outline-none focus:ring-2 focus:ring-ring"
            >
              <option>Select someone</option>
            </select>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm">
          Reset
        </Button>
        <Button size="sm">Add</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple = {
  render: () => (
    <Card className="w-[329px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">
          Check your inbox for new notifications and updates.
        </div>
      </CardContent>
    </Card>
  ),
};
