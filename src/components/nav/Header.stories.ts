import type { Meta, StoryObj } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { userEvent, waitFor, within, expect, fn } from '@storybook/test';

import { Header } from './Header';

import styles from "../../../components/storybookStyles.module.scss";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'header',
  component: Header,
  args: {
    // 👇 Use `fn` to spy on the onSubmit arg
    // @ts-ignore (it doesn't like onSubmit being an arg for the Story but not the component)
    onSubmit: fn(),
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    viewport: {
        //👇 The viewports you want to use
        viewports: INITIAL_VIEWPORTS,
      },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DesktopLoggedIn: Story = {
    args: {
        isLoggedIn: true
    }   
}

export const DesktopLoggedOut: Story = {
    args: {
        isLoggedIn: false
    }    
};

export const MobileCollapsed: Story = {
    args: {
        isLoggedIn: true
    },
    parameters: {
        viewport: {
            defaultViewport: 'iphone13',
        }
    }
};

export const MobileExpandedLoggedIn: Story = {
    args: {
        isLoggedIn: true
    },
    parameters: {
        viewport: {
            defaultViewport: 'iphone13',
        }
    },
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement);

        await step('Click burger button', async () => {
            await userEvent.click(canvas.getByRole('button'));
        });
    }
};

export const MobileExpandedLoggedOut: Story = {
    ...MobileExpandedLoggedIn,
    args: {
        isLoggedIn: false
    }
};