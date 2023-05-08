import { css } from "@emotion/react";

export const burgerButtonStyles = (theme: any) => css`
  position: relative;
  margin-top: 0.5rem;
  &,
  &::before,
  &::after {
    width: 1.5rem;
    height: 2px;
    background-color: white;
    display: inline-block;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }

  &::before {
    top: -0.5rem;
  }
  &::after {
    top: 0.5rem;
  }
  label: burgerButtonStyles;
`;

export const burgerButtonContainer = (theme: any) => css`
  cursor: pointer;
  margin-right: 30px;
  transition: all 0.5s;
  label: burgerButtonContainer;
`;