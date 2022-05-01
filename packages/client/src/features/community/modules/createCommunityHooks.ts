import { ApiError, Community } from "api-server";
import { useCallback, useState, useTransition } from "react";
import { apiClient, handleApiError } from "../../../lib/api";

type CreateCommunityState =
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

const initialState: CreateCommunityState = {
  status: "initial",
  error: undefined,
};

export const useCreateCommunity = () => {
  const [state, setState] = useState<CreateCommunityState>(initialState);
  const [isPending, startTransition] = useTransition();

  const createCommunity = useCallback(
    async ({
      name,
      details,
      category,
    }: {
      name: string;
      details: string;
      category: Community["category"];
    }) => {
      startTransition(() => {
        setState((prev) => ({
          ...prev,
          status: "loading",
        }));
      });

      const res = await apiClient.community
        .createCommunity({
          requestBody: {
            name,
            details,
            category,
          },
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

  return { state, createCommunity, isPending };
};
