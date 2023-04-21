import { css } from "@emotion/react";
import { CARD_SLIDER_TYPES } from "./types";

export const cardSliderContainer = () => css`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  label: cardSliderContainer;
`;

export const cardSliderHeaderContainer = () => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  label: cardSliderHeaderContainer;
`;

export const cardSliderHeadingContainer = (theme: any) => css`
  label: cardSliderHeadingContainer;
  & > p {
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.black};
  }
`;

export const cardSliderHeaderControlsContainer = (theme: any) => css`
  display: flex;
  ${theme.breakpoints({
    display: ["none", "flex", "flex"],
  })}
  justify-content: flex-end;
  align-items: center;
  label: cardSliderHeaderControlsContainer;
  * {
    margin: 0 10px;
  }
`;

export const imageSlideshowContainer = (theme: any) => css`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: column;
  column-gap: 1.2rem;
  overflow-x: auto;
  touch-action: pan-y;
  -webkit-user-select: none;
  -webkit-user-drag: none;
  scroll-behavior: smooth;
  label: FiveImageCollageFive;
  &::-webkit-scrollbar {
    ${theme.breakpoints({
      display: ["", "none", "none"],
    })}
  }
`;

export const imageSlideshowImage = (theme: any, type: String) => css`
  width: ${type === CARD_SLIDER_TYPES.CIRCLE_IMAGE ? "200px" : "288px"};
  label: largeImageContainer;
`;
