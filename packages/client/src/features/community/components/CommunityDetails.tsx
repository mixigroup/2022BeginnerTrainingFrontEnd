import { Community } from "api-server";
import type { FC } from "react";
import { useMemo } from "react";
import { formatDate } from "../../../lib/date";
import { css, theme } from "../../../lib/style";
import { Heading } from "../../app/components/Heading";
import { categoryNames } from "../modules/communityUtils";

type CommunityDetailsProps = {
  community: Community;
};

export const CommunityDetails: FC<CommunityDetailsProps> = ({ community }) => {
  const createdAt = useMemo(() => {
    return formatDate({ date: community.createdAt, format: "YYYY/MM/DD" });
  }, [community.createdAt]);

  return (
    <article className={containerStyle()}>
      <div className={metaInfoContainerStyle()}>
        <span className={categoryStyle()}>
          {categoryNames[community.category]}
        </span>
        <time className={createdAtStyle()}>作成日: {createdAt}</time>
      </div>
      <p className={detailsTextStyle()}>{community.details}</p>
      <div>
        <Heading
          tag="h2"
          variant="light"
          breakpoint={{
            size: {
              lg: "default",
              md: "default",
              sm: "small",
            },
          }}
        >
          メンバー数
        </Heading>
        <p className={membershipTextStyle()}>{community.membership}人</p>
      </div>
    </article>
  );
};

const containerStyle = css({
  width: "100%",
  height: "244px",
  padding: `${theme(({ space }) => space[3])} ${theme(
    ({ space }) => space[4]
  )}`,
  boxSizing: "border-box",
  boxShadow: theme(({ shadows }) => shadows.elevationLow),
  backgroundColor: theme(({ colors }) => colors.backgroundBase),
  borderRadius: theme(({ radii }) => radii.radius1),
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
  rowGap: theme(({ space }) => space[2]),
});

const metaInfoContainerStyle = css({
  display: "flex",
  columnGap: theme(({ space }) => space[2]),
  justifyContent: "flex-end",
});

const categoryStyle = css({
  display: "inline-block",
  color: theme(({ colors }) => colors.accent),
  fontSize: theme(({ fontSizes }) => fontSizes[1]),
  fontFamily: theme(({ fonts }) => fonts.base),
  margin: 0,
});

const createdAtStyle = css({
  display: "inline-block",
  color: theme(({ colors }) => colors.text),
  fontSize: theme(({ fontSizes }) => fontSizes[1]),
  fontFamily: theme(({ fonts }) => fonts.base),
  margin: 0,
});

const detailsTextStyle = css({
  color: theme(({ colors }) => colors.text),
  fontSize: theme(({ fontSizes }) => fontSizes[1]),
  fontFamily: theme(({ fonts }) => fonts.base),
  boxSizing: "border-box",
  margin: 0,
});

const membershipTextStyle = css({
  display: "inline-block",
  color: theme(({ colors }) => colors.text),
  fontSize: theme(({ fontSizes }) => fontSizes[1]),
  fontFamily: theme(({ fonts }) => fonts.base),
  margin: 0,
});
