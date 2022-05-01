import type { Community } from "api-server";

export const categoryNames: Record<Community["category"], string> = {
  anime: "アニメ",
  geek: "ギーク",
  gurmand: "グルメ",
  sports: "スポーツ",
} as const;
