export const pagePath = {
  repo: <T extends string>(repoName: T) => `/repos/${repoName}` as const,
  search: () => "/search",
};
