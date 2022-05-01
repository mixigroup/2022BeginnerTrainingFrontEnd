import { dummyCommunity } from "../../../../testdata/community";
import { CommunitySummary } from "./CommunitySummary";

export const Base = () => {
  return (
    <CommunitySummary
      community={dummyCommunity()}
      isJoined={false}
      breakpoint={{
        layout: {
          lg: "horizontal",
          md: "horizontal",
          sm: "vertical",
        },
      }}
      onRequestJoin={() => console.log("joinRequest")}
    />
  );
};
