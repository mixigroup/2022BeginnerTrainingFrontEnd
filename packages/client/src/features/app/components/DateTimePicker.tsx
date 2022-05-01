import type { FC, InputHTMLAttributes } from "react";
import { css, theme } from "../../../lib/style";

type DateTimePicker = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "className"
>;

export const DateTimePicker: FC<DateTimePicker> = ({ ...dateTimeProps }) => {
  return (
    <input {...dateTimeProps} type="datetime-local" className={inputStyle()} />
  );
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
});
