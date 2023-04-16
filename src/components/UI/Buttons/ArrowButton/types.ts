import { SerializedStyles } from "@emotion/react";
import { MouseEventHandler } from "react";

export enum ARROW_BUTTON_TYPES {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

export type PropTypes = {
  onClickHandler?: MouseEventHandler<HTMLButtonElement> | undefined;
  extraStyles?: (theme: any) => SerializedStyles;
  label: String;
  type: ARROW_BUTTON_TYPES;
  disabled: boolean | undefined;
};
