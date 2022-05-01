import {
  ApiError,
  CommunityEvent,
  CommunityEventComment,
  CommunityEventService,
  CommunityMember,
} from "api-server";
import { useCallback } from "react";
import useSWRInfinite from "swr/infinite";
import { apiClient, handleApiError } from "../../../lib/api";

type ListCommunityEventResponse = {
  events: {
    communityEvent: CommunityEvent;
    representativeComment: CommunityEventComment[];
  }[];
  includes: {
    communityMembers: CommunityMember[];
  };
  beforeSize: number;
  totalSize: number;
};

export const useListCommunityEvent = ({
  communityId,
  requestSize,
  suspense,
}: {
  communityId: string;
  requestSize: number;
  suspense: boolean;
}) => {
  const { data, error, setSize, size, mutate } = useSWRInfinite<
    ListCommunityEventResponse,
    Error | ApiError
  >(
    (pageIndex, prevPageData) =>
      getKey({ communityId, requestSize, pageIndex, prevPageData }),
    fetcher,
    {
      suspense,
    }
  );

  const fetchListCommunityEvent = useCallback(async () => {
    return await mutate();
  }, [mutate]);

  return {
    data,
    error,
    loading: !error && !data,
    size,
    setSize,
    fetchListCommunityEvent,
  };
};

export const useFetchListCommunityEvent = ({
  communityId,
  requestSize,
}: {
  communityId: string;
  requestSize: number;
}) => {
  const { mutate } = useSWRInfinite<
    ListCommunityEventResponse,
    Error | ApiError
  >(
    (pageIndex, prevPageData) =>
      getKey({ communityId, requestSize, pageIndex, prevPageData }),
    fetcher,
    {
      suspense: false,
      revalidateAll: true,
    }
  );

  const fetchListCommunityEvent = useCallback(async () => {
    return await mutate();
  }, [mutate]);

  return fetchListCommunityEvent;
};

const getKey = ({
  communityId,
  requestSize,
  prevPageData,
  pageIndex,
}: {
  communityId: string;
  requestSize: number;
  pageIndex: number;
  prevPageData?: ListCommunityEventResponse | null;
}) => {
  if (
    typeof prevPageData?.totalSize === "number" &&
    requestSize * pageIndex >= prevPageData.totalSize
  ) {
    return null;
  }

  return {
    key: `${CommunityEventService.name}/${CommunityEventService.prototype.listCommunityEvent.name}`,
    communityId,
    requestSize,
    beginCursor:
      prevPageData?.events[prevPageData.events.length - 1].communityEvent.id,
  };
};

const fetcher = async ({
  communityId,
  requestSize,
  beginCursor,
}: NonNullable<ReturnType<typeof getKey>>) => {
  const result = await apiClient.communityEvent
    .listCommunityEvent({
      communityId,
      requestSize,
      beginCursor,
    })
    .catch(handleApiError);

  if (result instanceof Error) {
    throw result;
  }

  return result;
};
