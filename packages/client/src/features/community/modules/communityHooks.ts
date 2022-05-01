import { Community, CommunityMember, CommunityService } from "api-server";

export type CommunityResponse = {
  community: Community;
  isJoined?: boolean | null | undefined;
  members: CommunityMember[];
};

const getKey = ({ communityId }: { communityId: string }) => {
  return {
    key: `${CommunityService.name}/${CommunityService.prototype.getCommunity.name}`,
    communityId,
  };
};

export const fetcher = async (_props: ReturnType<typeof getKey>) => {
  return undefined;
};
