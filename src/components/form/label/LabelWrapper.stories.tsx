import type { Meta, StoryObj } from '@storybook/react';
import { LabelWrapper } from './LabelWrapper';

import styles from "../../../components/storybookStyles.module.scss";
import { Label } from './Label';
import { Input } from '../input/Input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'form/labelWrapper',
  component: LabelWrapper,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof LabelWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: <p></p>
  },
  render: (args) => <WithTextInput {...args} />
}

export const Left: Story = {
    args:{
        ...Default.args,
        labelPosition: "left",
    },
    render: (args) => <WithTextInput {...args} />
}

export const Right: Story = {
    args:{
        ...Default.args,
        labelPosition: "right",
    },
    render: (args) => <WithTextInput {...args} />
}

export const Above: Story = {
    args:{
        ...Default.args,
        labelPosition: "above",
    },
    render: (args) => <WithTextInput {...args} />
}


function WithTextInput(args){
    return <LabelWrapper {...args}>
        <Label
            htmlFor = { "id_input" }
        >
            Label
        </Label>
        <Input
            handleChange={() => console.log("Change!")}
            value = { "Input" }
        />
    </LabelWrapper>
}
