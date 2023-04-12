import { css } from "@emotion/react";

export const singleImageContainer = (theme: any) => css`
  width: 100%;
  ${theme.breakpoints({
    maxWidth: [
      `${theme.maxWidths[0]}px`,
      `${theme.maxWidths[1]}`,
      `${theme.maxWidths[2]}px`,
    ],
    height: ["90vh", "80vh", "70vh"],
  })}
  position: relative;
  overflow: hidden;
  border-radius: ${theme.space[2]}px;
  border: 4px solid transparent;
  margin: ${theme.space[2]}px;
  label: singleImageContainer;
  transition: all 1s linear 1s;
  & > img {
    position: unset !important;
    transition: all 1s ease-out;
  }
  &>img: hover {
    transform: scale(1.05);
  }
`;

export const singleImageContentContainer = (theme: any) => css`
  background-color: #fff0;
  padding: 60px;
  ${theme.breakpoints({
    maxWidth: [
      `calc(50% - ${theme.space[2]}px)`,
      `calc(50% - ${theme.space[3]}px)`,
      `calc(50% - ${theme.space[1]}px)`,
    ],
    margin: [
      `${theme.space[1]}px`,
      `${theme.space[2]}px`,
      `${theme.space[3]}px`,
    ],
  })}
`;
