import { css } from "@emotion/react";

export const imageSlideshowContainer = (theme: any) => css`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: column;
  column-gap: ${theme.fontSizes.body};
  overflow-x: auto;
  label: FiveImageCollageFive;
`;

export const imageSlideshowImage = (theme: any) => css`
  width: 200px;
  label: largeImageContainer;
`;

export const smallImageContainer = (theme: any) => css`
  display: grid;
  column-gap: ${theme.fontSizes.body};
  ${theme.breakpoints({
    display: ["inline-grid", "grid", "grid"],
    gridTemplateColumns: ["repeat(auto-fit, 65%)", "100%", "49% 49%"],
    overflowX: ["auto", "hidden", "hidden"],
  })}
  align-content: space-between;
  label: smallImageContainer;
`;
