import { css } from "@emotion/react";

export const sortFilterContainer = (theme: any) => css`
  font-weight: ${theme.fontWeights.normal};
  font-size: 14px;
  color: ${theme.colors.black};
  margin-bottom: ${theme.space[3]}px;
  padding: 16px 8px;
  border: 1px solid #eeeff1;
  border-radius: 3px;
  width: 25%;
  transition: all 1s;
  cursor: pointer;
  label: filterContainer;
`;
