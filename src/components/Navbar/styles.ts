import { css } from "@emotion/react";

export const navBarStyles = (theme: any) => css`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-arround;
  align-items: center;
  flex-wrap: no-wrap;
  color: ${theme.colors.black};
  label: navBarStyles;
`;
