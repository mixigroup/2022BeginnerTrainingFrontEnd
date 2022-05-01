import { CommunityEvent } from "api-server";
import type { FC, FormEvent } from "react";
import { useCallback, useState } from "react";
import { css, theme } from "../../../lib/style";
import { Button } from "../../app/components/Button";
import { DateTimePicker } from "../../app/components/DateTimePicker";
import type { ModalProps } from "../../app/components/Modal";
import { Modal } from "../../app/components/Modal";
import { ModalBody } from "../../app/components/ModalBody";
import { ModalFooter } from "../../app/components/ModalFooter";
import { Selector } from "../../app/components/Selector";
import { Textarea } from "../../app/components/Textarea";
import { TextInput } from "../../app/components/TextInput";

const categoryOptions: {
  label: string;
  value: CommunityEvent["category"] | "";
}[] = [
  {
    label: "カテゴリを選択",
    value: "",
  },
  {
    label: "パーティ",
    value: "party",
  },
  {
    label: "セミナー",
    value: "seminar",
  },
];

export type CreateCommunityEventFormModalProps = {
  onRequestCreateEvent: (formData: {
    name: string;
    holdAt: Date;
    details: string;
    category: CommunityEvent["category"];
  }) => void | Promise<void>;
  theme: "light" | "dark";
} & Pick<ModalProps, "isOpen" | "onRequestClose" | "onAfterClose">;

export const CreateCommunityEventFormModal: FC<
  CreateCommunityEventFormModalProps
> = ({ onRequestCreateEvent, theme, ...modalProps }) => {
  const [name, setName] = useState("");
  const [holdAt, setHoldAt] = useState(new Date());
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState<CommunityEvent["category"] | "">("");

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!category) {
        return;
      }

      await onRequestCreateEvent({
        name,
        holdAt,
        details,
        category,
      });
    },
    [category, details, holdAt, name, onRequestCreateEvent]
  );

  return (
    <Modal
      {...modalProps}
      title="イベントを作成"
      contentLabel="新規イベント作成フォーム"
      theme={theme}
    >
      <form className={formStyle()} onSubmit={onSubmit}>
        <ModalBody>
          <div className={inputsWrapperStyle()}>
            <label className={labelStyle()}>
              <span className={labelTextStyle()}>イベント名</span>
              <TextInput
                placeholder="新規イベント名"
                onChange={(event) => setName(event.target.value)}
                breakpoint={{
                  size: {
                    lg: "default",
                    md: "default",
                    sm: "small",
                  },
                }}
              />
            </label>
            <label className={labelStyle()}>
              <span className={labelTextStyle()}>開催日時</span>
              <DateTimePicker
                min={new Date().toString()}
                onChange={(event) => setHoldAt(new Date(event.target.value))}
              />
            </label>
            <label className={labelStyle()}>
              <span className={labelTextStyle()}>詳細</span>
              <Textarea
                rows={6}
                onChange={(event) => setDetails(event.target.value)}
              />
            </label>
            <label className={labelStyle()}>
              <span className={labelTextStyle()}>カテゴリ</span>
              <Selector
                options={categoryOptions}
                onChange={(event) =>
                  setCategory(
                    event.target.value as CommunityEvent["category"] | ""
                  )
                }
              />
            </label>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            type="submit"
            variant="primary"
            breakpoint={{
              size: {
                lg: "default",
                md: "default",
                sm: "small",
              },
            }}
          >
            作成
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

const formStyle = css({
  display: "grid",
  gridTemplateRows: "minmax(0, 1fr) auto",
  rowGap: theme(({ space }) => space[1]),
});

const inputsWrapperStyle = css({
  padding: `${theme(({ space }) => space[1])} ${theme(
    ({ space }) => space[2]
  )}`,
  display: "grid",
  rowGap: theme(({ space }) => space[4]),
  boxSizing: "border-box",
});

const labelStyle = css({
  display: "grid",
  rowGap: theme(({ space }) => space[1]),
});

const labelTextStyle = css({
  color: theme(({ colors }) => colors.text),
  fontFamily: theme(({ fonts }) => fonts.base),
  fontSize: theme(({ fontSizes }) => fontSizes[2]),
});
