import { css } from "@emotion/react";
import LinkListRenderer from "components/LinkListRenderer";
import SingleMediaRendered from "components/SingleMediaRenderer";
import { SingleMediaOptions } from "components/SingleMediaRenderer/types";
import { NavbarItemListTypes, NavbarItemTypes } from "config";
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
              config={data.listItems.columnList1}
              linkStyles={(theme: any) => css`
                font-weight: ${theme.fontWeights.bold};
              `}
            />
            {data.listItems.columnList1.items.map((dataItem: any) => (
              <LinkListRenderer
                key={dataItem.key}
                config={dataItem}
                linkStyles={(theme: any) => css`
                  font-weight: ${theme.fontWeights.light};
                `}
              />
            ))}
          </ul>
          <ul css={() => expandedItemsListContainer()}>
            <LinkListRenderer
              key={data.listItems.columnList2.key}
              config={data.listItems.columnList2}
              linkStyles={(theme: any) => css`
                font-weight: ${theme.fontWeights.bold};
              `}
            />
            {data.listItems.columnList2.items.map((dataItem: any) => (
              <LinkListRenderer
                key={dataItem.key}
                config={dataItem}
                linkStyles={(theme: any) => css`
                  font-weight: ${theme.fontWeights.light};
                `}
              />
            ))}
          </ul>
          <div>
            <SingleMediaRendered
              url="/assets/images/potraitLarge.webp"
              mediaStyles={() => css`
                object-fit: cover;
              `}
              containerStyles={() => css`
                width: 100%;
                height: 100%;
              `}
              alt="image"
              type={SingleMediaOptions.IMAGE}
              shouldShowOverlay={true}
              overlayTextConfig={{
                contentAlignment: "flex-start",
                heading: "Shop New",
                extraContainerStyles: imageExtraOverlayStyles,
              }}
            />
          </div>
          <div>
            <SingleMediaRendered
              url="/assets/images/test.webp"
              mediaStyles={() => css`
                object-fit: cover;
              `}
              containerStyles={() => css`
                width: 100%;
              `}
              alt="image"
              type={SingleMediaOptions.IMAGE}
              shouldShowOverlay={true}
              overlayTextConfig={{
                contentAlignment: "flex-start",
                heading: "Shop Popular",
                extraContainerStyles: imageExtraOverlayStyles,
              }}
            />
          </div>
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
