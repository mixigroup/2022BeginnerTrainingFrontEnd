import type { CommunityMember } from "api-server";
import { dummyUser } from "./user";

export const dummyCommunityMember = (): CommunityMember => {
  return {
    id: "dummy-id",
    user: dummyUser(),
    communityId: "dummy-community-id",
    role: "member",
  };
};
