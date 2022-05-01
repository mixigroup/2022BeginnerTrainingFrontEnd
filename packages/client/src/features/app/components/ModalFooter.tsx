import type { ReactNode, VFC } from "react";
import { css } from "../../../lib/style";

export type ModalFooterProps = {
  children: ReactNode;
};

export const ModalFooter: VFC<ModalFooterProps> = ({ children }) => {
  return (
    <div className={footerStyle()}>
      <div>{children}</div>
    </div>
  );
};

const footerStyle = css({
  flex: "0 0 60px",
  width: "100%",
  height: "60px",
  display: "flex",
  justifyContent: "center",
});
