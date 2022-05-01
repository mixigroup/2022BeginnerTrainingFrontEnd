import type { FC, LegacyRef, TextareaHTMLAttributes } from "react";
import { css, theme } from "../../../lib/style";

type TextareaProps = { ref?: LegacyRef<HTMLTextAreaElement> } & Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "className"
>;

export const Textarea: FC<TextareaProps> = ({ ...textAreaProps }) => {
  return <textarea {...textAreaProps} className={textareaStyle()} />;
};

const textareaStyle = css({
  width: "100%",
  border: "none",
  background: theme(({ colors }) => colors.backgroundBase),
  boxShadow: theme(({ shadows }) => shadows.elevationMid),
  borderRadius: theme(({ radii }) => radii.radius1),
  padding: theme(({ space }) => space[2]),
  color: theme(({ colors }) => colors.text),
  fontSize: theme(({ fontSizes }) => fontSizes[2]),
  fontFamily: theme(({ fonts }) => fonts.base),
  boxSizing: "border-box",
  resize: "vertical",
});
