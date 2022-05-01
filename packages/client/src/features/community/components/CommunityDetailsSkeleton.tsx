import type { FC } from "react";
import { css, keyframes, theme } from "../../../lib/style";

export const CommunityDetailsSkeleton: FC = () => {
  return <progress className={skeletonStyle()} />;
};

const LIGHTGRAY_RGB = "210, 210, 210";
const CARD_PADDING = "24px";

const SKELETON_OBJ_SIZE = {
  card: {
    height: "244px",
  },
  label: {
    width: "70px",
    height: "16px",
  },
  time: {
    width: "150px",
    height: "16px",
  },
  desc: {
    width: `calc(100% - ${CARD_PADDING} * 2)`,
    height: "20px",
  },
  title: {
    width: "100px",
    height: "20px",
  },
  membership: {
    width: "60px",
    height: "16px",
  },
} as const;

const SKELETON_VER = {
  card: `linear-gradient(rgba(${LIGHTGRAY_RGB}, 1) ${SKELETON_OBJ_SIZE.card.height}, transparent 0)`,
  label: `linear-gradient(#FFF ${SKELETON_OBJ_SIZE.label.height}, transparent 0)`,
  time: `linear-gradient(#FFF ${SKELETON_OBJ_SIZE.time.height}, transparent 0)`,
  desc: `linear-gradient(#FFF ${SKELETON_OBJ_SIZE.desc.height}, transparent 0)`,
  title: `linear-gradient(#FFF ${SKELETON_OBJ_SIZE.title.height}, transparent 0)`,
  membership: `linear-gradient(#FFF ${SKELETON_OBJ_SIZE.membership.height}, transparent 0)`,
} as const;

const SKELETON_POSITION = {
  label: `calc(100% - ${CARD_PADDING} - ${SKELETON_OBJ_SIZE.time.width} - 30px) ${CARD_PADDING}`,
  time: `calc(100% - ${CARD_PADDING}) ${CARD_PADDING}`,
  desc1: `${CARD_PADDING} 65px`,
  desc2: `${CARD_PADDING} 100px`,
  title: `${CARD_PADDING} 170px`,
  membership: `${CARD_PADDING} 205px`,
} as const;

const BLUR_WIDTH = "200px";
const BLUR_SIZE = `${BLUR_WIDTH} ${SKELETON_OBJ_SIZE.card.height}` as const;

const loading = keyframes({
  to: {
    backgroundPosition: `
      350% 0,
      ${SKELETON_POSITION.label},
      ${SKELETON_POSITION.time},
      ${SKELETON_POSITION.desc1},
      ${SKELETON_POSITION.desc2},
      ${SKELETON_POSITION.title},
      ${SKELETON_POSITION.membership},
      0 0
    `,
  },
});

const skeletonStyle = css({
  width: "100%",
  height: SKELETON_OBJ_SIZE.card.height,
  backgroundColor: "#aaa",
  borderRadius: theme(({ radii }) => radii.radius1),
  boxShadow: theme(({ shadows }) => shadows.elevationLow),
  overflow: "hidden",
  position: "relative",
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
        rgba(${LIGHTGRAY_RGB}, 0) 0,
        rgba(${LIGHTGRAY_RGB}, 0.8) 50%,
        rgba(${LIGHTGRAY_RGB}, 0) 100%
      ),
      ${SKELETON_VER.label},
      ${SKELETON_VER.time},
      ${SKELETON_VER.desc},
      ${SKELETON_VER.desc},
      ${SKELETON_VER.title},
      ${SKELETON_VER.membership},
      ${SKELETON_VER.card}
    `,
    backgroundSize: `
      ${BLUR_SIZE},
      ${SKELETON_OBJ_SIZE.label.width} ${SKELETON_OBJ_SIZE.label.height},
      ${SKELETON_OBJ_SIZE.time.width} ${SKELETON_OBJ_SIZE.time.height},
      ${SKELETON_OBJ_SIZE.desc.width} ${SKELETON_OBJ_SIZE.desc.height},
      ${SKELETON_OBJ_SIZE.desc.width} ${SKELETON_OBJ_SIZE.desc.height},
      ${SKELETON_OBJ_SIZE.title.width} ${SKELETON_OBJ_SIZE.title.height},
      ${SKELETON_OBJ_SIZE.membership.width} ${SKELETON_OBJ_SIZE.membership.height},
      100% 100%
    `,
    backgroundPosition: `
      -150% 0,
      ${SKELETON_POSITION.label},
      ${SKELETON_POSITION.time},
      ${SKELETON_POSITION.desc1},
      ${SKELETON_POSITION.desc2},
      ${SKELETON_POSITION.title},
      ${SKELETON_POSITION.membership},
      0 0
    `,
    backgroundRepeat: "no-repeat",
    animation: `${loading} 2s infinite`,
  },
});
