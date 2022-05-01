import { ApiError } from "api-server";
import { useCallback, useState, useTransition } from "react";
import { apiClient, handleApiError } from "../../../lib/api";

type PostJoinCommunityState =
  | {
      status: "initial";
      error: undefined;
    }
  | {
      status: "loading";
      error?: Error | ApiError;
    }
  | {
      status: "success";
      error: undefined;
    }
  | {
      status: "failed";
      error: Error | ApiError;
    };

const initialState: PostJoinCommunityState = {
  status: "initial",
  error: undefined,
};

export const usePostJoinCommunity = () => {
  const [state, setState] = useState<PostJoinCommunityState>(initialState);
  const [isPending, startTransition] = useTransition();

  const joinCommunity = useCallback(
    async ({ communityId }: { communityId: string }) => {
      startTransition(() => {
        setState((prev) => ({
          ...prev,
          status: "loading",
        }));
      });

      const res = await apiClient.community
        .joinCommunity({
          communityId,
        })
        .catch(handleApiError);

      if (res instanceof Error) {
        startTransition(() => {
          setState({
            status: "failed",
            error: res,
          });
        });
        return res;
      }

      startTransition(() => {
        setState({
          status: "success",
          error: undefined,
        });
      });

      return res;
    },
    []
  );

  return { state, joinCommunity, isPending };
};
