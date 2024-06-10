import type { Meta, StoryObj } from '@storybook/react';
import { BadgeContact } from './BadgeContact';

import styles from "../../../components/storybookStyles.module.scss";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'badges/contact',
  component: BadgeContact,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof BadgeContact>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const FullCard: Story = {
  args: {
    name: 'Jane Doe',
    role: 'Managing Director',
    wantCard: true
  },
};

export const NameCard: Story = {
    args: {
      name: 'Joe Bloggs',
      wantCard: true
    },
};

export const FullNoCard: Story = {
    args: {
      name: 'Jane Doe',
      role: 'Managing Director',
      wantCard: false
    },
};
  
export const NameNoCard: Story = {
      args: {
        name: 'Joe Bloggs',
        wantCard: false
      },
};

export const NameUnspecifiedCard: Story = {
    args: {
      name: 'Jemima Stagg',
    },
};