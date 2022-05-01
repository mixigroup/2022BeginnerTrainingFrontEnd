import type { Story } from "@ladle/react";
import { useState } from "react";
import type { CreateCommunityEventFormModalProps } from "./CreateCommunityEventFormModal";
import { CreateCommunityEventFormModal } from "./CreateCommunityEventFormModal";

const Component: Story<CreateCommunityEventFormModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>表示</button>
      <CreateCommunityEventFormModal
        {...args}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      />
    </>
  );
};

export const Base = Component.bind({});
