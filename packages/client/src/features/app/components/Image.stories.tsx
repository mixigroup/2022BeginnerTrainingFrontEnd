import { Image } from "./Image";

const args = {
  src: "https://picsum.photos/200/300",
  alt: "ダミー画像",
  width: 200,
  height: 300,
  scale: "cover" as const,
};

export const Base = () => {
  return <Image {...args} />;
};
