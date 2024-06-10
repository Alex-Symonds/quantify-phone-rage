import type { Meta, StoryObj } from '@storybook/react';
import { BadgeMessage } from './BadgeMessage';

import styles from "../../../components/storybookStyles.module.scss";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'badges/message',
  component: BadgeMessage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof BadgeMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const UnhandledMessage: Story = {
  args: {
    status: 'unhandled'
  },
};

export const PartiallyHandledMessage: Story = {
  args: {
    status: 'partial'
  },
};

export const HandledMessage: Story = {
  args: {
    status: 'handled'
  },
};

export const EmailedMessage: Story = {
  args: {
    status: 'handled',
    title: 'EMAILED'
  },
};


export const ShortUnhandledMessage: Story = {
  args: {
    status: 'unhandled',
    wantShort: true,
  },
};

export const ShortPartiallyHandledMessage: Story = {
  args: {
    status: 'partial',
    wantShort: true,
  },
};

export const ShortHandledMessage: Story = {
  args: {
    status: 'handled',
    wantShort: true,
  },
};

export const ShortEmailedMessage: Story = {
  args: {
    status: 'handled',
    title: 'EMAILED',
    wantShort: true,
  },
};