import { css } from "@emotion/react";
import LinkListRenderer from "components/LinkListRenderer";
import SingleMediaRendered from "components/SingleMediaRenderer";
import { SingleMediaOptions } from "components/SingleMediaRenderer/types";
import { NavbarItemListTypes, NavbarItemTypes } from "config";
import Link from "next/link";
import { useState } from "react";
import { NavbarPropTypes } from "../types";
import {
  expandedItemsListContainer,
  expandedItemsListWrapper,
  expandedNavItemWrapper,
  imageExtraOverlayStyles,
  listItem,
  listItemsWrapper,
  listNavItemWrapper,
  navItem,
} from "./styles";

const NavbarItem = ({ config }: NavbarPropTypes) => {
  const [isLinkHovered, setIsLinkHovered] = useState(false);
  const isExpandable = config.listType === NavbarItemListTypes.EXPANDABLE;

  const componentRenderer = (data: any) => {
    if (data.listType === NavbarItemListTypes.EXPANDABLE) {
      return (
        <div css={(theme) => expandedItemsListWrapper(theme)}>
          <ul css={() => expandedItemsListContainer()}>
            <LinkListRenderer
              key={data.listItems.columnList1.key}
              config={{ ...data.listItems.columnList1, url: data.url }}
              linkStyles={(theme: any) => css`
                font-weight: ${theme.fontWeights.bold};
              `}
            />
            {data.listItems.columnList1.items.map((dataItem: any) => (
              <LinkListRenderer
                key={dataItem.key}
                config={{ ...dataItem, url: data.url }}
                linkStyles={(theme: any) => css`
                  font-weight: ${theme.fontWeights.light};
                `}
              />
            ))}
          </ul>
          <ul css={() => expandedItemsListContainer()}>
            <LinkListRenderer
              key={data.listItems.columnList2.key}
              config={{ ...data.listItems.columnList2, url: data.url }}
              linkStyles={(theme: any) => css`
                font-weight: ${theme.fontWeights.bold};
              `}
            />
            {data.listItems.columnList2.items.map((dataItem: any) => (
              <LinkListRenderer
                key={dataItem.key}
                config={{ ...dataItem, url: data.url }}
                linkStyles={(theme: any) => css`
                  font-weight: ${theme.fontWeights.light};
                `}
              />
            ))}
          </ul>
          <Link
            href={{
              pathname: data.url,
              query: data.listItems.columnImage1.query,
            }}
          >
            <SingleMediaRendered
              url={data.listItems.columnImage1.imageUrl}
              mediaStyles={() => css`
                object-fit: cover;
              `}
              containerStyles={() => css`
                width: 100%;
                height: 100%;
              `}
              alt={data.listItems.columnImage1.displayName}
              type={SingleMediaOptions.IMAGE}
              shouldShowOverlay={true}
              overlayTextConfig={{
                contentAlignment: "flex-start",
                heading: data.listItems.columnImage1.displayName,
                extraContainerStyles: imageExtraOverlayStyles,
              }}
            />
          </Link>
          <Link
            href={{
              query: data.listItems.columnImage2.query,
              pathname: data.url,
            }}
          >
            <SingleMediaRendered
              url={data.listItems.columnImage2.imageUrl}
              mediaStyles={() => css`
                object-fit: cover;
              `}
              containerStyles={() => css`
                width: 100%;
              `}
              alt={data.listItems.columnImage1.displayName}
              type={SingleMediaOptions.IMAGE}
              shouldShowOverlay={true}
              overlayTextConfig={{
                contentAlignment: "flex-start",
                heading: data.listItems.columnImage1.displayName,
                extraContainerStyles: imageExtraOverlayStyles,
              }}
            />
          </Link>
        </div>
      );
    } else {
      return (
        <div css={() => listItemsWrapper()}>
          {data.listItems.map((dataItem: any) => (
            <span key={dataItem.key} css={() => listItem()}>
              <LinkListRenderer
                key={dataItem.key}
                config={dataItem}
                containerStyles={() => css`
                  padding: 2px 2px;
                  margin: 5px 5px;
                  width: 100%;
                  display: flex;
                `}
              />
            </span>
          ))}
        </div>
      );
    }
  };

  return (
    <div
      css={(theme) => navItem(theme, !isExpandable)}
      onMouseOver={() => setIsLinkHovered(true)}
      onMouseOut={() => setIsLinkHovered(false)}
    >
      <LinkListRenderer key={config.key} config={config} />
      {config.type !== NavbarItemTypes.HYPERLINK_ONLY && isLinkHovered && (
        <div css={isExpandable ? expandedNavItemWrapper : listNavItemWrapper}>
          {componentRenderer(config)}
        </div>
      )}
    </div>
  );
};

export default NavbarItem;
