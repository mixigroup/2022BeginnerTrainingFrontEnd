import type { FC } from "react";
import { css, keyframes, theme } from "../../../lib/style";

type SquareSkelectonProps = {
  width: string;
  height: string;
};

export const SquareSkeleton: FC<SquareSkelectonProps> = ({ width, height }) => {
  return (
    <div
      className={skeletonStyle()}
      style={{
        width,
        height,
      }}
      role="progressbar"
    />
  );
};

const loading = keyframes({
  to: {
    backgroundPosition: "350% 0",
  },
});

const skeletonStyle = css({
  backgroundColor: theme(({ colors }) => colors.backgroundBase),
  "&:empty::after": {
    content: '""',
    display: "block",
    width: "100%",
    height: "100%",
    backgroundImage:
      "linear-gradient(90deg, rgba(150, 150, 150, 0) 0, rgba(150, 150, 150, .4) 50%, rgba(150, 150, 150, 0) 100%)",
    backgroundSize: "50% 100%",
    backgroundPosition: "-150% 0",
    backgroundRepeat: "no-repeat",
    animation: `${loading} 1.5s infinite`,
  },
});
