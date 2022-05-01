import type { FC } from "react";
import { css, keyframes } from "../../../lib/style";

type CircleSkelectonProps = {
  size: number;
};

export const CircleSkeleton: FC<CircleSkelectonProps> = ({ size }) => {
  return (
    <div
      className={skeletonStyle()}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      aria-label="progressbar"
    />
  );
};

const loading = keyframes({
  to: {
    backgroundPosition: "450% 0",
  },
});

const skeletonStyle = css({
  backgroundColor: "#FFF",
  borderRadius: "100vh",
  "&:empty::after": {
    content: '""',
    display: "block",
    width: "100%",
    height: "100%",
    borderRadius: "100vh",
    backgroundImage:
      "linear-gradient(90deg, rgba(150, 150, 150, 0) 0, rgba(150, 150, 150, .4) 50%, rgba(150, 150, 150, 0) 100%)",
    backgroundSize: "60% 100%",
    backgroundPosition: "-150% 0",
    backgroundRepeat: "no-repeat",
    animation: `${loading} 1.5s infinite`,
  },
});
