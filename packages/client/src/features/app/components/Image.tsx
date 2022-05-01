import type { ImgHTMLAttributes, VFC } from "react";
import { useCallback, useState } from "react";
import { css } from "../../../lib/style";

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  scale: "contain" | "cover";
} & Omit<ImgHTMLAttributes<HTMLImageElement>, "className">;

export const Image: VFC<ImageProps> = ({ scale, ...imageProps }) => {
  const [loadend, setLoadend] = useState(false);
  const onLoad = useCallback(() => {
    setLoadend(true);
  }, []);

  return (
    <span className={imageWrapperStyle()} data-loadend={loadend}>
      <img
        {...imageProps}
        className={imageStyle()}
        data-scale={scale}
        data-loadend={loadend}
        onLoad={onLoad}
      />
    </span>
  );
};

const imageWrapperStyle = css({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "inline-block",
  "&::after": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    transition: "opacity .2s ease",
  },
  '&[data-loadend="true"]::after': {
    opacity: 0,
  },
});

const imageStyle = css({
  width: "100%",
  objectFit: "contain",
  opacity: 0,
  transition: "opacity .2s ease",
  position: "relative",
  zIndex: 1,
  '&[data-scale="cover"]': {
    objectFit: "cover",
  },
  '&[data-loadend="true"]': {
    opacity: 1,
  },
  "&::after": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    transition: "opacity .2s ease",
  },
  '&[data-loadend="true"]::after': {
    opacity: 0,
  },
});
