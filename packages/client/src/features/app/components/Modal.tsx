import type { PropsWithChildren, VFC } from "react";
import ReactModal from "react-modal";
import { css, theme } from "../../../lib/style";
import { Heading } from "./Heading";
import { Icon } from "./Icon";

const TIMEOUT_DURATION = 300;

export type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
  title: string;
  onAfterClose?: () => void;
  theme: "light" | "dark";
}>;

export const Modal: VFC<ModalProps> = ({
  children,
  title,
  theme,
  ...modalProps
}) => {
  return (
    <ReactModal
      {...modalProps}
      className={{
        base: "modalBase",
        afterOpen: "modalAfterOpen",
        beforeClose: "modalBeforeClose",
      }}
      overlayClassName={{
        base: "modalOverlayBase",
        afterOpen: "modalOverlayAfterOpen",
        beforeClose: "modalOverlayBeforeClose",
      }}
      portalClassName={"modalPortal"}
      closeTimeoutMS={TIMEOUT_DURATION}
      data={{
        theme,
      }}
    >
      <div className={titleWrapperStyle()}>
        <div className={closeWrapperStyle()}>
          <button
            className={closeButtonStyle()}
            type="button"
            onClick={modalProps.onRequestClose}
            area-label={`${modalProps.contentLabel}を閉じる`}
          >
            <Icon icon="circleXMark" variant={theme} size="sm" />
          </button>
        </div>
        <Heading
          tag="h2"
          variant={theme}
          breakpoint={{
            size: {
              lg: "default",
              md: "default",
              sm: "small",
            },
          }}
        >
          {title}
        </Heading>
      </div>
      {children}
    </ReactModal>
  );
};

const closeWrapperStyle = css({
  position: "fixed",
  left: theme(({ space }) => space[4]),
});

const closeButtonStyle = css({
  margin: 0,
  padding: 0,
  border: "none",
  appearance: "none",
  cursor: "pointer",
  background: "transparent",
});

const titleWrapperStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
