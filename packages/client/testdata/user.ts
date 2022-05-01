import type { User } from "api-server";
import { uuid } from "uuidv4";

export const dummyUser = (): User => {
  return {
    id: uuid(),
    name: "テストユーザー",
    iconUrl: "https://picsum.photos/100/100",
  };
};
