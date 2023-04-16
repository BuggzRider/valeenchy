import { SerializedStyles } from "@emotion/react";
import { MouseEventHandler } from "react";

export type PropTypes = {
  isLink: Boolean;
  url?: string;
  onClickHandler?: MouseEventHandler<HTMLButtonElement> | undefined;
  extraStyles?: (theme: any) => SerializedStyles;
  label: String;
};
