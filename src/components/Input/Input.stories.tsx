// Components
import { Input, InputProps } from "./Input";

// Utilities
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Input",
  component: Input,
  args: {
    placeholder: "Seu nome",
  },
} as Meta<InputProps>;

export const Default: StoryObj<InputProps> = {};
