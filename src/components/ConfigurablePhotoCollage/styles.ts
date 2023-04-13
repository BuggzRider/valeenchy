import { css } from "@emotion/react";

export const singleImageContainer = (theme: any) => css`
  width: 100%;
  ${theme.breakpoints({
    maxWidth: [`${theme.maxWidths[0]}px`, "97.875%", `${theme.maxWidths[2]}px`],
    height: ["70vh", "70vh", "70vh"],
    margin: [
      `${theme.space[0]}px`,
      `${theme.space[1]}px`,
      `${theme.space[2]}px`,
    ],
    borderRadius: [
      `${theme.space[3]}px`,
      `${theme.space[3]}px`,
      `${theme.space[2]}px`,
    ],
  })}
  position: relative;
  overflow: hidden;
  border-radius: ${theme.space[2]}px;
  border: 4px solid transparent;
  label: singleImageContainer;
  & > img {
    transition: all 1s ease-out;
    ${theme.breakpoints({
      transform: [`scale(1.1)`, `scale(1)`, `scale(1)`],
    })}
  }
  &>img: hover {
    transform: scale(1.05);
  }
`;

export const singleVideoContainer = (theme: any) => css`
  width: 100%;
  ${theme.breakpoints({
    maxWidth: [`${theme.maxWidths[0]}px`, "97.875%", `${theme.maxWidths[2]}px`],
    height: ["70vh", "70vh", "70vh"],
    margin: [
      `${theme.space[0]}px`,
      `${theme.space[1]}px`,
      `${theme.space[2]}px`,
    ],
    borderRadius: [
      `${theme.space[3]}px`,
      `${theme.space[3]}px`,
      `${theme.space[2]}px`,
    ],
  })}
  position: relative;
  overflow: hidden;
  border-radius: ${theme.space[2]}px;
  border: 4px solid transparent;
  label: singleVideoContainer;
  & > video {
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    pointer-events: none;
  }
`;

export const singleImageContentWrapper = (theme: any) => css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.transparent};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: ${theme.zIndexs[4]};
  label: singleImageContentWrapper;
`;

export const singleImageContentContainer = (theme: any) => css`
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${theme.breakpoints({
    maxWidth: [`100%`, `100%`, `100%`],
    margin: [
      `${theme.space[1]}px`,
      `${theme.space[2]}px`,
      `${theme.space[3]}px`,
    ],
    padding: [
      `${theme.space[0]}px`,
      `${theme.space[3]}px`,
      `${theme.space[8]}px`,
    ],
  })}
  label: singleImageContentContainer;
  * {
    margin-bottom: ${theme.fontSizes.xl};
  }
`;

export const singleImageContentHeading = (theme: any) => css`
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeights.bold};
  ${theme.breakpoints({
    fontSize: [theme.fontSizes.xl, theme.fontSizes.xl, theme.fontSizes.xxl],
  })}
  label: singleImageContentHeading;
`;

export const singleImageContentBody = (theme: any) => css`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.h1};
  font-weight: ${theme.fontWeights.light};
  text-align: center;
  ${theme.breakpoints({
    fontSize: [theme.fontSizes.h2, theme.fontSizes.h2, theme.fontSizes.h1],
  })}
  label: singleImageContentBody;
`;

export const singleImageContentButtonContainer = (theme: any) => css`
  color: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  label: singleImageContentButtonContainer;
  &:first-of-type {
    margin-right: ${theme.fontSizes.body};
  }
`;

export const singleImageContentButton = (theme: any) => css`
  &:first-of-type {
    margin-right: ${theme.fontSizes.body};
    margin-bottom: 0;
    label: singleImageContentButton;
  }
`;
