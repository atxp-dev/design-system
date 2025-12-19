import type { Meta, StoryObj } from '@storybook/react';
import { InputGroup, InputGroupLabel, InputGroupHelpText } from './InputGroup';
import { Input } from '@/components/Input';

/**
 * Groups form inputs with labels and optional help text.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=2818-1785
 */
const meta = {
  title: 'Components/InputGroup',
  component: InputGroup,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=2818-1785&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <InputGroup className="w-[340px]">
      <InputGroupLabel htmlFor="email">Label Text</InputGroupLabel>
      <Input id="email" placeholder="Input Value" />
    </InputGroup>
  ),
};

export const WithHelpText: Story = {
  render: () => (
    <InputGroup className="w-[340px]">
      <InputGroupLabel htmlFor="email">Email</InputGroupLabel>
      <Input id="email" type="email" placeholder="Enter your email" />
      <InputGroupHelpText>We&apos;ll never share your email with anyone.</InputGroupHelpText>
    </InputGroup>
  ),
};

export const MultipleFields: Story = {
  render: () => (
    <div className="flex w-[340px] flex-col gap-4">
      <InputGroup>
        <InputGroupLabel htmlFor="username">Username</InputGroupLabel>
        <Input id="username" placeholder="Enter username" />
        <InputGroupHelpText>Choose a unique username.</InputGroupHelpText>
      </InputGroup>
      <InputGroup>
        <InputGroupLabel htmlFor="email">Email</InputGroupLabel>
        <Input id="email" type="email" placeholder="Enter email" />
        <InputGroupHelpText>We&apos;ll send a confirmation email.</InputGroupHelpText>
      </InputGroup>
      <InputGroup>
        <InputGroupLabel htmlFor="password">Password</InputGroupLabel>
        <Input id="password" type="password" placeholder="Enter password" />
        <InputGroupHelpText>
          Must be at least 8 characters long.
        </InputGroupHelpText>
      </InputGroup>
    </div>
  ),
};

export const WithTextarea: Story = {
  render: () => (
    <InputGroup className="w-full max-w-md">
      <InputGroupLabel htmlFor="bio">Bio</InputGroupLabel>
      <textarea
        id="bio"
        rows={4}
        placeholder="Tell us about yourself..."
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
      />
      <InputGroupHelpText>
        Brief description for your profile. Max 200 characters.
      </InputGroupHelpText>
    </InputGroup>
  ),
};

export const WithSelect: Story = {
  render: () => (
    <InputGroup className="w-[340px]">
      <InputGroupLabel htmlFor="country">Country</InputGroupLabel>
      <select
        id="country"
        className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
      >
        <option>Select country</option>
        <option>United States</option>
        <option>Canada</option>
        <option>United Kingdom</option>
        <option>Australia</option>
      </select>
      <InputGroupHelpText>Choose your country of residence.</InputGroupHelpText>
    </InputGroup>
  ),
};

export const Required: Story = {
  render: () => (
    <InputGroup className="w-[340px]">
      <InputGroupLabel htmlFor="email-required">
        Email <span className="text-destructive">*</span>
      </InputGroupLabel>
      <Input id="email-required" type="email" placeholder="Required field" required />
      <InputGroupHelpText>This field is required.</InputGroupHelpText>
    </InputGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <InputGroup className="w-[340px]">
      <InputGroupLabel htmlFor="disabled">Username</InputGroupLabel>
      <Input id="disabled" placeholder="Disabled input" disabled />
      <InputGroupHelpText>This field cannot be edited.</InputGroupHelpText>
    </InputGroup>
  ),
};
