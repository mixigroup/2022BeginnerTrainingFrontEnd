import { dummuCommunityEventComment } from "../../../../testdata/communityEventComment";
import { dummyCommunityMember } from "../../../../testdata/communityMember";
import { CommunityEventComment } from "./CommunityEventComment";

export const Base = () => {
  return (
    <CommunityEventComment
      communityEventComment={dummuCommunityEventComment()}
      user={dummyCommunityMember()}
    />
  );
};
