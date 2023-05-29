import { closeButtonContainer, closeButtonStyles } from "./styles";

const CloseButton = ({ onClickHandler, closeButtonColor }: any) => {
  return (
    <div css={(theme) => closeButtonContainer(theme)} onClick={onClickHandler}>
      <span css={(theme) => closeButtonStyles(theme, closeButtonColor)}>
        &nbsp;
      </span>
    </div>
  );
};

export default CloseButton;
