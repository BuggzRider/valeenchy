import { css } from "@emotion/react";

export const button = (theme: any) => css`
  font-size: ${theme.fontSizes.h1};
  font-weight: ${theme.fontWeights.light};
  border: none;
  cursor: pointer;
  appearance: none;
  text-decoration: none;
  font-size: ${theme.fontSizes.h6};
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  box-shadow: 0 4px 6px rgb(0 0 0 / 0%), 0 1px 3px rgb(0 0 0 / 0%);
  padding: ${theme.space[1]}px 12px;
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.normal};
  label: button;
  &:hover {
    transform: translate(0, -2px);
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
  }
`;
