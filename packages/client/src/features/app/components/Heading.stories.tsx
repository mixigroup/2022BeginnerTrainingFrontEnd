import type { Story } from "@ladle/react";
import type { HeadingProps } from "./Heading";
import { Heading } from "./Heading";

const Component: Story<HeadingProps> = (args) => {
  return <Heading {...args}>タイトル</Heading>;
};

export const h1 = Component.bind({});
h1.args = {
  tag: "h1",
  variant: "light",
};

export const h2 = Component.bind({});
h2.args = {
  tag: "h2",
  variant: "light",
};
