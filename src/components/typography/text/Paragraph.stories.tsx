import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from './Paragraph';

import styles from "../../../components/storybookStyles.module.scss";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'typography/text/paragraph',
  component: Paragraph,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultParagraph: Story = {
  args: {
    children: 'A paragraph of text goes here.'
  },
};

export const MediumParagraph: Story = {
    args: {
      size: 'medium',
      children: 'A paragraph of text goes here.'
    },
  };

export const SmallParagraph: Story = {
    args: {
      size: 'small',
      children: 'A paragraph of text goes here.'
    },
  };