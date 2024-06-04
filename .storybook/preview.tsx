import type { Preview } from "@storybook/react";
import { Roboto_Flex } from 'next/font/google';

import '../src/app/globals.css';

const roboto = Roboto_Flex({
  subsets: ['latin']
})

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={`${roboto.className}`}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

