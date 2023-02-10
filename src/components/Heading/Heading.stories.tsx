// Components
import { Heading, HeadingProps } from "./Heading";

// Utilities
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Lorem ipsum",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};
export const Small: StoryObj<HeadingProps> = {
  args: {
    size: "sm",
  },
};
export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg",
  },
};
export const CustonComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Testando</h1>,
    size: "lg",
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
