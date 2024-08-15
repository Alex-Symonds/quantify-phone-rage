import type { Meta, StoryObj } from '@storybook/react';
import { RadioDecoration } from './RadioDecoration';

import styles from "../../../components/storybookStyles.module.scss";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'form/radio/decoration',
  component: RadioDecoration,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof RadioDecoration>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NotSelected: Story = {
    args: {
      selected : false,
    },
};

export const Selected: Story = {
  args: {
    selected : true,
  },
};


