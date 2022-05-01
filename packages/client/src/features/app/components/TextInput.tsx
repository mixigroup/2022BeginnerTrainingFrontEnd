import type { CSSProperties, FC, InputHTMLAttributes } from "react";
import {
  breakpointAttributes,
  breakpointsStyle,
  css,
  theme,
} from "../../../lib/style";
import type { BreakPoint } from "../../../type";

const BREAKPOINT_KEY = "size";

type TextInputProps = {
  breakpoint: {
    [BREAKPOINT_KEY]: BreakPoint<"default" | "small">;
  };
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "type" | "children"
>;

export const TextInput: FC<TextInputProps> = ({
  breakpoint,
  ...inputProps
}) => {
  return (
    <input
      {...inputProps}
      type="text"
      className={inputStyle()}
      {...breakpointAttributes({
        key: BREAKPOINT_KEY,
        breakpoints: breakpoint[BREAKPOINT_KEY],
      })}
    />
  );
};

const smallInputStyle: CSSProperties = {
  height: "56px",
};

const inputStyle = css({
  width: "100%",
  height: "70px",
  padding: theme(({ space }) => space[1]),
  borderRadius: theme(({ radii }) => radii.radius1),
  backgroundColor: theme(({ colors }) => colors.backgroundBase),
  border: "none",
  boxSizing: "border-box",
  fontFamily: theme(({ fonts }) => fonts.base),
  color: theme(({ colors }) => colors.text),
  fontSize: theme(({ fontSizes }) => fontSizes[2]),
  boxShadow: theme(({ shadows }) => shadows.elevationMid),
  ...breakpointsStyle({
    key: BREAKPOINT_KEY,
    style: {
      small: smallInputStyle,
    },
  }),
});
