import { dummyCommunityEvent } from "../../../../testdata/communityEvent";
import { CommunityEventSummary } from "./CommunityEventSummary";

export const Base = () => {
  return (
    <CommunityEventSummary
      communityEvent={dummyCommunityEvent()}
      communityId="dummy-community-id"
    />
  );
};
