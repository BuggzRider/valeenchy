import { css } from "@emotion/react";
import Link from "next/link";
import { linkListItemContainer, linkListItemLink } from "./styles";
import { NavbarItemType } from "./types";

const LinkListRenderer = ({
  config,
  containerStyles,
  linkStyles,
}: NavbarItemType) => {
  return (
    <li
      css={[
        (theme) => linkListItemContainer(theme),
        containerStyles ? (theme) => containerStyles(theme) : css``,
      ]}
    >
      <Link
        css={[
          (theme) => linkListItemLink(theme),
          linkStyles ? (theme) => linkStyles(theme) : css``,
        ]}
        href={config.url}
        data-automation={config.key}
      >
        {config.displayName}
      </Link>
    </li>
  );
};

export default LinkListRenderer;
