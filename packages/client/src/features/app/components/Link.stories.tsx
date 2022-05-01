import type { Story } from "@ladle/react";
import type { LinkProps } from "./Link";
import { Link } from "./Link";

const Component: Story<LinkProps> = (args) => {
  return <Link {...args}>リンク</Link>;
};

export const Base = Component.bind({});
Base.args = {
  to: "#",
  breakpoint: {
    size: {
      lg: "default",
      md: "default",
      sm: "small",
    },
  },
};
