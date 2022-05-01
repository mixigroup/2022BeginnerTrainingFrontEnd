import { ApiError, CommunityEvent } from "api-server";
import { useCallback, useState } from "react";

type CreateCommunityEventState =
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

const initialState: CreateCommunityEventState = {
  status: "initial",
  error: undefined,
};

export const useCreateCommunityEvent = () => {
  const [state] = useState<CreateCommunityEventState>(initialState);

  const createCommunityEvent = useCallback(
    async ({
      communityId,
      name,
      details,
      holdAt,
      category,
    }: {
      communityId: string;
      name: string;
      details: string;
      holdAt: Date;
      category: CommunityEvent["category"];
    }) => {
      return Promise.resolve(); // TODO: API 通信処理実装
    },
    []
  );

  return {
    state,
    createCommunityEvent,
  };
};
