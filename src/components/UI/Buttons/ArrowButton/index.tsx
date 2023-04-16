import { css } from "@emotion/react";
import { arrowButton, leftArrowbutton, rightArrowbutton } from "./styles";
import { ARROW_BUTTON_TYPES, PropTypes } from "./types";

const emptyStyle = () => css``;

const ArrowButton = ({
  onClickHandler,
  extraStyles = emptyStyle,
  label,
  type,
  disabled,
}: PropTypes) => {
  return (
    <button
      css={[
        (theme) => arrowButton(theme),
        (theme) =>
          type === ARROW_BUTTON_TYPES.LEFT
            ? leftArrowbutton(theme)
            : rightArrowbutton(theme),
        (theme) => extraStyles(theme),
      ]}
      onClick={onClickHandler}
      disabled={disabled}
    >
      <span>{label}</span>
    </button>
  );
};

export default ArrowButton;
