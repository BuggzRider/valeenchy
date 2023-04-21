import { css } from "@emotion/react";

export const collapsibleComponentWrapper = (theme: any) => css`
  width: 100%;
  height: 100%;
  color: ${theme.colors.black};
  label: collapsibleComponentWrapper;
`;

export const collapsibleComponentHeaderWrapper = () => css`
  width: 100%;
  height: 100%;
  label: collapsibleComponentHeaderWrapper;
`;

export const collapsibleComponentHeader = (theme: any) => css`
  width: 100%;
  height: 100%;
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.xl};
  padding: ${theme.fontSizes.xxl} 0;
  border-bottom: 1px solid ${theme.colors.border};
  label: collapsibleComponentHeader;
`;

export const collapsibleComponentContainer = () => css`
  width: 100%;
  height: 100%;
  & > .Collapsible {
    border-bottom: 1px solid #eeeff1;
  }
  label: collapsibleComponentContainer;
`;

export const collapsibleComponentItem = (theme: any) => css`
  width: 100%;
  height: 100%;
  font-size: ${theme.fontSizes.h3};
  padding: ${theme.fontSizes.body} 0;
  font-weight: ${theme.fontWeights.light};
  label: collapsibleComponentContainer;
`;

export const collapsibleComponentItemHeadingWrapper = (theme: any) => css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.fontSizes.h3} 0;
  font-size: ${theme.fontSizes.h3};
  font-weight: ${theme.fontWeights.light};
  label: collapsibleComponentItemHeadingWrapper;
`;

export const collapsibleComponentItemHeading = () => css`
  width: 100%;
  height: 100%;
  label: collapsibleComponentItemHeading;
`;

export const collapsibleComponentItemHeadingArrow = () => css`
  width: 100%;
  height: 100%;
  position: relative;
  label: collapsibleComponentItemHeading;
  &:after {
    content: "";
    position: absolute;
    right: 1rem;
    width: 10px;
    height: 10px;
    border-top: 3px solid;
    border-right: 3px solid;
    margin-right: 2px;
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;
