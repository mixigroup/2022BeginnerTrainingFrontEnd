import { CommunitySummarySkeleton } from "./CommunitySummarySkeleton";

export const Base = () => {
  return (
    <CommunitySummarySkeleton
      breakpoint={{
        layout: {
          lg: "horizontal",
          md: "horizontal",
          sm: "vertical",
        },
      }}
    />
  );
};
