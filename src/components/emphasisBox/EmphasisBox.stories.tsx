import type { Meta, StoryObj } from '@storybook/react';
import { EmphasisBox } from './EmphasisBox';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'emphasisBox',
  component: EmphasisBox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof EmphasisBox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultEmphasisBox: Story = {
  args: {
    children: 'Content goes here.'
  },
};

export const LeftOnlyEmphasisBox: Story = {
    args: {
      borderOn: 'leftOnly',
      children: "If you don't pass in any styles, default padding is applied."
    },
};

export const BothEmphasisBox: Story = {
    args: {
      borderOn: 'both',
      children: <><p>Blah blah blah blah blah.</p><p>Blah blah blah blah blahblah.</p></>
    },
};

