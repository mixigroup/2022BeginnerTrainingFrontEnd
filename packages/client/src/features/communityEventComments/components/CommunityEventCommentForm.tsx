import type { FC } from "react";
import { useCallback, useState } from "react";
import { css, theme } from "../../../lib/style";
import { SquareButton } from "../../app/components/SquareButton";
import { Textarea } from "../../app/components/Textarea";

type CommunityEventCommentFormProps = {
  onSubmit: (comment: string) => void;
};

export const CommunityEventCommentForm: FC<CommunityEventCommentFormProps> = ({
  onSubmit,
}) => {
  const [comment, setComment] = useState("");

  const onSubmitHandle = useCallback(() => {
    // event.preventDefault();
    onSubmit(comment);
  }, [comment, onSubmit]);

  return (
    <form className={formStyle()}>
      <Textarea
        onChange={(event) => setComment(event.target.value)}
        rows={1}
        placeholder="コメントを追加"
      />
      <SquareButton
        type="submit"
        disabled={false}
        onClick={onSubmitHandle}
        breakpoint={{
          size: {
            lg: "default",
            md: "default",
            sm: "small",
          },
        }}
      >
        送信
      </SquareButton>
    </form>
  );
};

const formStyle = css({
  display: "grid",
  gridTemplateColumns: "1fr auto",
  columnGap: theme(({ space }) => space[2]),
});
