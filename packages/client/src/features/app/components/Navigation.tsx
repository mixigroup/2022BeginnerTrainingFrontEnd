import type { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";
import {
  breakpointAttributes,
  breakpointsStyle,
  css,
  theme,
} from "../../../lib/style";
import type { BreakPoint } from "../../../type";
import { useTheme } from "../modules/themeHooks";
import { Heading } from "./Heading";
import { Icon } from "./Icon";

const BREAKPOINT_KEY = "layouts";

type NavigationProps = {
  variant: "light" | "dark";
  breakpoints: {
    [BREAKPOINT_KEY]: BreakPoint<"vertical" | "horizontal">;
  };
};

export const Navigation: FC<NavigationProps> = ({ variant, breakpoints }) => {
  const [, setTheme] = useTheme();

  return (
    <nav
      className={containerStyle()}
      data-variant={variant}
      {...breakpointAttributes({
        key: BREAKPOINT_KEY,
        breakpoints: breakpoints[BREAKPOINT_KEY],
      })}
    >
      <Link to="/">
        <Heading
          tag="h1"
          variant={variant}
          breakpoint={{
            size: {
              lg: "default",
              md: "default",
              sm: "small",
            },
          }}
        >
          コミュニティ
        </Heading>
      </Link>

      <ToggleThemeButton
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
        variant={variant}
      />
    </nav>
  );
};

const horizontalContainerStyle: CSSProperties = {
  width: "100%",
  minHeight: 0,
  flexFlow: "row",
  padding: theme(({ space }) => space[2]),
};

const containerStyle = css({
  margin: 0,
  width: "290px",
  height: "100%",
  minHeight: "320px",
  padding: `${theme(({ space }) => space[5])} ${theme(
    ({ space }) => space[3]
  )}`,
  boxSizing: "border-box",
  display: "flex",
  flexFlow: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  boxShadow: theme(({ shadows }) => shadows.elevationHigh),
  backgroundColor: theme(({ colors }) => colors.backgroundSub),
  '&[data-variant="dark"]': {
    backgroundColor: theme(({ colors }) => colors.backgroundSubDark),
  },
  ...breakpointsStyle({
    key: BREAKPOINT_KEY,
    style: {
      horizontal: horizontalContainerStyle,
    },
  }),
});

type ToggleThemeButtonProps = {
  onClick: () => void;
  variant: "light" | "dark";
};

const ToggleThemeButton: FC<ToggleThemeButtonProps> = ({
  onClick,
  variant,
}) => {
  return (
    <button
      type="button"
      className={themeButtonStyle()}
      onClick={onClick}
      data-variant={variant}
    >
      <Icon
        icon={variant === "light" ? "moon" : "sun"}
        variant={variant}
        size="lg"
      />
    </button>
  );
};

const themeButtonStyle = css({
  margin: 0,
  padding: 0,
  border: "none",
  appearance: "none",
  cursor: "pointer",
  backgroundColor: "transparent",
  svg: {
    fontSize: theme(({ fontSizes }) => fontSizes[4]),
  },
});
