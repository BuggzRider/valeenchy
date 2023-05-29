import { css } from "@emotion/react";
import { button } from "./styles";
import { PropTypes } from "./types";

const emptyStyle = () => css``;

const LinkButton = ({
  onClickHandler,
  extraStyles = emptyStyle,
  label,
}: PropTypes) => {
  return (
    <button
      css={[(theme) => button(theme), (theme) => extraStyles(theme)]}
      onClick={onClickHandler}
    >
      {label}
    </button>
  );
};

export default LinkButton;
