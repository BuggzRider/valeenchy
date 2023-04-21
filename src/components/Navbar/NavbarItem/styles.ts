import { css } from "@emotion/react";
import { menuVisibility } from "styles/keyframes";

export const navItem = (theme: any, isPositionRelative = false) => css`
  position: ${isPositionRelative ? "relative" : "unset"};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  label: navItem;
`;

export const expandedNavItemWrapper = css`
  position: absolute;
  top: 6rem;
  left: 0rem;
  z-index: 200;
  label: expandedNavItemWrapper;
`;

export const listNavItemWrapper = css`
  position: absolute;
  top: 4rem;
  left: 1rem;
  z-index: 200;
  label: listNavItemWrapper;
`;

export const expandedItemsListWrapper = (theme: any) => css`
  display: grid;
  grid-template-columns: 16% 16% 20% 40%;
  column-gap: 2rem;
  max-width: ${theme.maxWidths[2]};
  width: 100%
  height: 40vh;
  background: white;
  border: 1px solid white;
  border-radius: 20px;
  padding: 1rem;
  animation: ${menuVisibility} 1s ease;
  label: navItemConatainer;
`;

export const expandedItemsListContainer = () => css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  label: expandedItemsListContainer;
`;

export const listItemsWrapper = () => css`
  background: white;
  border: 1px solid white;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  label: listItemsWrapper;
`;

export const listItem = () => css`
  margin: 10px 0px;
  min-width: 9rem;
  display: flex;
  width: 100%;
  label: listItem;
`;

export const imageExtraOverlayStyles = (theme: any) => css`
  justify-content: flex-start;
  align-items: flex-end;
  h1 {
    font-size: ${theme.fontSizes.h3};
  }
  label: overlayExtraStyles;
`;
