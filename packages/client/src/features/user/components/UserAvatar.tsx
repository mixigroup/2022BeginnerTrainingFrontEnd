import type { FC } from "react";
import { css } from "../../../lib/style";
import { Image } from "../../app/components/Image";

type UserAvatarProps = {
  avatarUrl: string;
  size: "default" | "small";
};

const AVATAR_SIZE = {
  default: 96,
  small: 28,
} as const;

export const UserAvatar: FC<UserAvatarProps> = ({ avatarUrl, size }) => {
  return (
    <figure
      className={avatarWrapperStyle()}
      style={{
        width: AVATAR_SIZE[size],
        height: AVATAR_SIZE[size],
      }}
    >
      <Image
        src={avatarUrl}
        alt=""
        width={AVATAR_SIZE[size]}
        height={AVATAR_SIZE[size]}
        scale="cover"
        loading="lazy"
      />
    </figure>
  );
};

const avatarWrapperStyle = css({
  margin: 0,
  borderRadius: "100vh",
  overflow: "hidden",
  border: "#FFF 2px solid",
});
