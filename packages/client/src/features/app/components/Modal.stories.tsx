import type { Story } from "@ladle/react";
import { useState } from "react";
import type { ModalProps } from "./Modal";
import { Modal } from "./Modal";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";

const Component: Story<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>表示</button>
      <Modal {...args} isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <ModalBody>
          <p>コンテンツ</p>
        </ModalBody>
        <ModalFooter>
          <p>フッター</p>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const Base = Component.bind({});
Base.args = {
  contentLabel: "テスト",
  title: "ダミータイトル",
};
