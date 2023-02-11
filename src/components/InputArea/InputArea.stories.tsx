// Components
import { InputArea, InputAreaProps } from "./InputArea";

// Utilities
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/InputArea",
  component: InputArea,
  args: {
    
    value: "seu nome",
  },
} as Meta<InputAreaProps>;

export const Default: StoryObj<InputAreaProps> = {};
