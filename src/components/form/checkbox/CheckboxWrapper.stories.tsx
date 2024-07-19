import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CheckboxWrapper } from './CheckboxWrapper';
import { BadgeContact } from '@/components/badges/contact/BadgeContact';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'form/checkbox',
  component: CheckboxWrapper,
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
} satisfies Meta<typeof CheckboxWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    checked: false,
    name: "storybookDemo",
    value: "option1",
    onChange: () => console.log("change!"),
    children: <span>Option 1</span>,
  },
};

function CheckedWithHooks(){
  const [isChecked, setIsChecked] = useState(false);

  function onChange(){
    setIsChecked(prev => !prev);
  }

  return <CheckboxWrapper
            checked={isChecked}
            name="storybookDemo"
            value="option1"
            onChange={onChange}
          >
            Option 1
          </CheckboxWrapper>

}

export const Functional: Story = {
  args: {
    ...Default.args
  },
  render: () => <CheckedWithHooks />
}

export const Checked: Story = {
    args: {
      ...Default.args,
      checked: true,
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
    checked: false,
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

export const Indeterminate: Story = {
  args: {
    ...Default.args,
    indeterminate: true,
  },
};

export const OnDarkChecked: Story = {
  args: {
    ...Default.args,
    isOnDark: true,
    checked: true,
  },
  parameters: {
    backgrounds: { default: 'workPanel' },
  },
};


export const OnDarkCheckedHover: Story = {
  args: {
    ...OnDarkChecked.args,
  },
  parameters: {
    ...OnDarkChecked.parameters,
    pseudo: { hover: true }
  }
};

export const OnDarkCheckedFocus: Story = {
  args: {
    ...OnDarkChecked.args,
  },
  parameters: {
    ...OnDarkChecked.parameters,
    pseudo: { focus: true }
  }
};

export const OnDarkCheckedActive: Story = {
  args: {
    ...OnDarkChecked.args,
  },
  parameters: {
    ...OnDarkChecked.parameters,
      pseudo: { active: true }
  }
};

export const OnDarkIndeterminate: Story = {
  args: {
    ...Default.args,
    isOnDark: true,
    indeterminate: true,
  },
  parameters: {
    ...OnDarkChecked.parameters,
  },
};

export const OnDarkUnchecked: Story = {
  args: {
    ...Default.args,
    isOnDark: true,
    checked: false,
  },
  parameters: {
    ...OnDarkChecked.parameters,
  },
};

export const OnDarkUncheckedHover: Story = {
  args: {
    ...OnDarkUnchecked.args,
  },
  parameters: {
    ...OnDarkUnchecked.parameters,
    pseudo: { hover: true }
  }
};

export const OnDarkUncheckedActive: Story = {
  args: {
    ...OnDarkUnchecked.args,
  },
  parameters: {
    ...OnDarkUnchecked.parameters,
    pseudo: { active: true }
  }
};

export const UserCheckbox: Story = {
  args: {
    ...Default.args,
    checked: true,
    children: <BadgeContact name="Jane Doe" wantCard={true} />
  },
};