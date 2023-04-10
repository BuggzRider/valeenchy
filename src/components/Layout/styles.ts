import { css } from "@emotion/react";

export const layoutContainer = (theme: any) => css`
  width: 100%;
  max-width: ${theme.maxWidths[2]}px;
  min-height: 100vh;
  padding: 0 ${theme.space[3]}px;
`;
