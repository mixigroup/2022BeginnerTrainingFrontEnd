import type { Community } from "api-server";
import type { FormEvent } from "react";
import { FC, useCallback, useState } from "react";
import { css, theme } from "../../../lib/style";
import { Button } from "../../app/components/Button";
import { Modal, ModalProps } from "../../app/components/Modal";
import { ModalBody } from "../../app/components/ModalBody";
import { ModalFooter } from "../../app/components/ModalFooter";
import { Selector } from "../../app/components/Selector";
import { Textarea } from "../../app/components/Textarea";
import { TextInput } from "../../app/components/TextInput";
import { categoryNames } from "../modules/communityUtils";

const categoryOptions: { label: string; value: Community["category"] | "" }[] =
  [
    {
      label: "カテゴリを選択",
      value: "",
    },
    {
      label: categoryNames["anime"],
      value: "anime",
    },
    {
      label: categoryNames["geek"],
      value: "geek",
    },
    {
      label: categoryNames["gurmand"],
      value: "gurmand",
    },
    {
      label: categoryNames["sports"],
      value: "sports",
    },
  ];

export type CreateCommunityFormModalProps = {
  onRequestCreateCommunity: (formData: {
    name: string;
    details: string;
    category: Community["category"];
  }) => void | Promise<void>;
  theme: "light" | "dark";
} & Pick<ModalProps, "isOpen" | "onRequestClose" | "onAfterClose">;

export const CreateCommunityFormModal: FC<CreateCommunityFormModalProps> = ({
  onRequestCreateCommunity,
  theme,
  ...modalProps
}) => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState<Community["category"] | "">("");

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!category) {
        return;
      }

      await onRequestCreateCommunity({
        name,
        details,
        category,
      });
    },
    [category, details, name, onRequestCreateCommunity]
  );

  return (
    <Modal
      {...modalProps}
      title="新規コミュニティ"
      contentLabel="新規コミュニティ作成フォーム"
      theme={theme}
    >
      <form className={formStyle()} onSubmit={onSubmit}>
        <ModalBody>
          <div className={inputsWrapperStyle()}>
            <label className={labelStyle()}>
              <span className={labelTextStyle()} data-theme={theme}>
                コミュニティ名
              </span>
              <TextInput
                placeholder="新規コミュニティ名"
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
              <span className={labelTextStyle()}>詳細</span>
              <Textarea
                rows={6}
                onChange={(event) => setDetails(event.target.value)}
              />
            </label>
            <label className={labelStyle()}>
              <span className={labelTextStyle()} data-theme={theme}>
                カテゴリ
              </span>
              <Selector
                options={categoryOptions}
                onChange={(event) => {
                  setCategory(
                    event.target.value as
                      | ""
                      | "anime"
                      | "geek"
                      | "gurmand"
                      | "sports"
                  );
                }}
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
  '&[data-theme="dark"]': {
    color: theme(({ colors }) => colors.textDark),
  },
});
