import type { Meta, StoryObj } from '@storybook/react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './Select';

/**
 * Displays a list of options for the user to pick from—triggered by a button.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2695-404
 */
const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2695-404&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic select with simple options (no groups or separators)
 */
export const Basic: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Select option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  ),
};

/**
 * Select with grouped options and separators between groups
 */
export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Select option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

/**
 * Select with multiple groups and labels
 */
export const MultipleGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Tropical</SelectLabel>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
          <SelectItem value="mango">Mango</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Berries</SelectLabel>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="strawberry">Strawberry</SelectItem>
          <SelectItem value="raspberry">Raspberry</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Citrus</SelectLabel>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="lemon">Lemon</SelectItem>
          <SelectItem value="grapefruit">Grapefruit</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

/**
 * Select with default selected value
 */
export const WithDefaultValue: Story = {
  render: () => (
    <Select defaultValue="apple">
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Select option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

/**
 * Disabled select
 */
export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Select option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
      </SelectContent>
    </Select>
  ),
};

/**
 * Select with some disabled options
 */
export const DisabledOptions: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Select option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana" disabled>
            Banana (Out of stock)
          </SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes" disabled>
            Grapes (Out of stock)
          </SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

/**
 * Select with scrollable content
 */
export const Scrollable: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
          <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
          <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Europe</SelectLabel>
          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value="cet">Central European Time (CET)</SelectItem>
          <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
          <SelectItem value="west">
            Western European Summer Time (WEST)
          </SelectItem>
          <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
          <SelectItem value="eat">Eastern Africa Time (EAT)</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
          <SelectItem value="ist">India Standard Time (IST)</SelectItem>
          <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
          <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
          <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

/**
 * Form example with label and multiple selects
 */
export const FormExample: Story = {
  parameters: {
    layout: 'centered',
  },
  render: () => (
    <div className="space-y-12 w-[300px] py-8">
      <div className="space-y-2">
        <label htmlFor="category" className="text-sm font-medium">
          Category
        </label>
        <Select>
          <SelectTrigger id="category">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="clothing">Clothing</SelectItem>
              <SelectItem value="books">Books</SelectItem>
              <SelectItem value="home">Home & Garden</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <label htmlFor="priority" className="text-sm font-medium">
          Priority
        </label>
        <Select defaultValue="medium">
          <SelectTrigger id="priority">
            <SelectValue placeholder="Select priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Low</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="urgent">Urgent</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
};
