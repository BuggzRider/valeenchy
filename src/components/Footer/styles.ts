import { css } from "@emotion/react";

export const footer = (theme: any) => css`
  width: 100%;
  background-color: ${theme.colors.footerBG};
  color: ${theme.colors.footerText};
  max-width: ${theme.maxWidths[2]}px;
  height: 50vh;
  ${theme.breakpoints({
    padding: [
      `0 ${theme.space[1]}px`,
      `0 ${theme.space[2]}px`,
      `0 ${theme.space[3]}px`,
    ],
    fontSize: [theme.fontSizes.body, theme.fontSizes.h5, theme.fontSizes.h5],
  })}
  label: footer;
`;
