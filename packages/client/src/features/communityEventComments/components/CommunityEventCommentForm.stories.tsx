import { CommunityEventCommentForm } from "./CommunityEventCommentForm";

export const Base = () => {
  return (
    <CommunityEventCommentForm onSubmit={(comment) => console.log(comment)} />
  );
};
