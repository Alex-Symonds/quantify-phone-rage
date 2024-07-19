import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'form/button',
  component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultButton: Story = {
  args: {
    onClick: () => console.log("click")
  },
};

export const Primary: Story = {
    args: {
      ...DefaultButton.args,
      formatting: "primary",
    },
};

export const PrimaryHover: Story = {
    args: {
        ...Primary.args,
    },
    parameters: {
        pseudo: { hover: true }
    }
};

export const PrimaryFocus: Story = {
    args: {
        ...Primary.args,
    },
    parameters: {
        pseudo: { focus: true }
    }
};

export const PrimaryActive: Story = {
    args: {
        ...Primary.args,
    },
    parameters: {
        pseudo: { active: true }
    }
};


export const Secondary: Story = {
    args: {
        ...DefaultButton.args,
        formatting: "secondary",
    }
}

export const SecondaryHover: Story = {
    args: {
        ...Secondary.args,
    },
    parameters: {
        pseudo: { hover: true }
    }
};

export const SecondaryFocus: Story = {
    args: {
        ...Secondary.args,
    },
    parameters: {
        pseudo: { focus: true }
    }
};

export const SecondaryActive: Story = {
    args: {
        ...Secondary.args,
    },
    parameters: {
        pseudo: { active: true }
    }
};

export const Subtle: Story = {
    args: {
        ...DefaultButton.args,
        formatting: "subtle",
    }
}

export const SubtleHover: Story = {
    args: {
        ...Subtle.args,
    },
    parameters: {
        pseudo: { hover: true }
    }
};

export const SubtleFocus: Story = {
    args: {
        ...Subtle.args,
    },
    parameters: {
        pseudo: { focus: true }
    }
};

export const SubtleActive: Story = {
    args: {
        ...Subtle.args,
    },
    parameters: {
        pseudo: { active: true }
    }
};

export const Large: Story = {
    args: {
        ...DefaultButton.args,
        size: "large",
    }
}

export const Medium: Story = {
    args: {
        ...DefaultButton.args,
        size: "medium",
    }
}

export const Tiny: Story = {
    args: {
        ...DefaultButton.args,
        size: "tiny",
    }
}

export const OnDark: Story = {
    args: {
        ...DefaultButton.args,
        isOnDark: true,
    },
    parameters: {
        backgrounds: { default: 'primary' },
    },
}

export const OnDarkSecondary: Story = {
    args: {
        ...DefaultButton.args,
        isOnDark: true,
        formatting: "secondary",
    },
    parameters: {
        backgrounds: { default: 'primary' },
    },
}

export const OnDarkSubtle: Story = {
    args: {
        ...DefaultButton.args,
        isOnDark: true,
        formatting: "subtle",
    },
    parameters: {
        backgrounds: { default: 'primary' },
    },
}

export const TextAndIconPrimary: Story = {
    args: {
        ...DefaultButton.args,
        formatting: "primary",
        iconID: "contact",
        label: "add victim",
    },
}

export const TextAndIconSubtleTiny: Story = {
    args: {
        ...DefaultButton.args,
        formatting: "subtle",
        iconID: "bin",
        label: "delete",
        size: "tiny",
    },
}

export const IconOnlyPrimary: Story = {
    args: {
        ...DefaultButton.args,
        formatting: "primary",
        iconID: "plus",
        size: "medium",
        srOnly: "add something",
    },
}

export const IconOnlySecondary: Story = {
    args: {
        ...DefaultButton.args,
        formatting: "secondary",
        iconID: "plus",
        size: "medium",
        srOnly: "add something",
    },
}

export const IconOnlySecondaryTiny: Story = {
    args: {
        ...DefaultButton.args,
        formatting: "secondary",
        iconID: "plus",
        size: "tiny",
        srOnly: "add something",
    },
}