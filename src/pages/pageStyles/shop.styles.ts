import { css } from "@emotion/react";

export const shopPageContainer = (theme: any) => css`
  width: 100%;
  height: 100%;
  lable: shopPageContainer;
`;

export const shopPageSectionContainer = (theme: any) => css`
  width: 100%;
  height: 100%;
  lable: shopPageSectionContainer;
`;

// ============== Filter ===============//

export const shopPageFilterContainer = (theme: any) => css`
  flex: 0 0 25%;
  lable: shopPageFilterContainer;
`;

export const shopPageListContainer = (theme: any) => css`
  display: flex;
  align-items: flex-start;
  lable: shopPageSectionContainer;
`;

export const shopPageItemsContainer = (theme: any) => css`
  flex: 1 1 70%;
  display: flex;
  flex-wrap: wrap;
  lable: shopPageItemsContainer;
`;

export const shopPageItemContainer = (theme: any) => css`
  width: 330px;
  margin: 0.5rem;
  lable: shopPageItemContainer;
`;

export const shopPageItemMediaStyles = (theme: any) => css`
  object-fit: cover;
  lable: shopPageItemMediaStyles;
`;

export const shopPageItemContainerStyles = (theme: any) => css`
  width: 100%;
  height: 70%;
  lable: shopPageItemContainerStyles;
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
