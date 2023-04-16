import { css } from "@emotion/react";

export const button = (theme: any) => css`
  font-family: futura-pt, sans-serif;
  font-size: ${theme.fontSizes.h1};
  font-weight: ${theme.fontWeights.light};
  border: none;
  cursor: pointer;
  appearance: none;
  text-decoration: none;
  border-radius: ${theme.borderRadius[0]}px;
  font-size: ${theme.fontSizes.h6};
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  box-shadow: 0 4px 6px rgb(0 0 0 / 0%), 0 1px 3px rgb(0 0 0 / 0%);
  padding: ${theme.space[2]}px ${theme.space[3]}px;
  ${theme.breakpoints({
    padding: [
      `${theme.space[2]}px ${theme.space[2]}px`,
      `${theme.space[2]}px ${theme.space[3]}px`,
      `${theme.space[2]}px ${theme.space[3]}px`,
    ],
    fontSize: [theme.fontSizes.body, theme.fontSizes.h5, theme.fontSizes.h5],
  })}
  label: button;
  &:hover {
    transform: translate(0, -2px);
  }
`;

export const buttonLink = (theme: any) => css`
  font-family: futura-pt, sans-serif;
  color: ${theme.colors.white};
  text-decoration: none;
  label: navBarListItemLink;
  cursor: pointer;
  position: relative;
  ${theme.breakpoints({
    fontSize: [theme.fontSizes.h6, theme.fontSizes.h5, theme.fontSizes.h5],
  })}
  font-weight: ${theme.fontWeights.ultraLight};
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${theme.colors.white};
    transform-origin: bottom right;
    transition: transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  label: buttonLink;
`;
