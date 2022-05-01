import type { Story } from "@ladle/react";
import type { ButtonProps } from "./Button";
import { Button } from "./Button";

const Component: Story<ButtonProps> = (args) => {
  return <Button {...args}>コンテンツ</Button>;
};

export const Base = Component.bind({});
Base.args = {
  type: "button",
  variant: "primary",
  breakpoint: {
    size: {
      lg: "default",
      md: "default",
      sm: "small",
    },
  },
  disabled: false,
};
