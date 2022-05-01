import type { CSSProperties, PropsWithChildren, VFC } from "react";
import type { LinkProps as RouterLinkProps } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import {
  breakpointAttributes,
  breakpointsStyle,
  css,
  theme,
} from "../../../lib/style";
import type { BreakPoint } from "../../../type";

const BREAKBOINT_KEY = "size";

export type LinkProps = {
  breakpoint: {
    [BREAKBOINT_KEY]: BreakPoint<"default" | "small">;
  };
} & PropsWithChildren<RouterLinkProps>;

export const Link: VFC<LinkProps> = ({
  children,
  breakpoint,
  ...linkProps
}) => {
  return (
    <RouterLink
      {...linkProps}
      className={linkStyle()}
      {...breakpointAttributes({
        key: BREAKBOINT_KEY,
        breakpoints: breakpoint[BREAKBOINT_KEY],
      })}
    >
      {children}
    </RouterLink>
  );
};

const smallSizeStyle: CSSProperties = {
  width: "176px",
  height: "40px",
  fontSize: theme(({ fontSizes }) => fontSizes[0]),
};

const linkStyle = css({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
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
  background: theme(({ colors }) => colors.link),
  "&:hover": {
    filter: "contrast(130%)",
  },
  ...breakpointsStyle({
    key: BREAKBOINT_KEY,
    style: {
      small: smallSizeStyle,
    },
  }),
});
