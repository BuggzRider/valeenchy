import { css } from "@emotion/react";

export const mediaFooterContentContainer = (theme: any) => css`
  color: ${theme.colors.white};
  position: relatice;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  label: mediaFooterContentContainer;
  line-height: ${theme.lineHeights.disclaimer};
  padding: ${theme.space[2]}px;
`;

export const mediaFooterContentHeading = (theme: any) => css`
  font-weight: ${theme.fontWeights.normal};
  line-height: ${theme.lineHeights.body};
  font-size: ${theme.fontSizes.body};
  margin: 0;
  margin-bottom: ${theme.fontSizes.disclaimer};
  label: mediaFooterContentHeading;
`;

export const mediaFooterContentBody1 = (theme: any) => css`
  font-weight: ${theme.fontWeights.light};
  margin-bottom: ${theme.fontSizes.caption};
  ${theme.breakpoints({
    fontSize: [
      theme.fontSizes.caption,
      theme.fontSizes.caption,
      theme.fontSizes.caption,
    ],
  })}
  label: mediaFooterContentBody;
`;

export const mediaFooterContentBody2 = (theme: any) => css`
  font-weight: ${theme.fontWeights.ultraLight};
  ${theme.breakpoints({
    fontSize: [
      theme.fontSizes.body,
      theme.fontSizes.body,
      theme.fontSizes.body,
    ],
  })}
  label: mediaFooterContentBody;
`;
