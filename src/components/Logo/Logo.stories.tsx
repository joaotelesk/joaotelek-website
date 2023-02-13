// Components
import { Logo, LogoProps } from "./Logo";

// Utilities
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Logo",
  component: Logo,
  args: {
    size: 40,
    className: "text-white-400 font-bold text-md",
  },
} as Meta<LogoProps>;

export const Default: StoryObj<LogoProps> = {};
