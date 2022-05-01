import type {
  CSSProperties,
  HTMLAttributes,
  PropsWithChildren,
  VFC,
} from "react";
import {
  breakpointAttributes,
  breakpointsStyle,
  css,
  theme,
} from "../../../lib/style";
import type { BreakPoint } from "../../../type";

const BREAKPOINT_KEY = "size";

export type HeadingProps = PropsWithChildren<
  {
    tag: "h1" | "h2" | "h3";
    variant: "light" | "dark";
    breakpoint: {
      [BREAKPOINT_KEY]: BreakPoint<"default" | "small">;
    };
  } & Omit<HTMLAttributes<HTMLHeadingElement>, "className">
>;

export const Heading: VFC<HeadingProps> = ({
  children,
  tag,
  variant,
  breakpoint,
  ...headingProps
}) => {
  switch (tag) {
    case "h1":
      return (
        <h1
          {...headingProps}
          className={h1Style()}
          data-variant={variant}
          {...breakpointAttributes({
            key: BREAKPOINT_KEY,
            breakpoints: breakpoint[BREAKPOINT_KEY],
          })}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 {...headingProps} className={h2Style()} data-variant={variant}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 {...headingProps} className={h3Style()} data-variant={variant}>
          {children}
        </h3>
      );
  }
};

const smallH1Style: CSSProperties = {
  fontSize: theme(({ fontSizes }) => fontSizes[3]),
};

const h1Style = css({
  margin: 0,
  color: theme(({ colors }) => colors.title),
  fontSize: theme(({ fontSizes }) => fontSizes[4]),
  fontFamily: theme(({ fonts }) => fonts.base),
  '&[data-variant="dark"]': {
    color: theme(({ colors }) => colors.titleDark),
  },
  ...breakpointsStyle({
    key: BREAKPOINT_KEY,
    style: {
      small: smallH1Style,
    },
  }),
});

const h2Style = css({
  margin: 0,
  color: theme(({ colors }) => colors.title),
  fontSize: theme(({ fontSizes }) => fontSizes[2]),
  fontFamily: theme(({ fonts }) => fonts.base),
  '&[data-variant="dark"]': {
    color: theme(({ colors }) => colors.titleDark),
  },
});

const h3Style = css({
  margin: 0,
  color: theme(({ colors }) => colors.title),
  fontSize: theme(({ fontSizes }) => fontSizes[1]),
  fontFamily: theme(({ fonts }) => fonts.base),
  '&[data-variant="dark"]': {
    color: theme(({ colors }) => colors.titleDark),
  },
});
