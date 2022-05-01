import { ApiError, TestService } from "api-server";
import useSWR from "swr";
import { apiClient, handleApiError } from "../../../lib/api";
import { PromiseType } from "../../../type";

type GetKeyRequest = {
  name: string;
};

export const useTest = ({ name }: GetKeyRequest) => {
  const { data, error } = useSWR<
    PromiseType<ReturnType<typeof fetcher>>,
    Error | ApiError
  >(getKey({ name }), fetcher, {
    suspense: true,
  });

  return {
    data,
    error,
    loading: !data && !error,
  };
};

const getKey = ({ name }: { name: string }) => {
  return {
    key: `${TestService.name}/${TestService.prototype.getTest.name}`,
    name,
  };
};

const fetcher = async ({ name }: ReturnType<typeof getKey>) => {
  const result = await apiClient.test.getTest({ name }).catch(handleApiError);

  if (result instanceof Error) {
    throw result;
  }

  return result;
};
