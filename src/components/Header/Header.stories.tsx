// Components
import { Header, HeaderProps } from "./Header";

// Utilities
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Header",
  component: Header,
  args: {},
} as Meta<HeaderProps>;

export const Default: StoryObj<HeaderProps> = {};
