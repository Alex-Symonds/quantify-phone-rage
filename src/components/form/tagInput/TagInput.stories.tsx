import type { Meta, StoryObj } from '@storybook/react';
import { TagInput } from './TagInput';

import styles from "../../../components/storybookStyles.module.scss";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'form/tagInput',
  component: TagInput,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof TagInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    onOptionPick: (chosen : string) => console.log(`${chosen} picked`),
    handleChangeToInput: (newInput : string) => console.log(`${newInput} entered`),
    tagOptions: ["excellent", "existing", "excruciating"],
    selectedTags: [ "rubbish", "cold caller", "freight", "late >:|", "obnoxious" ],
    value: "ex",
  },
};

export const Editable: Story = {
  args: {
      ...Default.args,
      removeTag: (tagName : string) => console.log(`Removing tag ${tagName}`),
  }
}

export const Error: Story = {
    args: {
        ...Default.args,
        hasError: true,
    }
}