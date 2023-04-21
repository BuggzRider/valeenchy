import { css } from "@emotion/react";

export const homePageContainer = (theme: any) => css`
  width: 100%;
  height: 100%;
  lable: homePageContainer;
`;

export const homePageSectionContainer = (theme: any) => css`
  width: 100%;
  height: 100%;
  lable: homePageSectionContainer;
`;

// ============== Center Image ===============//

export const homePageCenterImageMediaStyles = (theme: any) => css`
  object-fit: cover;
  ${theme.breakpoints({
    transform: [`scale(1.1)`, `scale(1)`, `scale(1)`],
  })}
  lable: homePageCenterImageMediaStyles;
`;

export const homePageCenterImageContainerStyles = (theme: any) => css`
  width: 100%;
  ${theme.breakpoints({
    height: ["70vh", "70vh", "68vh"],
  })}
  lable: homePageCenterImageContainerStyles;
`;

export const homePageCenterOverlayTextContainerStyles = (theme: any) => css`
  align-items: flex-end;
  lable: homePageCenterOverlayTextContainerStyles;
`;

// ============== Product Images ===============//

export const homePageCircleProductSliderContainer = (theme: any) => css`
  width: 100%;
  margin-top: 6rem;
  lable: homePageCircleProductSliderContainer;
`;

export const homePageSquareProductSliderContainer = (theme: any) => css`
  width: 100%;
  margin-top: 4rem;
  lable: homePageCircleProductSliderContainer;
`;

// ============== Collage ===============//

export const homePageCollageContainer = (theme: any) => css`
  width: 100%;
  margin-top: 6rem;
  lable: homePageCircleProductSliderContainer;
`;

export const homePageReverseCollageContainer = (theme: any) => css`
  width: 100%;
  margin-top: 2rem;
  lable: homePageCircleProductSliderContainer;
`;
