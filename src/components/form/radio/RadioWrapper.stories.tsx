import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RadioWrapper } from './RadioWrapper';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'form/radio',
  component: RadioWrapper,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    backgrounds: {
        default: 'light',
        values: [
            { name: 'light', value: '#fefefe' },
            { name: 'workPanel', value: '#840000' },
        ],
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof RadioWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    selected: false,
    name: "storybookDemo",
    value: "option1",
    onChange: () => console.log("change!"),
    children: <span></span>,
  },
};

function RadioWithHooks(){
  const [selected, setSelected] = useState("option1");

  function onChange(selectionID : string){
    setSelected(selectionID);
  }

  const radioOptions = [
    { display: "Option 1", value: "option1" }, 
    { display: "Option 2", value: "option2" }, 
  ];

  const radioName = "storybookDemoRadio";

  return <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem"}}>
    { radioOptions.map(option => 
        <RadioWrapper key={`${radioName}_${option.value}`}
            selected = { selected === option.value }
            name = { radioName }
            value = { option.value }
            onChange = { onChange }
        >
            <span>{ option.display }</span>
        </RadioWrapper>
    )}
    </div>

}

export const Functional: Story = {
  args: {
    ...Default.args
  },
  render: () => <RadioWithHooks />
}

export const Checked: Story = {
    args: {
      ...Default.args,
      selected: true,
    },
};

export const CheckedHover: Story = {
  args: {
    ...Checked.args,
  },
  parameters: {
    pseudo: { hover: true }
  }
};

export const CheckedFocus: Story = {
  args: {
    ...Checked.args,
  },
  parameters: {
    pseudo: { focus: true }
  }
};

export const CheckedActive: Story = {
  args: {
    ...Checked.args,
  },
  parameters: {
      pseudo: { active: true }
  }
};

export const Unchecked: Story = {
  args: {
    ...Default.args,
    selected: false,
  },
};

export const UncheckedHover: Story = {
  args: {
    ...Unchecked.args,
  },
  parameters: {
    pseudo: { hover: true }
  }
};

export const UncheckedFocus: Story = {
  args: {
    ...Unchecked.args,
  },
  parameters: {
    pseudo: { focus: true }
  }
};

export const UncheckedActive: Story = {
  args: {
    ...Unchecked.args,
  },
  parameters: {
      pseudo: { active: true }
  }
};