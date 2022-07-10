import {
  ApiError,
  Community,
  CommunityMember,
  CommunityService,
} from "api-server";
import useSWR from "swr";
import { apiClient, handleApiError } from "../../../lib/api";

type CommunityResponse = {
  community: Community;
  isJoined?: boolean | null | undefined;
  members: CommunityMember[];
};

export const useCommunity = ({ communityId }: { communityId: string }) => {
  const { data, error } = useSWR<CommunityResponse, Error | ApiError>(
    getKey({ communityId }),
    fetcher,
    {
      suspense: true,
    }
  );

  return {
    data,
    error,
  };
};

const getKey = ({ communityId }: { communityId: string }) => {
  return {
    key: `${CommunityService.name}/${CommunityService.prototype.getCommunity.name}`,
    communityId,
  };
};

const fetcher = async ({ communityId }: ReturnType<typeof getKey>) => {
  const result = await apiClient.community
    .getCommunity({ communityId })
    .catch(handleApiError);

  if (result instanceof Error) {
    throw result;
  }

  return result;
};
