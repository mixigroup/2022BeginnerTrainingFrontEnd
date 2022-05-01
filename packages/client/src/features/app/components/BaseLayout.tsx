import type { CSSProperties, ReactNode, VFC } from "react";
import {
  breakpointAttributes,
  breakpointsStyle,
  css,
  theme,
} from "../../../lib/style";
import type { BreakPoint } from "../../../type";
import { useTheme } from "../modules/themeHooks";
import { Navigation } from "./Navigation";

const BREAKPOINT_KEY = "layout";

const breakpoint = {
  navigation: {
    horizontal: "vertical",
    vertical: "horizontal",
  },
} as const;

export type BaseLayoutProps = {
  children?: ReactNode;
  breakpoints: {
    [BREAKPOINT_KEY]: BreakPoint<"horizontal" | "vertical">;
  };
};

export const BaseLayout: VFC<BaseLayoutProps> = ({ children, breakpoints }) => {
  const [theme] = useTheme();

  return (
    <div className={containerStyle()}>
      <header
        className={headerStyle()}
        {...breakpointAttributes({
          key: BREAKPOINT_KEY,
          breakpoints: breakpoints[BREAKPOINT_KEY],
        })}
      >
        <Navigation
          variant={theme}
          breakpoints={{
            layouts: {
              lg: breakpoint.navigation[breakpoints[BREAKPOINT_KEY].lg],
              md: breakpoint.navigation[breakpoints[BREAKPOINT_KEY].md],
              sm: breakpoint.navigation[breakpoints[BREAKPOINT_KEY].sm],
            },
          }}
        />
      </header>
      <main
        className={mainStyle()}
        {...breakpointAttributes({
          key: BREAKPOINT_KEY,
          breakpoints: breakpoints[BREAKPOINT_KEY],
        })}
      >
        {children}
      </main>
    </div>
  );
};

const containerStyle = css({
  height: "100%",
});

const verticalHeaderStyle: CSSProperties = {
  position: "initial",
  height: "auto",
};

const headerStyle = css({
  position: "fixed",
  top: 0,
  height: "100%",
  ...breakpointsStyle({
    key: BREAKPOINT_KEY,
    style: {
      vertical: verticalHeaderStyle,
    },
  }),
});

const verticalMainStyle: CSSProperties = {
  marginLeft: 0,
  padding: theme(({ space }) => space[1]),
};

const mainStyle = css({
  padding: `${theme(({ space }) => space[4])} ${theme(
    ({ space }) => space[6]
  )}`,
  boxSizing: "border-box",
  marginLeft: "290px",
  ...breakpointsStyle({
    key: BREAKPOINT_KEY,
    style: {
      vertical: verticalMainStyle,
    },
  }),
});
