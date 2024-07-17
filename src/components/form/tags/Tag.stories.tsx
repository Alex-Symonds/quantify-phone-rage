import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'form/tag',
  component: Tag,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    backgrounds: {
        default: 'light',
        values: [
            { name: 'light', value: '#f2e8e8' },
            { name: 'readDetailsPanel', value: '#dfd5d5' },
        ],
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultTag: Story = {
  args: {
    label: "rubbish",
  },
};

export const Primary: Story = {
    args: {
      label: "rubbish",
      theme: "primary",
    },
};

export const Removable: Story = {
    args: {
        label: "rubbish",
        removeTag: () => console.log("remove clicked")
    },
};

export const PrimaryRemoveable: Story = {
    args: {
        ...Removable.args,
        theme: "primary",
    },
};