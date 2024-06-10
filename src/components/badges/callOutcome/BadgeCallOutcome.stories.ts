import type { Meta, StoryObj } from '@storybook/react';
import { BadgeCallOutcome } from './BadgeCallOutcome';

import styles from "../../../components/storybookStyles.module.scss";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'badges/callOutcome',
  component: BadgeCallOutcome,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof BadgeCallOutcome>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NoAnswer: Story = {
  args: {
    status: 'noAnswer'
  },
};


export const ForwardedCall: Story = {
    args: {
        status: 'forwarded'
    },
};

  
export const AcceptedCall: Story = {
    args: {
      status: 'accepted'
    },
};

  
export const RejectedCall: Story = {
    args: {
      status: 'rejected'
    },
};

  
export const OutOfOffice: Story = {
    args: {
      status: 'out'
    },
};

  
export const CallError: Story = {
    args: {
      status: 'error'
    },
};
