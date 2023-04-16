import { css } from "@emotion/react";

export const singleMediaContainer = (theme: any) => css`
  width: 100%;
  height: 100%;
  ${theme.breakpoints({
    borderRadius: [
      `${theme.space[3]}px`,
      `${theme.space[3]}px`,
      `${theme.space[2]}px`,
    ],
  })}
  position: relative;
  overflow: hidden;
  border: 4px solid transparent;
  label: singleMediaContainer;
  & > img {
    transition: all 1s ease-out;
    position: unset !important;
  }
  &>img: hover {
    transform: scale(1.05);
  }
  & > video {
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    pointer-events: none;
  }
`;
