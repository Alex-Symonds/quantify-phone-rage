import type { Meta, StoryObj } from '@storybook/react';
import { Icon, ID_LIST } from './Icons';

import styles from "@/components/storybookStyles.module.scss";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'typography/icons',
  component: Icon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// @ts-ignore (It's complaining about missing args, but those are added dynamically in the map)
export const IconLibrary: Story = {
    render: () => {
        return  <div className={ styles.iconLibraryContainer }>
                  {
                    ID_LIST.map(iconID => {
                      return <Icon key={`${iconID}_inLib`} iconID={iconID} size={29} />
                    })
                  }
                </div>
    }
};
