import { ApiClient, ApiError, BaseHttpRequest } from "api-server";

export const handleApiError = async (
  error: Error | ApiError
): Promise<Error | ApiError> => {
  if (error instanceof Error) {
    console.error(error);
    return error;
  }

  return Promise.reject(error);
};

export const apiClient = new ApiClient({
  BASE: import.meta.env.VITE_APP_API_BASE_URL ?? "http://127.0.0.1:3000",
});

export const getApiConfig = () =>
  new BaseHttpRequest({
    BASE: import.meta.env.VITE_APP_API_BASE_URL ?? "http://127.0.0.1:3000",
    VERSION: "0.1.1",
    WITH_CREDENTIALS: false,
    CREDENTIALS: "include",
  });
