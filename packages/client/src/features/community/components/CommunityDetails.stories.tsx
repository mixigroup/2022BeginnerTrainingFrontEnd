import { dummyCommunity } from "../../../../testdata/community";
import { CommunityDetails } from "./CommunityDetails";

export const Base = () => {
  return <CommunityDetails community={dummyCommunity()} />;
};
