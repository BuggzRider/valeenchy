import { SelectedFilterObject } from "../ChipContainer/types";
import { FilterType } from "../types";

export type FilterComponentType = {
  onFilterChangeHandler: Function;
  filter: FilterType;
  selectedFilters: SelectedFilterObject;
};
