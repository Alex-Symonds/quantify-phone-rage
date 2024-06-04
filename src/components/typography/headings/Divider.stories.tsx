import type { Meta, StoryObj } from '@storybook/react';
import { HeadingDivider } from './Divider';

import styles from "../../../components/storybookStyles.module.scss";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'typography/headings/divider',
  component: HeadingDivider,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{minWidth:'20rem'}}>
        <Story />
      </div>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof HeadingDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SectionDivider: Story = {
  args: {
    level : 3,
    purpose : 'section',
    title : 'NEW SECTION',
  },
};

export const SectionDividerWithCustomStyles: Story = {
  args: {
    level : 3,
    purpose : 'subsection',
    title : 'NEW SECTION',
    stylesInMain : [styles.testBlueText],
  },
};

export const DetailsDivider: Story = {
    args: {
      level : 4,
      purpose : 'details',
      title : 'tags',
    },
  };
  
