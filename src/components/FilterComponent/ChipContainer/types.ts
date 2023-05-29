import { FilterKeyTypes } from "config";
import { MouseEventHandler } from "react";

export type SelectedFilterObject = {
  [key in FilterKeyTypes]?: string | Array<string>;
};
export type ChipContainerPropTypes = {
  selectedFiltersObject: SelectedFilterObject;
  onChipClick: MouseEventHandler;
};
