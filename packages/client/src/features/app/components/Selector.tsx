import type { FC, SelectHTMLAttributes } from "react";
import { css, theme } from "../../../lib/style";

type SelectorProps = {
  options: { value: string; label: string }[];
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "className">;

export const Selector: FC<SelectorProps> = ({ options, ...selectorProps }) => {
  return (
    <div className={containerStyle()}>
      <select {...selectorProps} className={selectStyle()}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

const containerStyle = css({
  position: "relative",
  "&::after": {
    content: '">"',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "rotate(90deg)",
    color: theme(({ colors }) => colors.text),
    fontSize: theme(({ fontSizes }) => fontSizes[2]),
    fontFamily: theme(({ fonts }) => fonts.base),
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,
    pointerEvents: "none",
    width: "70px",
    height: "70px",
  },
});

const selectStyle = css({
  width: "100%",
  height: "70px",
  border: "none",
  borderRadius: theme(({ radii }) => radii.radius1),
  boxShadow: theme(({ shadows }) => shadows.elevationMid),
  padding: theme(({ space }) => space[3]),
  boxSizing: "border-box",
  fontSize: theme(({ fontSizes }) => fontSizes[2]),
  fontFamily: theme(({ fonts }) => fonts.base),
  color: theme(({ colors }) => colors.text),
  cursor: "pointer",
  appearance: "none",
});
