import { css } from "@emotion/react";

export const navBarListItemContainer = (theme: any) => css`
  font-weight: ${theme.fontWeights.normal};
  padding: ${theme.space[2]}px ${theme.space[3]}px;
  color: ${theme.colors.black};
  transition: all 1s;
  label: navBarListItemContainer;
`;

export const navBarListItemLink = (theme: any) => css`
  color: ${theme.colors.black};
  text-decoration: none;
  label: navBarListItemLink;
  cursor: pointer;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${theme.colors.black};
    transform-origin: bottom right;
    transition: transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;
