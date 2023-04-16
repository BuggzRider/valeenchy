import { css } from "@emotion/react";

export const mediaOverlayContentWrapper = (
  theme: any,
  contentAlignment = "center"
) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.transparent};
  display: flex;
  justify-content: center;
  align-items: ${contentAlignment};
  z-index: ${theme.zIndexs[4]};
  label: mediaOverlayContentWrapper;
`;

export const mediaOverlayContentContainer = (theme: any) => css`
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${theme.breakpoints({
    maxWidth: [`100%`, `100%`, `100%`],
    margin: [
      `${theme.space[1]}px`,
      `${theme.space[2]}px`,
      `${theme.space[3]}px`,
    ],
  })}
  label: mediaOverlayContentContainer;
`;

export const mediaOverlayContentHeading = (theme: any) => css`
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeights.bold};
  ${theme.breakpoints({
    fontSize: [theme.fontSizes.xl, theme.fontSizes.xl, theme.fontSizes.xxl],
  })}
  margin-bottom: ${theme.fontSizes.xl};
  label: mediaOverlayContentHeading;
`;

export const mediaOverlayContentBody = (theme: any) => css`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.h1};
  font-weight: ${theme.fontWeights.light};
  margin-bottom: ${theme.fontSizes.xl};
  ${theme.breakpoints({
    fontSize: [theme.fontSizes.h2, theme.fontSizes.h2, theme.fontSizes.h1],
  })}
  label: mediaOverlayContentBody;
`;

export const mediaOverlayContentButtonContainer = (theme: any) => css`
  color: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.fontSizes.xl};
  label: mediaOverlayContentButtonContainer;
  &:first-of-type {
    margin-right: ${theme.fontSizes.body};
  }
`;

export const mediaOverlayContentButton = (theme: any) => css`
  &:first-of-type {
    margin-right: ${theme.fontSizes.body};
    margin-bottom: 0;
    label: mediaOverlayContentButton;
  }
`;
