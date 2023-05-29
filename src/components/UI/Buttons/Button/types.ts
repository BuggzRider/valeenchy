import { SerializedStyles } from "@emotion/react";

export type PropTypes = {
  onClickHandler?: any;
  extraStyles?: (theme: any) => SerializedStyles;
  label: String;
};
