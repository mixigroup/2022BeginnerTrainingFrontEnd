import {
  ApiError,
  CommunityEventComment,
  CommunityEventCommentService,
  CommunityMember,
} from "api-server";
import { useCallback } from "react";
import useSWR, { useSWRConfig } from "swr";
import { apiClient, handleApiError } from "../../../lib/api";

type ListCommunityEventCommentResponse = {
  comment: CommunityEventComment;
  user: CommunityMember;
}[];

export const useListCommunityEventComment = ({
  communityId,
  eventId,
}: {
  communityId: string;
  eventId: string;
}) => {
  const { data, error } = useSWR<
    ListCommunityEventCommentResponse,
    Error | ApiError
  >(getKey({ communityId, eventId }), fetcher, {
    suspense: true,
  });

  return {
    data,
    error,
    loading: !data || !error,
  };
};

export const useFetchListCommunityEventComment = () => {
  const { mutate } = useSWRConfig();

  const fetchListCommunityEventComment = useCallback(
    async ({
      communityId,
      eventId,
    }: {
      communityId: string;
      eventId: string;
    }) => {
      const result = await mutate<ListCommunityEventCommentResponse>(
        getKey({ communityId, eventId })
      );

      return result;
    },
    [mutate]
  );

  return fetchListCommunityEventComment;
};

const getKey = ({
  communityId,
  eventId,
}: {
  communityId: string;
  eventId: string;
}) => {
  return {
    key: `${CommunityEventCommentService.name}/${CommunityEventCommentService.prototype.listCommunityEventComment.name}`,
    communityId,
    eventId,
  };
};

const fetcher = async ({ communityId, eventId }: ReturnType<typeof getKey>) => {
  const result = await apiClient.communityEventComment
    .listCommunityEventComment({
      communityId,
      eventId,
    })
    .catch(handleApiError);

  if (result instanceof Error) {
    throw result;
  }

  const users = Object.fromEntries(
    result.includes.communityMembers.map((member) => [member.id, member])
  );

  const listCommunityEventComment = result.comments.map((comment) => ({
    comment,
    user: users[comment.commentedMemberId],
  }));

  return listCommunityEventComment;
};
