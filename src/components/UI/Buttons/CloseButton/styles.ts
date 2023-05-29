import { css } from "@emotion/react";

export const closeButtonStyles = (theme: any, closeButtonColor: string) => css`
  position: relative;
  margin-top: 1rem;
  background-color: transparent;
  transform: rotate(135deg);
  &,
  &::after {
    width: 2rem;
    height: 2px;
    background-color: ${closeButtonColor ? closeButtonColor : "white"};
    display: inline-block;
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }

  &::after {
    transform: rotate(-90deg);
  }
  label: closeButtonStyles;
`;

export const closeButtonContainer = (theme: any) => css`
  cursor: pointer;
  transition: all 0.5s;
  label: closeButtonContainer;
`;
