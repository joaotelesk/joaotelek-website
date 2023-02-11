// Components
import { CardImg, CardImgProps } from "./CardImg";

// Utilities
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/CardImg",
  component: CardImg,
  args: {},
  argTypes: {},
} as Meta<CardImgProps>;

export const Default: StoryObj<CardImgProps> = {
  args: {
    alt: "logo github",
    src: `/github-purple.svg`,
  },
};
export const Primary: StoryObj<CardImgProps> = {
  args: {
    alt: "logo github",
    src: `/github.svg`,
    title: "GitHub",
    size: 36,
  },
};
export const Secundary: StoryObj<CardImgProps> = {
  args: {
    alt: "logo github",
    src: `/github.svg`,
    title: "GitHub",
    size: 60,
    className: "pointer-events-none px-4",
  },
};
