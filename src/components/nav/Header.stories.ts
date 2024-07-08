import type { Meta, StoryObj } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { userEvent, within, fn } from '@storybook/test';

import { Header } from './Header';

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
        loggedInAs: "jane.doe@businessname.com"
    },
    parameters: {
        viewport: {
            defaultViewport: 'responsive',
        }
    }
}

export const DesktopLoggedOut: Story = {
    args: {
        loggedInAs: undefined
    },
    parameters: {
        viewport: {
            defaultViewport: 'responsive',
        }
    }  
};

export const MobileCollapsed: Story = {
    args: {
        loggedInAs: "jane.doe@businessname.com"
    },
    parameters: {
        viewport: {
            defaultViewport: 'iphone13',
        }
    }
};

export const MobileExpandedLoggedIn: Story = {
    args: {
        loggedInAs: "jane.doe@businessname.com"
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
        loggedInAs: undefined
    }
};