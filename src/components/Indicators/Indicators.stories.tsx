import type { Meta, StoryObj } from '@storybook/react';
import { IndicatorDot, IndicatorCircle } from './Indicators';

/**
 * Status indicators for visualizing completion, priority, or state.
 *
 * Based on the Figma design:
 * https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4?node-id=4717-4109
 */
const meta = {
  title: 'Components/Indicators',
  component: IndicatorDot,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/nadcKNlrnZUHbbLwm9GdK4/C-C-Design-System---Components?node-id=4717-4109&m=dev',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IndicatorDot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DotHigh: Story = {
  render: () => <IndicatorDot status="high" />,
};

export const DotMedium: Story = {
  render: () => <IndicatorDot status="medium" />,
};

export const DotLow: Story = {
  render: () => <IndicatorDot status="low" />,
};

export const AllDots: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <IndicatorDot status="high" />
        <span className="text-sm">High</span>
      </div>
      <div className="flex items-center gap-2">
        <IndicatorDot status="medium" />
        <span className="text-sm">Medium</span>
      </div>
      <div className="flex items-center gap-2">
        <IndicatorDot status="low" />
        <span className="text-sm">Low</span>
      </div>
    </div>
  ),
};

export const CircleComplete: Story = {
  render: () => <IndicatorCircle status="complete" />,
};

export const CirclePartial: Story = {
  render: () => <IndicatorCircle status="partial" />,
};

export const CircleMinimal: Story = {
  render: () => <IndicatorCircle status="minimal" />,
};

export const AllCircles: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <IndicatorCircle status="complete" />
        <span className="text-sm">Complete</span>
      </div>
      <div className="flex items-center gap-2">
        <IndicatorCircle status="partial" />
        <span className="text-sm">Partial</span>
      </div>
      <div className="flex items-center gap-2">
        <IndicatorCircle status="minimal" />
        <span className="text-sm">Minimal</span>
      </div>
    </div>
  ),
};

export const InTable: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="p-3 text-left text-sm font-medium text-muted-foreground">
              Name
            </th>
            <th className="p-3 text-left text-sm font-medium text-muted-foreground">
              Status
            </th>
            <th className="p-3 text-left text-sm font-medium text-muted-foreground">
              Completion
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border">
            <td className="p-3 text-sm">Jerome Bell</td>
            <td className="p-3">
              <IndicatorDot status="high" />
            </td>
            <td className="p-3">
              <div className="flex items-center gap-2">
                <IndicatorCircle status="partial" />
                <span className="text-sm">33%</span>
              </div>
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="p-3 text-sm">Cameron Williamson</td>
            <td className="p-3">
              <IndicatorDot status="medium" />
            </td>
            <td className="p-3">
              <div className="flex items-center gap-2">
                <IndicatorCircle status="partial" />
                <span className="text-sm">50%</span>
              </div>
            </td>
          </tr>
          <tr className="border-b border-border">
            <td className="p-3 text-sm">Brooklyn Simmons</td>
            <td className="p-3">
              <IndicatorDot status="low" />
            </td>
            <td className="p-3">
              <div className="flex items-center gap-2">
                <IndicatorCircle status="complete" />
                <span className="text-sm">100%</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};
