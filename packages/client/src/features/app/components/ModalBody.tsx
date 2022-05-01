import type { ReactNode, VFC } from "react";
import { css } from "../../../lib/style";

export type ModalBodyProps = {
  children: ReactNode;
};

export const ModalBody: VFC<ModalBodyProps> = ({ children }) => {
  return <div className={bodyStyle()}>{children}</div>;
};

const bodyStyle = css({
  overflowY: "auto",
});
