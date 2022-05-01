import type { Community } from "api-server";

export const dummyCommunity = (): Community => {
  return {
    id: "dummyId",
    name: "辛いもの部",
    details: "美味しくて辛い食べ物をいっぱい食べるよ",
    category: "gurmand",
    imageUrl: "https://picsum.photos/200/300",
    membership: 1,
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  };
};
