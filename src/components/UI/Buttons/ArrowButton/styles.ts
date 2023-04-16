import { css } from "@emotion/react";

export const arrowButton = (theme: any) => css`
  display: block;
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f2f5fa;
  transition: opacity 0.3s;
  cursor: pointer;

  & > span {
    position: absolute !important;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    border-top: 1.5px solid;
    border-right: 1.5px solid;
    margin-right: 2px;
  }

  &[disabled] {
    opacity: 0.4;
    color: #70747d;
    cursor: default;
  }
}
`;

export const leftArrowbutton = (theme: any) => css`
  &:after {
    transform: translate(-50%, -50%) rotate(-135deg);
  }
`;

export const rightArrowbutton = (theme: any) => css`
  &:after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;
