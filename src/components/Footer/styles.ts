import { css } from "@emotion/react";

export const footer = (theme: any) => css`
  width: 100%;
  background-color: ${theme.colors.footerBG};
  color: ${theme.colors.footerText};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 50vh;
  font-weight: 500;
  ${theme.breakpoints({
    fontSize: [theme.fontSizes.body, theme.fontSizes.h5, theme.fontSizes.h5],
  })}
  label: footer;
`;

export const footerInnerWrapper = (theme: any) => css`
  max-width: ${theme.maxWidths[2]}px;
  height: 100%;
  label: footerInnerWrapper;
`;

export const footerInfoWrapper = (theme: any) => css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 4rem 4rem;
  label: footerInfoWrapper;
`;

export const footerInfoContainer = (theme: any) => css`
  width: 50%;
  label: footerInfoContainer;
  & > * {
    margin-bottom: 2rem;
  }
`;

export const footerLogoContainer = css`
  width: 100%;
  label: footerLogoContainer;
`;

export const footerLinksWrapper = (theme: any) => css`
  width: 50%;
  height: 90%;
  display: flex;
  justify-content: center;
  label: footerLinksWrapper;
`;

export const footerLinksContainer = (theme: any) => css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 60%;
  label: footerLinksContainer;
`;

export const footerLogoLink = (theme: any) => css`
  color: ${theme.colors.black};
  text-decoration: none;
  label: footerLogoLink;
`;
