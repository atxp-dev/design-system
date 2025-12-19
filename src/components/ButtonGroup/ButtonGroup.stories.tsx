import type { Meta } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '@/components/Button';
import { Icon, Plus, ChevronDown, ExternalLink, Phone } from '@/components/Icon';

/**
 * A container for grouping multiple buttons together with consistent spacing.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=4720-4795
 */
const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=4720-4795&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>;

export default meta;

export const Horizontal = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="sm">
        Cancel
      </Button>
      <Button size="sm">Save</Button>
    </ButtonGroup>
  ),
};

export const Vertical = {
  render: () => (
    <ButtonGroup orientation="vertical" className="w-full">
      <Button size="sm" className="w-full">
        Action
      </Button>
      <Button variant="outline" size="sm" className="w-full">
        Cancel
      </Button>
    </ButtonGroup>
  ),
};

export const WithIcons = {
  render: () => (
    <ButtonGroup>
      <Button size="sm">
        <Icon icon={Plus} size={20} />
        Add
        <Icon icon={ChevronDown} size={20} />
      </Button>
    </ButtonGroup>
  ),
};

export const MultipleActions = {
  render: () => (
    <ButtonGroup>
      <Button variant="secondary" size="sm">
        <Icon icon={ExternalLink} size={20} />
        Go to portal
      </Button>
      <Button variant="outline" size="sm">
        <Icon icon={Phone} size={20} />
        Call support: 1-888-178-0987
      </Button>
    </ButtonGroup>
  ),
};

export const DialogActions = {
  render: () => (
    <ButtonGroup className="justify-end">
      <Button variant="outline" size="sm">
        Discard changes
      </Button>
      <Button size="sm">Save</Button>
    </ButtonGroup>
  ),
};

export const ManyButtons = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="sm">
        First
      </Button>
      <Button variant="outline" size="sm">
        Second
      </Button>
      <Button variant="outline" size="sm">
        Third
      </Button>
      <Button size="sm">Primary Action</Button>
    </ButtonGroup>
  ),
};
