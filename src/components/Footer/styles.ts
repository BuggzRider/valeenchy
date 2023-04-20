import { css } from "@emotion/react";

export const footer = (theme: any) => css`
  width: 100%;
  background-color: ${theme.colors.footerBG};
  color: ${theme.colors.footerText};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 50vh;
  font-weight: ${theme.fontWeights.light};
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
  ${theme.breakpoints({
    flexDirection: ["column", "column", "row"],
    padding: ["1rem", "2rem", "4rem"],
  })}
  align-items: flex-start;
  label: footerInfoWrapper;
`;

export const footerInfoContainer = (theme: any) => css`
  flex: 1 0 50%;
  label: footerInfoContainer;
  & > * {
    ${theme.breakpoints({
      marginBottom: ["1rem", "2rem", "2rem"],
    })}
  }
`;

export const footerLogoContainer = css`
  width: 100%;
  label: footerLogoContainer;
`;

export const footerLinksWrapper = () => css`
  flex: 1 0 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  label: footerLinksWrapper;
`;

export const footerLinksContainer = () => css`
  display: flex;
  flex-wrap: wrap;
  height: 50%;
  label: footerLinksContainer;
`;

export const footerLogoLink = (theme: any) => css`
  color: ${theme.colors.black};
  text-decoration: none;
  label: footerLogoLink;
`;
