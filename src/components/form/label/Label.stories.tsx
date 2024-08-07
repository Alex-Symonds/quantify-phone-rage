import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

import styles from "../../../components/storybookStyles.module.scss";
import { Input } from '../input/Input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'form/label',
  component: Label,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    htmlFor: "id_formInput",
    children: "Label",
  }
}

export const Subtle: Story = {
    args: {
      ...Default.args,
      level: "subtle",
      children: "Subtle label",
    }
  }