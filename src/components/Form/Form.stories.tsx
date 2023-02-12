// Components
import { Form, FormProps } from "./Form";

// Utilities
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Form",
  component: Form,

  args: {
    onSubmit: (values) => {
      console.log(values);
    },
  },
} as Meta<FormProps>;

export const Default: StoryObj<FormProps> = {};
