import type { CommunityEvent } from "api-server";

export const dummyCommunityEvent = (): CommunityEvent => {
  return {
    id: "dummy-id",
    communityId: "dummy-community-id",
    ownedMemberId: "dummy-owned-member-id",
    category: "party",
    name: "激辛インドカレーを食べよう",
    details:
      "いろんなインドカレーにブートジョロキアソースをトッピングして食べる会です。",
    imageUrl: "https://picsum.photos/200/300",
    holdAt: new Date().getTime(),
  };
};
