import { css } from "@emotion/react";

export const navBarStyles = (theme: any) => css`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-arround;
  align-items: center;
  flex-wrap: no-wrap;
  color: ${theme.colors.black};
  position: relative;
  label: navBarStyles;
`;

export const navbarIconsContainer = css`
  display: flex;
  flex: 1 0 0;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: no-wrap;
  height: 100%;
  label: navbarIconsContainer;
`;

export const navbarIcon = (theme: any) => css`
  padding: ${theme.space[1]}px ${theme.space[2]}px;
  cursor: pointer;
  label: navbarIcon;
`;

export const navbarLogoContainer = css`
  display: flex;
  flex: 1 0 0;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: no-wrap;
  label: navbarLogoContainer;
`;

export const navbarLogoLink = (theme: any) => css`
  color: ${theme.colors.black};
  text-decoration: none;
  label: navbarLogoLink;
`;
