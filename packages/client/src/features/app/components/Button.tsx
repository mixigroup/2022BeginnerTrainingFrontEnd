import type { ButtonHTMLAttributes, CSSProperties, VFC } from "react";
import {
  breakpointAttributes,
  breakpointsStyle,
  css,
  theme,
} from "../../../lib/style";
import type { BreakPoint } from "../../../type";

const BREAKPOINT_KEY = "size";

export type ButtonProps = {
  variant: "primary" | "secondary";
  breakpoint: {
    [BREAKPOINT_KEY]: BreakPoint<"default" | "small">;
  };
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: VFC<ButtonProps> = ({
  variant,
  breakpoint,
  children,
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      data-variant={variant}
      className={buttonStyle()}
      {...breakpointAttributes({
        key: BREAKPOINT_KEY,
        breakpoints: breakpoint[BREAKPOINT_KEY],
      })}
    >
      {children}
    </button>
  );
};

const smallSizeStyle: CSSProperties = {
  width: "176px",
  height: "40px",
  fontSize: theme(({ fontSizes }) => fontSizes[0]),
};

const buttonStyle = css({
  width: "290px",
  height: "60px",
  margin: 0,
  padding: 0,
  border: "none",
  appearance: "none",
  cursor: "pointer",
  transition: "filter 0.2s ease",
  fontSize: theme(({ fontSizes }) => fontSizes[1]),
  boxShadow: theme(({ shadows }) => shadows.elevationLow),
  color: theme(({ colors }) => colors.button),
  fontFamily: theme(({ fonts }) => fonts.base),
  borderRadius: theme(({ radii }) => radii.radius1),
  background: theme(({ colors }) => colors.action),
  "&:hover": {
    filter: "contrast(130%)",
  },
  "&:disabled": {
    cursor: "not-allowed",
    filter: "contrast(50%)",
  },
  ...breakpointsStyle({
    key: BREAKPOINT_KEY,
    style: {
      small: smallSizeStyle,
    },
  }),
});
