import { SerializedStyles } from "@emotion/react";

export type PropTypes = {
  isLink: Boolean;
  url?: string;
  onClickHandler?: any;
  extraStyles?: (theme: any) => SerializedStyles;
  label: String;
};
