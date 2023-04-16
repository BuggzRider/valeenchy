import { css } from "@emotion/react";

export const layoutContainer = (theme: any) => css`
  width: 100%;
  max-width: ${theme.maxWidths[2]}px;
  min-height: 100vh;
  ${theme.breakpoints({
    padding: [
      `0 ${theme.space[1]}px`,
      `0 ${theme.space[2]}px`,
      `0 ${theme.space[3]}px`,
    ],
    fontSize: [theme.fontSizes.body, theme.fontSizes.h5, theme.fontSizes.h5],
  })}
`;
