import type { Meta, StoryObj } from '@storybook/react';
import { BadgeContactWrapper, cssStatus } from './BadgeContactWrapper';

import styles from "../../../components/storybookStyles.module.scss";
import { BadgeMessage } from '../messages/BadgeMessage';
import { BadgeCallOutcome } from '../callOutcome/BadgeCallOutcome';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'badges/contactWrapper',
  component: BadgeContactWrapper,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    children: {
      options: ['MessageUnhandled', 'CallNoAnswer'],
      mapping: {
        MessageUnhandled: <BadgeMessage status = 'unhandled' stylesIn={[cssStatus]} />,
        CallAccepted: <BadgeCallOutcome status = 'accepted' stylesIn={[cssStatus]} />,
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof BadgeContactWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ContactWithUnhandledMessage: Story = {
    args: {
        name: "Jane Doe",
        role: "Managing Director",
        children: 'MessageUnhandled'
    }
};

export const ContactWithAcceptedCall: Story = {
  args: {
      name: "Joe Bloggs",
      role: "Dogsbody",
      children: 'CallAccepted'
  }
};
