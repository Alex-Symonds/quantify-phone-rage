import type { Meta, StoryObj } from '@storybook/react';
import { BadgeNumberInCircle } from './BadgeNumberInCircle';

import styles from "@/components/storybookStyles.module.scss";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'badges/number',
  component: BadgeNumberInCircle,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof BadgeNumberInCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NumberBadge: Story = {
  args: {
    number: 1,
  },
};

export const NumberBadgeOver10: Story = {
    args: {
      number: 17,
    },
};

export const NumberBadgeOver100: Story = {
    args: {
      number: 107,
    },
};
  

export const NumberBadgeOver1K: Story = {
    args: {
        number: 1001,
    },
};

export const NumberBadgeOver10K: Story = {
    args: {
        number: 10001,
    },
};

export const NumberBadgeOver100K: Story = {
    args: {
        number: 100001,
    },
};

export const NumberBadgeOver1M: Story = {
    args: {
        number: 100000001,
    },
};

export const NumberBadgeCustomSize: Story = {
    args: {
        number: 4,
        customSize: true,
        stylesIn: [styles.testCustomNumberBadgeSize]
    },
};