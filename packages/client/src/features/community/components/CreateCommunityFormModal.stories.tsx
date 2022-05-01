import type { Story } from "@ladle/react";
import { useState } from "react";
import type { CreateCommunityFormModalProps } from "./CreateCommunityFormModal";
import { CreateCommunityFormModal } from "./CreateCommunityFormModal";

const Component: Story<CreateCommunityFormModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>表示</button>
      <CreateCommunityFormModal
        {...args}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      />
    </>
  );
};

export const Base = Component.bind({});
