import { css } from "@emotion/react";

export const imageOverlay = (theme: any) => css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.black};
  opacity: 0.1;
  label: imageOverlay;
`;
