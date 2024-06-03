import type { Meta, StoryObj } from '@storybook/react';
import { HeadingPlain } from './Plain';

import styles from "../../../components/storybookStyles.module.scss";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'typography/headings/plain',
  component: HeadingPlain,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof HeadingPlain>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SubsectionHeading: Story = {
  args: {
    level : 2,
    purpose : 'subsection',
    title : 'Subsection on a Page',
  },
};

export const SubsectionHeadingWithCustomStyles: Story = {
    args: {
      level : 2,
      purpose : 'subsection',
      title : 'Subsection on a Page',
      stylesInMain : [styles.testGreenText],
    },
  };

export const SubsectionHeadingWithSubtitle: Story = {
    args: {
      level : 2,
      purpose : 'subsection',
      title : 'Subsection on a Page',
      subtitle : 'Subtitle under a subsection',
    },
  };

export const SubsectionHeadingWithSubtitleCustomColour: Story = {
    args: {
      level : 2,
      purpose : 'subsection',
      title : 'Subsection on a Page',
      stylesInMain : [styles.testGreenText],
      subtitle : 'Subtitle under a subsection',
      stylesInSubtitle :  [styles.testBlueText],
    },
  };

export const DetailsBoxHeading: Story = {
    args: {
      level : 3,
      purpose : 'detailsBox',
      title : 'Details Box',
    },
};