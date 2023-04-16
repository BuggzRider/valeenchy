import { css } from "@emotion/react";
import Link from "next/link";
import { button, buttonLink } from "./styles";
import { PropTypes } from "./types";

const emptyStyle = () => css``;

const Button = ({
  isLink,
  url,
  onClickHandler,
  extraStyles = emptyStyle,
  label,
}: PropTypes) => {
  return isLink ? (
    <Link
      css={[(theme) => buttonLink(theme), (theme) => extraStyles(theme)]}
      href={url || ""}
    >
      {label}
    </Link>
  ) : (
    <button
      css={[(theme) => button(theme), (theme) => extraStyles(theme)]}
      onClick={onClickHandler}
    >
      {label}
    </button>
  );
};

export default Button;
