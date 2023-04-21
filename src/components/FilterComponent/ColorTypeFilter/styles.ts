import { css } from "@emotion/react";

export const colorFilterContainer = () => css`
  display: inline-block;
  border-bottom: 1px solid #eeeff1;
  width: 100%;
  height: 170px;
  label: colorFilterContainer;
  list-style: none;
`;

export const filterListStyle = () => css`
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 62%;
  flex-wrap: wrap;
  margin: 0 8px;
`;

export const colorFilter = (key: any) => css`
  display: block;
  position: relative;
  width: 32px;
  height: 32px;
  margin: 0;
  border-radius: 100%;
  cursor: pointer;
  background-color: ${key};
`;

export const visiblityHidden = () => css`
  visibility: hidden;
`;
