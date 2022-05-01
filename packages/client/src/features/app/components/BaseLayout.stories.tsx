import type { Story } from "@ladle/react";
import type { BaseLayoutProps } from "./BaseLayout";
import { BaseLayout } from "./BaseLayout";

const Component: Story<BaseLayoutProps> = (args) => {
  return (
    <BaseLayout {...args}>
      <div>コンテンツ</div>
    </BaseLayout>
  );
};

export const Base = Component.bind({});
Base.args = {
  breakpoints: {
    layout: {
      lg: "horizontal",
      md: "vertical",
      sm: "vertical",
    },
  },
};
