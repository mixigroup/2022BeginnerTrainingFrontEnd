import type { Story } from "@ladle/react";
import { Icon } from "./Icon";
import type { SquareButtonProps } from "./SquareButton";
import { SquareButton } from "./SquareButton";

const Component: Story<SquareButtonProps> = (args) => {
  return (
    <SquareButton {...args}>
      <Icon icon="moon" variant="light" size="md" />
    </SquareButton>
  );
};

export const Base = Component.bind({});
Base.args = {
  type: "button",
  disabled: false,
  breakpoint: {
    size: {
      lg: "default",
      md: "default",
      sm: "small",
    },
  },
};
