import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

import styles from "../../../components/storybookStyles.module.scss";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'form/input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    handleChange: (e) => console.log("change!"),
    value: "Inputted text",
  },
};

export const LongInput: Story = {
    args: {
        ...Default.args,
      value: "Inputted text which is very, very, very, very, very, very, very, very, very, very, very, very, very long.",
    },
  };

export const Error: Story = {
    args: {
        ...Default.args,
        hasError: true,
    },
  };

export const Focus: Story = {
    args: {
        ...Default.args,
    },
    parameters: {
        pseudo: { focus: true }
    }
};

export const Active: Story = {
    args: {
        ...Default.args,
    },
    parameters: {
        pseudo: { active: true }
    }
};

export const Date: Story = {
  args: {
      ...Default.args,
      type: "date",
  },
};

export const Time: Story = {
  args: {
      ...Default.args,
      type: "time",
  },
};