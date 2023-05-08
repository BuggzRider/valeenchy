import { css } from "@emotion/react";

export const sidebarContainer = (theme: any) => css`
  ${theme.breakpoints({
    display: ["flex", "flex", "none"],
  })}
  label: sidebarContainer;
`;

export const sidebarListWrapper = (theme: any) => css`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5500;
  opacity: 0;
  width: 0;
  background-color: #000;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  label: sidebarListWrapper;
`;

export const sidebarChildContainer = (theme: any) => css`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  label: sidebarListContainer;
`;

export const sidebarListContainerOpen = (theme: any) => css`
  opacity: 1;
  width: 100%;
  label: sidebarListContainerOpen;
`;

export const sidebarListCloseButtonContainer = (theme: any) => css`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  & > div {
    margin: 1rem;
  }
  label: sidebarListCloseButtonContainer;
`;
