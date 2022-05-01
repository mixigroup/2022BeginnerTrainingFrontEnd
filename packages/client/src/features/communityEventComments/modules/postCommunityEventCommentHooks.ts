import { useCallback, useState, useTransition } from "react";
import { apiClient, handleApiError } from "../../../lib/api";

type PostCommunityEventCommentStatus =
  | {
      status: "initial";
      error: undefined;
    }
  | {
      status: "loading";
      error?: Error;
    }
  | {
      status: "success";
      error: undefined;
    }
  | {
      status: "failed";
      error: Error;
    };

const initialState: PostCommunityEventCommentStatus = {
  status: "initial",
  error: undefined,
};

export const usePostCommunityEventComment = () => {
  const [state, setState] =
    useState<PostCommunityEventCommentStatus>(initialState);
  const [isPending, startTransition] = useTransition();

  const postCommunityEventComment = useCallback(
    async ({
      communityId,
      eventId,
      body,
    }: {
      communityId: string;
      eventId: string;
      body: string;
    }) => {
      startTransition(() => {
        setState((prev) => ({
          ...prev,
          status: "loading",
        }));
      });

      const result = await apiClient.communityEventComment
        .createCommunityEventComment({
          communityId,
          eventId,
          requestBody: {
            body,
          },
        })
        .catch(handleApiError);

      if (result instanceof Error) {
        startTransition(() => {
          setState({
            status: "failed",
            error: result,
          });
        });

        return result;
      }

      startTransition(() => {
        setState({
          status: "success",
          error: undefined,
        });
      });

      return result;
    },
    []
  );

  const initializeState = useCallback(() => {
    startTransition(() => {
      setState(initialState);
    });
  }, []);

  return { state, isPending, postCommunityEventComment, initializeState };
};
