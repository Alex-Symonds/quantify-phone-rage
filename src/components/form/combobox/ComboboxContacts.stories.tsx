import type { Meta, StoryObj } from '@storybook/react';
import { ComboboxContacts } from './ComboboxContacts';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'form/combobox/contacts',
  component: ComboboxContacts,
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
} satisfies Meta<typeof ComboboxContacts>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    options: [
        { optionId: "1", name: "Jane Doe", role: "Managing Director" },
        { optionId: "2", name: "Joe Bloggs", role: "Lackey" },
        { optionId: "3", name: "Jemima Stagg", role: "Marketing" },
        { optionId: "4", name: "Alice Aliceson", role: "Administrator" },
        { optionId: "5", name: "Bob Bobson", role: "Baker" },
        { optionId: "6", name: "Carol Carolson", role: "Courier" },
    ],
    value: "J",
    handleChangeToInput: () => console.log("changed"),
    onOptionPick: (_) => console.log("selected"),
  },
};

export const Open: Story = {
  args: {
    ...Default.args,
    options: [
      { optionId: "1", name: "Jane Doe", role: "Managing Director" },
      { optionId: "2", name: "Joe Bloggs", role: "Lackey" },
      { optionId: "3", name: "Jemima Stagg", role: "Marketing" },
      { optionId: "4", name: "Alice Aliceson", role: "Administrator" },
      { optionId: "5", name: "Bob Bobson", role: "Baker" },
      { optionId: "6", name: "Carol Carolson", role: "Courier" },
    ].filter(option => option.name.includes("J") || option.role.includes("J")),
    optionsVisibleOnInit: true
  },
};

function ComboboxWithHooks(){
    const [value, setValue] = useState("");
  
    const options = [
        { optionId: "1", name: "Jane Doe", role: "Managing Director" },
        { optionId: "2", name: "Joe Bloggs", role: "Lackey" },
        { optionId: "3", name: "Jemima Stagg", role: "Marketing" },
        { optionId: "4", name: "Alice Aliceson", role: "Administrator" },
        { optionId: "5", name: "Bob Bobson", role: "Baker" },
        { optionId: "6", name: "Carol Carolson", role: "Courier" },
    ];
  
    function handleChange(newValue : string){
      setValue(newValue);
    }
  
    function onOptionPick(optionId : string){
      if(options !== undefined && options.length > 0){
        if(options.every(option => "optionId" in option) && options.every(option => "name" in option)){
          const idx = options.findIndex(option => option.optionId === optionId);
          if(idx > -1){
            setValue(options[idx].name);
          }
        }
      }
    }
  
    function filterOptions(){
      if(options !== undefined && options.length > 0){
        if(options.every(option => "optionId" in option) 
            && options.every(option => "name" in option)
        ){
          return options.filter((option : any) => {
            const lowerName = option.name.toLowerCase();
            const lowerValue = value.toLowerCase();
            const lowerRole = option.role === undefined ? undefined : option.role.toLowerCase();

            return lowerName.includes(lowerValue) 
                || (lowerRole !== undefined && lowerRole.includes(lowerValue))
          });
        }
      }
      return options;
    }
  
    return <ComboboxContacts
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


