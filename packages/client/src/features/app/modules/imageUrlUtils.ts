export const replaceImageSize = ({
  imageUrl,
  width,
  height,
}: {
  imageUrl: string;
  width: number;
  height: number;
}) => {
  const replacedWidth = imageUrl.replace("{width}", `${width}`);
  const replacedWidthAndHeight = replacedWidth.replace("{height}", `${height}`);

  return replacedWidthAndHeight;
};
