import { css } from "@emotion/react";

export const mediaFooterContentContainer = (theme: any) => css`
  color: ${theme.colors.black};
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
  font-weight: ${theme.fontWeights.bold};
  ${theme.breakpoints({
    fontSize: [theme.fontSizes.h5, theme.fontSizes.h5, theme.fontSizes.h5],
  })}
  margin: 0;
  margin-bottom: ${theme.fontSizes.disclaimer};
  label: mediaFooterContentHeading;
`;

export const mediaFooterContentBody1 = (theme: any) => css`
  font-weight: ${theme.fontWeights.light};
  margin-bottom: ${theme.fontSizes.caption};
  margin: 0;
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
