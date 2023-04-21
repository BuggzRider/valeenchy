import { css } from "@emotion/react";

export const filterContainer = (theme: any) => css`
  font-weight: ${theme.fontWeights.normal};
  font-size: 14px;
  color: ${theme.colors.black};
  margin-bottom: ${theme.space[3]}px;
  border: 1px solid #eeeff1;
  border-radius: 3px;
  width: 100%;
  transition: all 1s;
  cursor: pointer;
  label: filterContainer;
`;
export const normalFilterContainer = (theme: any) => css`
  font-weight: ${theme.fontWeights.normal};
  font-size: 14px;
  padding: ${theme.space[2]}px ${theme.space[3]}px;
  color: ${theme.colors.black};
  border-bottom: 1px solid #eeeff1;
  width: 100%;
  transition: all 1s;
  cursor: pointer;
  label: normalFilterContainer;
  display: flex;
  justify-content: space-between;
`;
export const sortOptionsContainer = (theme: any) => css`
  font-weight: ${theme.fontWeights.light};
  font-size: 14px;
  margin: ${theme.space[2]}px 0px;
  color: ${theme.colors.black};
  border: 1px solid #eeeff1;
  width: 100%;
  border-radius: 3px;
  transition: all 1s;
  label: sortOptionsContainer;
`;
export const sortOption = (theme: any) => css`
  padding: ${theme.space[1]}px;
  color: ${theme.colors.black};
  width: 100%;
  transition: all 1s;
  label: sortOption;
  &:hover {
    background-color: #eeeff1;
  }
`;
