import type { CSSProperties, FC, FormEvent } from "react";
import { useCallback, useState } from "react";
import {
  breakpointAttributes,
  breakpointsStyle,
  css,
  theme,
} from "../../../lib/style";
import type { BreakPoint } from "../../../type";
import { Icon } from "../../app/components/Icon";
import { SquareButton } from "../../app/components/SquareButton";
import { TextInput } from "../../app/components/TextInput";

const BREAKPOINT_KEY = "size";

type SearchCommunityFormProps = {
  onClickSearch: (keyword: string) => void;
  breakpoint: {
    [BREAKPOINT_KEY]: BreakPoint<"default" | "small">;
  };
};

const breakpoints = {
  textInput: {
    default: "default",
    small: "small",
  },
  squarebutton: {
    default: "default",
    small: "small",
  },
} as const;

export const SearchCommunityForm: FC<SearchCommunityFormProps> = ({
  onClickSearch,
  breakpoint,
}) => {
  const [keyword, setKeyword] = useState("");
  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onClickSearch(keyword);
    },
    [keyword, onClickSearch]
  );

  return (
    <form
      className={formStyle()}
      onSubmit={onSubmit}
      {...breakpointAttributes({
        key: BREAKPOINT_KEY,
        breakpoints: breakpoint[BREAKPOINT_KEY],
      })}
    >
      <TextInput
        placeholder="Search"
        onChange={(event) => setKeyword(event.target.value)}
        breakpoint={{
          size: {
            lg: breakpoints.textInput[breakpoint[BREAKPOINT_KEY].lg],
            md: breakpoints.textInput[breakpoint[BREAKPOINT_KEY].md],
            sm: breakpoints.textInput[breakpoint[BREAKPOINT_KEY].sm],
          },
        }}
      />
      <SquareButton
        type="submit"
        disabled={false}
        breakpoint={{
          size: {
            lg: breakpoints.squarebutton[breakpoint[BREAKPOINT_KEY].lg],
            md: breakpoints.squarebutton[breakpoint[BREAKPOINT_KEY].md],
            sm: breakpoints.squarebutton[breakpoint[BREAKPOINT_KEY].sm],
          },
        }}
      >
        <Icon icon="search" variant="light" size="sm" />
      </SquareButton>
    </form>
  );
};

const smallFormStyle: CSSProperties = {
  columnGap: theme(({ space }) => space[2]),
};

const formStyle = css({
  display: "grid",
  gridTemplateColumns: "1fr auto",
  columnGap: theme(({ space }) => space[4]),
  ...breakpointsStyle({
    key: BREAKPOINT_KEY,
    style: {
      small: smallFormStyle,
    },
  }),
});
