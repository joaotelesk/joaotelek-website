// Components
import { Input, InputProps } from "./Input";

// Utilities
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Input",
  component: Input,
  args: {
    placeholder: "seu nome",
    value: "name",
  },
} as Meta<InputProps>;

export const Default: StoryObj<InputProps> = {};
