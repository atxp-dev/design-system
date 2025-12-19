import type { Meta } from '@storybook/react';
import {
  Header,
  HeaderBreadcrumbs,
  HeaderContent,
  HeaderTitle,
  HeaderActions,
  HeaderDescription,
} from './Header';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/Breadcrumb';
import { Button } from '@/components/Button';
import { Icon, ExternalLink, Phone } from '@/components/Icon';

/**
 * A page header component that combines breadcrumbs, title, actions, and supporting text.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=4741-3916
 */
const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=4741-3916&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;

export const Default = {
  render: () => (
    <Header>
      <HeaderBreadcrumbs>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">All verifications</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Delta Dental</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </HeaderBreadcrumbs>
      <HeaderContent>
        <HeaderTitle>Delta Dental</HeaderTitle>
        <HeaderActions>
          <Button size="sm">
            <Icon icon={ExternalLink} size={20} />
            Go to portal
          </Button>
          <Button variant="secondary" size="sm">
            <Icon icon={Phone} size={20} />
            Call support: 1-888-178-0987
          </Button>
        </HeaderActions>
      </HeaderContent>
      <HeaderDescription>8 patients require verification</HeaderDescription>
    </Header>
  ),
};

export const WithoutActions = {
  render: () => (
    <Header>
      <HeaderBreadcrumbs>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Project Details</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </HeaderBreadcrumbs>
      <HeaderContent>
        <HeaderTitle>Project Details</HeaderTitle>
      </HeaderContent>
      <HeaderDescription>
        View and manage all project information
      </HeaderDescription>
    </Header>
  ),
};

export const WithSingleAction = {
  render: () => (
    <Header>
      <HeaderBreadcrumbs>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Settings</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </HeaderBreadcrumbs>
      <HeaderContent>
        <HeaderTitle>Account Settings</HeaderTitle>
        <HeaderActions>
          <Button size="sm">Save Changes</Button>
        </HeaderActions>
      </HeaderContent>
      <HeaderDescription>Manage your account preferences</HeaderDescription>
    </Header>
  ),
};

export const Simple = {
  render: () => (
    <Header>
      <HeaderContent>
        <HeaderTitle>Simple Header</HeaderTitle>
      </HeaderContent>
    </Header>
  ),
};

export const NoBreadcrumbs = {
  render: () => (
    <Header>
      <HeaderContent>
        <HeaderTitle>Dashboard</HeaderTitle>
        <HeaderActions>
          <Button variant="outline" size="sm">
            Export
          </Button>
          <Button size="sm">Create New</Button>
        </HeaderActions>
      </HeaderContent>
      <HeaderDescription>
        Overview of all your projects and tasks
      </HeaderDescription>
    </Header>
  ),
};
