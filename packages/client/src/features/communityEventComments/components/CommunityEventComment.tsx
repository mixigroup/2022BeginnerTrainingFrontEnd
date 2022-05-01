import type {
  CommunityEventComment as Comment,
  CommunityMember,
} from "api-server";
import type { FC } from "react";
import { useMemo } from "react";
import { formatDate } from "../../../lib/date";
import { css, theme } from "../../../lib/style";
import { UserAvatar } from "../../user/components/UserAvatar";

type CommunityEventCommnetProps = {
  communityEventComment: Comment;
  user: CommunityMember;
};

export const CommunityEventComment: FC<CommunityEventCommnetProps> = ({
  communityEventComment,
  user,
}) => {
  const postedAt = useMemo(() => {
    return formatDate({
      date: communityEventComment.commentAt,
      format: "YYYY/MM/DD HH:mm",
    });
  }, [communityEventComment.commentAt]);

  return (
    <figure className={containerStyle()}>
      <UserAvatar avatarUrl={user.user.iconUrl} size="small" />
      <div className={commentWrapperStyle()}>
        <p className={commentTextStyle()}>{communityEventComment.body}</p>
        <cite className={userNameTextStyle()}>{user.user.name}</cite>
        <time className={postedAtTextStyle()}>{postedAt}</time>
      </div>
    </figure>
  );
};

const containerStyle = css({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: theme(({ space }) => space[1]),
  margin: 0,
});

const commentWrapperStyle = css({
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gridTemplateAreas: `
    "comment comment"
    "name posted-at"`,
  justifyContent: "space-between",
  gap: theme(({ space }) => space[1]),
});

const commentTextStyle = css({
  color: theme(({ colors }) => colors.text),
  fontSize: theme(({ fontSizes }) => fontSizes[1]),
  fontFamily: theme(({ fonts }) => fonts.base),
  margin: 0,
  gridArea: "comment",
});

const userNameTextStyle = css({
  color: theme(({ colors }) => colors.text),
  fontSize: theme(({ fontSizes }) => fontSizes[1]),
  fontFamily: theme(({ fonts }) => fonts.base),
  margin: 0,
  gridArea: "name",
  fontStyle: "normal",
});

const postedAtTextStyle = css({
  color: theme(({ colors }) => colors.text),
  fontSize: theme(({ fontSizes }) => fontSizes[1]),
  fontFamily: theme(({ fonts }) => fonts.base),
  margin: 0,
  gridArea: "posted-at",
});
