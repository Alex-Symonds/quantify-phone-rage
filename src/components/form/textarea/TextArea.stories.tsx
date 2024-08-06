import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

import styles from "../../../components/storybookStyles.module.scss";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'form/textarea',
  component: TextArea,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    handleChange: (e) => console.log("change!"),
    id: "id_storybookTextArea",
    value: "Inputted text",
  },
};

export const Long: Story = {
  args: {
    handleChange: (e) => console.log("change!"),
    id: "id_storybookTextArea",
    value: "Inputted text that's very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very long.",
  },
};

export const Error: Story = {
    args: {
        ...Default.args,
        hasError: true,
    },
  };