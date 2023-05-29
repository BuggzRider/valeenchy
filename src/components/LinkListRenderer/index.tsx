import { css } from "@emotion/react";
import Link from "next/link";
import { linkListItemContainer, linkListItemLink } from "./styles";

const LinkListRenderer = ({
  config,
  containerStyles,
  linkStyles,
  ...props
}: any) => {
  return (
    <span
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
        href={{ pathname: config.url, query: config.query || {} }}
        data-automation={config.key}
        {...props}
      >
        {config.displayName}
      </Link>
    </span>
  );
};

export default LinkListRenderer;
