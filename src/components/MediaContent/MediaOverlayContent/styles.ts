import { css } from "@emotion/react";
import { flash } from "styles/keyframes";

export const mediaOverlayContentWrapper = (
  theme: any,
  contentAlignment = "center"
) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.transparent};
  display: flex;
  justify-content: center;
  align-items: ${contentAlignment};
  z-index: ${theme.zIndexs[4]};
  label: mediaOverlayContentWrapper;
`;

export const mediaOverlayContentContainer = (theme: any) => css`
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${theme.breakpoints({
    maxWidth: [`100%`, `100%`, `100%`],
    margin: [
      `${theme.space[1]}px`,
      `${theme.space[2]}px`,
      `${theme.space[3]}px`,
    ],
  })}
  label: mediaOverlayContentContainer;
`;

export const mediaOverlayContentHeading = (theme: any) => css`
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeights.bold};
  ${theme.breakpoints({
    fontSize: [theme.fontSizes.xl, theme.fontSizes.xl, theme.fontSizes.xxl],
  })}
  margin-bottom: 5rem;
  label: mediaOverlayContentHeading;
`;

export const mediaOverlayContentBody = (theme: any) => css`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.h1};
  font-weight: ${theme.fontWeights.light};
  margin-bottom: ${theme.fontSizes.xl};
  ${theme.breakpoints({
    fontSize: [theme.fontSizes.h2, theme.fontSizes.h2, theme.fontSizes.h1],
  })}
  label: mediaOverlayContentBody;
`;

export const mediaOverlayContentButtonContainer = (theme: any) => css`
  color: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.fontSizes.xl};
  label: mediaOverlayContentButtonContainer;
  &:first-of-type {
    margin-right: ${theme.fontSizes.body};
  }
`;

export const mediaOverlayContentButton = (theme: any) => css`
  &:first-of-type {
    margin-right: ${theme.fontSizes.body};
    margin-bottom: 0;
    label: mediaOverlayContentButton;
  }
`;

/*============== Custom Overlay Children =============*/

export const mediaOverlayExtraStyles = (theme: any) => css`
  height: 100%;
  label: mediaOverlayExtraStyles;
`;
export const customOverlayChildrenContainer = (theme: any) => css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 4rem;
  label: customOverlayChildrenContainer;
`;

export const customOverlayLinksContainer = (theme: any) => css`
  display: flex;
  flex-direction: column;
  label: customOverlayLinksContainer;
`;

export const linkStyles = (theme: any) => css`
  text-decoration: none;
  border: none;
  appearance: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  background-color: #fff;
  border-radius: 50%;
  transition: all 1s ease;
  margin-bottom: 1rem;
  &:hover {
    transform: rotate(45deg);
  }
  label: linkStyles;
`;

export const linkItemsContainer = (theme: any) => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  label: linkItemsContainer;
`;

export const linkImageStyles = (theme: any) => css`
  label: linkImageStyles;
`;

export const linkTextStyles = (theme: any) => css`
  margin-left: 1rem;
  animation: ${flash} 1s infinite;
  label: linkTextStyles;
`;

export const customOverlayButtonContainer = (theme: any) => css`
  label: customOverlayButtonContainer;
`;

export const customButtonStyles = (theme: any) => css`
  color: ${theme.colors.white};
  background-color: ${theme.colors.black};
  margin-left: 1rem;
  &:hover {
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
  }
  label: customButtonStyles;
`;

