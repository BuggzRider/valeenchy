import { css } from "@emotion/react";
import Link from "next/link";
import { buttonLink } from "./styles";
import { PropTypes } from "./types";

const emptyStyle = () => css``;

const LinkButton = ({
  isLink,
  url,
  onClickHandler,
  extraStyles = emptyStyle,
  label,
}: PropTypes) => {
  return isLink ? (
    <Link
      css={[(theme) => buttonLink(theme), (theme) => extraStyles(theme)]}
      href={url || "javascript:void(0)"}
      onClick={onClickHandler}
    >
      {label}
    </Link>
  ) : (
    <button
      css={[(theme) => buttonLink(theme), (theme) => extraStyles(theme)]}
      onClick={onClickHandler}
    >
      {label}
    </button>
  );
};

export default LinkButton;
