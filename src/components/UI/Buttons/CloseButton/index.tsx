import { closeButtonContainer, closeButtonStyles } from "./styles";

const CloseButton = ({ onClickhandler, closeButtonColor }: any) => {
  return (
    <div css={(theme) => closeButtonContainer(theme)} onClick={onClickhandler}>
      <span css={(theme) => closeButtonStyles(theme, closeButtonColor)}>
        &nbsp;
      </span>
    </div>
  );
};

export default CloseButton;
