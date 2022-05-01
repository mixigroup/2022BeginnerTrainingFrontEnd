import type { CSSProperties, FC } from "react";
import {
  breakpointAttributes,
  breakpointsStyle,
  css,
  keyframes,
  theme,
} from "../../../lib/style";
import type { BreakPoint } from "../../../type";

const BREAKPOINT_KEY = "layout";

type CommunitySummarySkeletonProps = {
  breakpoint: {
    [BREAKPOINT_KEY]: BreakPoint<"vertical" | "horizontal">;
  };
};

export const CommunitySummarySkeleton: FC<CommunitySummarySkeletonProps> = ({
  breakpoint,
}) => {
  return (
    <progress
      className={skeletonStyle()}
      {...breakpointAttributes({
        key: BREAKPOINT_KEY,
        breakpoints: breakpoint.layout,
      })}
    />
  );
};

const CARD_PADDING = "24px";
const CARD_PADDING_VERT = "16px";
const CARD_GAP = "44px";
const LIGHT_GRAY_RGB = "210, 210, 210";

const SKELETON_OBJ_SIZE = {
  card: {
    height: "240px",
  },
  sumbnail: {
    width: "130px",
  },
  title: {
    width: "30%",
    height: "30px",
  },
  label: {
    width: "20%",
    height: "16px",
  },
  desc: {
    width: "60%",
    height: "16px",
  },
  button: {
    width: "290px",
    height: "60px",
  },
} as const;

const SKELETON_OBJ_SIZE_VERT = {
  ...SKELETON_OBJ_SIZE,
  sumbnail: {
    width: "100%",
    height: "60px",
  },
  button: {
    width: "176px",
    height: "40px",
  },
} as const;

const SKELETON_VER = {
  card: `linear-gradient(rgba(${LIGHT_GRAY_RGB}, 1) ${SKELETON_OBJ_SIZE.card.height}, transparent 0)`,
  sumbnail: `linear-gradient(#FFF ${SKELETON_OBJ_SIZE.card.height}, transparent 0)`,
  title: `linear-gradient(#FFF ${SKELETON_OBJ_SIZE.title.height}, transparent 0)`,
  label: `linear-gradient(#FFF ${SKELETON_OBJ_SIZE.label.height}, transparent 0)`,
  desc: `linear-gradient(#FFF ${SKELETON_OBJ_SIZE.desc.height}, transparent 0)`,
  button: `linear-gradient(#FFF ${SKELETON_OBJ_SIZE.button.height}, transparent 0)`,
} as const;

const SKELETON_VERT_VER = {
  card: `linear-gradient(rgba(${LIGHT_GRAY_RGB}, 1) ${SKELETON_OBJ_SIZE_VERT.card.height}, transparent 0)`,
  sumbnail: `linear-gradient(#FFF ${SKELETON_OBJ_SIZE_VERT.sumbnail.height}, transparent 0)`,
  title: `linear-gradient(#FFF ${SKELETON_OBJ_SIZE_VERT.title.height}, transparent 0)`,
  label: `linear-gradient(#FFF ${SKELETON_OBJ_SIZE_VERT.label.height}, transparent 0)`,
  desc: `linear-gradient(#FFF ${SKELETON_OBJ_SIZE_VERT.desc.height}, transparent 0)`,
  button: `linear-gradient(#FFF ${SKELETON_OBJ_SIZE_VERT.button.height}, transparent 0)`,
} as const;

const SKELETON_POSITION = {
  sumbnail: "0 0",
  title: `calc(${CARD_GAP} + ${SKELETON_OBJ_SIZE.sumbnail.width}) ${CARD_PADDING}`,
  label: `calc(${CARD_GAP} + ${SKELETON_OBJ_SIZE.sumbnail.width}) 70px`,
  desc: `calc(${CARD_GAP} + ${SKELETON_OBJ_SIZE.sumbnail.width}) 100px`,
  button: `calc(100% - ${CARD_PADDING}) 160px`,
} as const;

const SKELETON_POSITION_VERT = {
  sumbnail: `0 0`,
  title: `${CARD_PADDING_VERT} calc(${SKELETON_OBJ_SIZE_VERT.sumbnail.height} + ${CARD_PADDING_VERT})`,
  label: `${CARD_PADDING_VERT} calc(${SKELETON_OBJ_SIZE_VERT.sumbnail.height} + ${CARD_PADDING_VERT} + 45px)`,
  desc: `${CARD_PADDING_VERT} calc(${SKELETON_OBJ_SIZE_VERT.sumbnail.height} + ${CARD_PADDING_VERT} + 70px)`,
  button: `calc(100% - ${CARD_PADDING}) calc(${SKELETON_OBJ_SIZE_VERT.card.height} - ${CARD_PADDING_VERT} - ${SKELETON_OBJ_SIZE_VERT.button.height})`,
} as const;

const BLUR_WIDTH = "200px";
const BLUR_SIZE = `${BLUR_WIDTH} ${SKELETON_OBJ_SIZE.card.height}`;

const loading = keyframes({
  to: {
    backgroundPosition: `
      350% 0,
      ${SKELETON_POSITION.sumbnail},
      ${SKELETON_POSITION.title},
      ${SKELETON_POSITION.label},
      ${SKELETON_POSITION.desc},
      ${SKELETON_POSITION.button},
      0 0
    `,
  },
});

const loadingVert = keyframes({
  to: {
    backgroundPosition: `
      350% 0,
      ${SKELETON_POSITION_VERT.sumbnail},
      ${SKELETON_POSITION_VERT.title},
      ${SKELETON_POSITION_VERT.label},
      ${SKELETON_POSITION_VERT.desc},
      ${SKELETON_POSITION_VERT.button},
      0 0
    `,
  },
});

const containerStyleVertical: CSSProperties | { [key: string]: CSSProperties } =
  {
    "&:empty::after": {
      backgroundImage: `
        linear-gradient(
          90deg,
          rgba(${LIGHT_GRAY_RGB}, 0) 0,
          rgba(${LIGHT_GRAY_RGB}, 0.8) 50%,
          rgba(${LIGHT_GRAY_RGB}, 0) 100%
        ),
        ${SKELETON_VERT_VER.sumbnail},
        ${SKELETON_VERT_VER.title},
        ${SKELETON_VERT_VER.label},
        ${SKELETON_VERT_VER.desc},
        ${SKELETON_VERT_VER.button},
        ${SKELETON_VERT_VER.card}
      `,
      backgroundSize: `
        ${BLUR_SIZE},
        ${SKELETON_OBJ_SIZE_VERT.sumbnail.width} ${SKELETON_OBJ_SIZE_VERT.card.height},
        ${SKELETON_OBJ_SIZE_VERT.title.width} ${SKELETON_OBJ_SIZE_VERT.title.height},
        ${SKELETON_OBJ_SIZE_VERT.label.width} ${SKELETON_OBJ_SIZE_VERT.label.height},
        ${SKELETON_OBJ_SIZE_VERT.desc.width} ${SKELETON_OBJ_SIZE_VERT.desc.height},
        ${SKELETON_OBJ_SIZE_VERT.button.width} ${SKELETON_OBJ_SIZE_VERT.button.height},
        100% 100%
      `,
      backgroundPosition: `
        -150% 0,
        ${SKELETON_POSITION_VERT.sumbnail},
        ${SKELETON_POSITION_VERT.title},
        ${SKELETON_POSITION_VERT.label},
        ${SKELETON_POSITION_VERT.desc},
        ${SKELETON_POSITION_VERT.button},
        0 0
      `,
      animation: `${loadingVert} 1.2s infinite`,
    },
  };

const skeletonStyle = css({
  width: "100%",
  height: "240px",
  backgroundColor: "#aaa",
  borderRadius: theme(({ radii }) => radii.radius1),
  boxShadow: theme(({ shadows }) => shadows.elevationLow),
  boxSizing: "border-box",
  overflow: "hidden",
  position: "relative",
  ...breakpointsStyle({
    key: BREAKPOINT_KEY,
    style: {
      vertical: containerStyleVertical,
    },
  }),
  "&:empty::after": {
    content: '""',
    display: "block",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    backgroundImage: `
      linear-gradient(
        90deg,
        rgba(${LIGHT_GRAY_RGB}, 0) 0,
        rgba(${LIGHT_GRAY_RGB}, 0.8) 50%,
        rgba(${LIGHT_GRAY_RGB}, 0) 100%
      ),
      ${SKELETON_VER.sumbnail},
      ${SKELETON_VER.title},
      ${SKELETON_VER.label},
      ${SKELETON_VER.desc},
      ${SKELETON_VER.button},
      ${SKELETON_VER.card}
    `,
    backgroundSize: `
      ${BLUR_SIZE},
      ${SKELETON_OBJ_SIZE.sumbnail.width} ${SKELETON_OBJ_SIZE.card.height},
      ${SKELETON_OBJ_SIZE.title.width} ${SKELETON_OBJ_SIZE.title.height},
      ${SKELETON_OBJ_SIZE.label.width} ${SKELETON_OBJ_SIZE.label.height},
      ${SKELETON_OBJ_SIZE.desc.width} ${SKELETON_OBJ_SIZE.desc.height},
      ${SKELETON_OBJ_SIZE.button.width} ${SKELETON_OBJ_SIZE.button.height},
      100% 100%
    `,
    backgroundPosition: `
      -150% 0,
      ${SKELETON_POSITION.sumbnail},
      ${SKELETON_POSITION.title},
      ${SKELETON_POSITION.label},
      ${SKELETON_POSITION.desc},
      ${SKELETON_POSITION.button},
      0 0
    `,
    backgroundRepeat: "no-repeat",
    animation: `${loading} 2s infinite`,
  },
});
