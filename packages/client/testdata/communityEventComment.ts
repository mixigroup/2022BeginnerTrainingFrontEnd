import type { CommunityEventComment } from "api-server";

export const dummuCommunityEventComment = (): CommunityEventComment => {
  return {
    body: "インドカレーおいしい",
    eventId: "dummy-event-id",
    id: "dummy-id",
    commentedMemberId: "dummy-commented-member-id",
    commentAt: new Date().getTime(),
  };
};
