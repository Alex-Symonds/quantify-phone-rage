import type { Meta, StoryObj } from '@storybook/react';
import { HeadingDisplay } from './Display';

import styles from "../../../components/storybookStyles.module.scss";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'typography/headings/display',
  component: HeadingDisplay,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof HeadingDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MainPageHeading: Story = {
  args: {
    level : 2,
    purpose : 'main',
    title : 'Page of Rage',
  },
};

export const MainPageHeadingWithCustomStyles: Story = {
    args: {
      level : 2,
      purpose : 'main',
      title : 'Page of Rage',
      stylesInMain : [styles.testGreenText],
    },
  };

export const MainPageHeadingWithSubtitle: Story = {
    args: {
      level : 2,
      purpose : 'main',
      title : 'Page of Rage',
      subtitle : 'Feel the rage',
    },
  };

export const MainPageHeadingWithSubtitleCustomStyles: Story = {
    args: {
      level : 2,
      purpose : 'main',
      title : 'Page of Rage',
      stylesInMain : [styles.testGreenText],
      subtitle : 'Feel the rage',
      stylesInSubtitle :  [styles.testBlueText],
    },
  };

export const SidePanelHeading: Story = {
    args: {
      level : 3,
      purpose : 'panel',
      title : 'Panel of Rage',
    },
};

export const SidePanelHeadingWithSubtitle: Story = {
    args: {
      level : 3,
      purpose : 'panel',
      title : 'Panel of Rage',
      subtitle : 'A snarky comment'
    },
};

export const FormHeading: Story = {
    args: {
      level : 4,
      purpose : 'form',
      title : 'Form of Rage',
    },
};
