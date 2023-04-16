import { css } from "@emotion/react";

export const FiveImageCollageFive = (theme: any) => css`
  width: 100%;
  height: 100%;
  display: grid;
  ${theme.breakpoints({
    gridTemplateColumns: ["100%", "50% 50%", "50% 50%"],
    gridTemplateRows: ["50% 50%", "100%", "100%"],
  })}
  row-gap: ${theme.fontSizes.body};
  column-gap: ${theme.fontSizes.body};
  label: FiveImageCollageFive;
`;

export const largeImageContainer = (theme: any) => css`
  height: 100%;
  label: largeImageContainer;
  ${theme.breakpoints({
    gridRow: ["1", "unset", "unset"],
  })}
`;

export const smallImageContainer = (theme: any) => css`
  display: grid;
  column-gap: ${theme.fontSizes.body};
  ${theme.breakpoints({
    display: ["inline-grid", "grid", "grid"],
    gridTemplateColumns: ["repeat(4, 65%)", "100%", "49% 49%"],
    overflowX: ["auto", "hidden", "hidden"],
  })}
  align-content: space-between;
  label: smallImageContainer;
`;
