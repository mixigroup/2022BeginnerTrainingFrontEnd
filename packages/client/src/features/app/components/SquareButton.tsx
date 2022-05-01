import type { ButtonHTMLAttributes, CSSProperties, VFC } from "react";
import {
  breakpointAttributes,
  breakpointsStyle,
  css,
  theme,
} from "../../../lib/style";
import type { BreakPoint } from "../../../type";

const BREAKPOINT_KEY = "size";

export type SquareButtonProps = {
  type: NonNullable<ButtonHTMLAttributes<HTMLButtonElement>["type"]>;
  disabled: boolean;
  breakpoint: {
    [BREAKPOINT_KEY]: BreakPoint<"default" | "small">;
  };
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export const SquareButton: VFC<SquareButtonProps> = ({
  children,
  breakpoint,
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
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

const smallButtonStyle: CSSProperties = {
  width: "56px",
  height: "56px",
};

const buttonStyle = css({
  margin: 0,
  padding: 0,
  border: "none",
  appearance: "none",
  cursor: "pointer",
  width: "70px",
  height: "70px",
  borderRadius: theme(({ radii }) => radii.radius1),
  boxShadow: theme(({ shadows }) => shadows.elevationMid),
  backgroundColor: theme(({ colors }) => colors.backgroundBase),
  transition: "filter 0.2s ease",
  "&:hover": {
    filter: "contrast(90%)",
  },
  "&:disabled": {
    cursor: "not-allowed",
    filter: "contrast(50%)",
  },
  ...breakpointsStyle({
    key: BREAKPOINT_KEY,
    style: {
      small: smallButtonStyle,
    },
  }),
});
