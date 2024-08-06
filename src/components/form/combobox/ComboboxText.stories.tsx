import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { ComboboxText } from './ComboboxText';
// import { OptionPlain } from '../options/OptionPlain';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'form/combobox/text',
  component: ComboboxText,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    backgrounds: {
        default: 'light',
        values: [
            { name: 'primary', value: '#840000' },
        ],
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ComboboxText>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    options: [
          "Option A", "Option B", "Option C", "Option D", "Option E", "Option F", "Option G",
          "Option H", "Option I", "Option J", "Option K", "Option L", "Option M"
    ],
    value: "Text that is being input",
    handleChangeToInput: () => console.log("changed"),
    onOptionPick: (_) => console.log("selected"),
  },
};

export const ObjectOptions: Story = {
  args: {
    ...Default.args,
    options: [
          { optionId: "option_a", displayText: "Option A" }, 
          { optionId: "option_b", displayText: "Option B"}, 
          { optionId: "option_c", displayText: "Option C"}
    ],
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    hasError: true,
  }
}

function ComboboxWithHooks(){
  const [value, setValue] = useState("");

  const options = [
    { optionId: "option_a", displayText: "Option A" }, 
    { optionId: "option_b", displayText: "Option B"}, 
    { optionId: "option_c", displayText: "Option C"},
    { optionId: "option_d", displayText: "Option D"},
    { optionId: "option_e", displayText: "Option E"},
    { optionId: "option_f", displayText: "Option F"},
    { optionId: "option_g", displayText: "Option G"},
    { optionId: "option_h", displayText: "Option H"},
    { optionId: "option_i", displayText: "Option I"},
  ];

  function handleChange(newValue : string){
    setValue(newValue);
  }

  function onOptionPick(pickedValue : string){
    if(options !== undefined && options.length > 0){
      if(options.every(option => typeof option === "string")){
        setValue(pickedValue);
      }
      else if(options.every(option => "optionId" in option)){
        const idx = options.findIndex(option => option.optionId === pickedValue);
        if(idx > -1){
          setValue(options[idx].displayText);
        }
      }
    }
  }

  function filterOptions(){
    if(options !== undefined && options.length > 0){
      if(options.every(option => typeof option === "string")){
        return options.filter((option : string) => option.includes(value));
      }
      else if(options.every(option => "optionId" in option)){
        return options.filter((option : any) => option.displayText.includes(value));
      }
    }
    return options;
  }

  return <ComboboxText
            handleChangeToInput = { handleChange }
            options = { filterOptions() }
            onOptionPick = { onOptionPick }
            showNumResults = { true }
            value = { value }
          />
}

export const Functional: Story = {
    args: {
      ...Default.args,
    },
    render: () => <ComboboxWithHooks />
}

export const Open: Story = {
  args: {
    ...Default.args,
    optionsVisibleOnInit: true,
  },
};






// children: <>
// <OptionPlain displayText="Option A" value="A" />
// <OptionPlain displayText="Option B" value="B" />
// <OptionPlain displayText="Option C" value="C" />
// </>,