import type { Meta, StoryObj } from '@storybook/react';
import { ReasonToRage } from './ReasonToRage';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'emphasisBox/reasonToRage',
  component: ReasonToRage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ReasonToRage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultReasonToRage: Story = {
  args: {
    level: 2,
    children: <p>Messages are <b>asynchronous</b>, defeating the purpose of a call.</p>
  },
};