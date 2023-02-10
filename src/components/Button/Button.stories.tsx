// Components
import { FileArrowDown } from "phosphor-react";
import { Button, ButtonProps } from "./Button";

// Utilities
import { Meta, StoryObj } from "@storybook/react";

const iconeProps = {
  size: 24,
};

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Submit",
  },
  argType: {},
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const CustonComponent: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <p>Currículo</p>
        <FileArrowDown {...iconeProps} />
      </>
    ),
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
    className: {
      table: {
        disable: true,
      },
    },
  },
};
