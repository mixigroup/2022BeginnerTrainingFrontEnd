import { SearchCommunityForm } from "./SearchCommunityForm";

export const Base = () => {
  return (
    <SearchCommunityForm
      onClickSearch={(keyword) => console.log(keyword)}
      breakpoint={{
        size: {
          lg: "default",
          md: "default",
          sm: "small",
        },
      }}
    />
  );
};
