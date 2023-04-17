import { css } from "@emotion/react";

export const layoutContainer = (theme: any) => css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  ${theme.breakpoints({
    fontSize: [theme.fontSizes.body, theme.fontSizes.h5, theme.fontSizes.h5],
  })}
`;

export const layoutContainerInner = (theme: any) => css`
  width: 100%;
  max-width: ${theme.maxWidths[2]}px;
  ${theme.breakpoints({
    padding: [
      `0 ${theme.space[1]}px`,
      `0 ${theme.space[2]}px`,
      `0 ${theme.space[3]}px`,
    ],
  })}
`;
