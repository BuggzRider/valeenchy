/* eslint-disable @typescript-eslint/no-unused-vars */
import { css } from "@emotion/react";

export const threeImageCollage = (theme: any) => css`
  width: 100%;
  height: 100%;
  display: grid;
  row-gap: ${theme.fontSizes.body};
  margin: 1rem 0;
  label: threeImageCollage;
`;

export const landscapeImageContainer = (theme: any) => css`
  height: 50vh;
  label: landscapeImageContainer;
`;

export const footerImagesContainer = (theme: any) => css`
  display: grid;
  ${theme.breakpoints({
    gridTemplateColumns: ["100%", "100%", "49% 49%"],
  })}
  column-gap: ${theme.fontSizes.body};
  row-gap: 1rem;
  align-content: space-between;
  label: footerImagesContainer;
`;

export const footerImage = (theme: any) => css`
  height: 45vh;
  label: footerImage;
`;
