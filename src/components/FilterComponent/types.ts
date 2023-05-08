import { FilterKeyTypes, FilterTypes } from "config";
import { SelectedFilterObject } from "./ChipContainer/types";

export type FilterOptionTypes = {
  label?: string;
  colorCode?: string;
  count?: string | number;
  min?: number;
  max?: number;
  symbol?: string;
  isSelected?: boolean;
};

export type FilterOptionsTypes = {
  [key in any]: FilterOptionTypes;
};

export type FilterType = {
  name: string;
  type: FilterTypes;
  key: FilterKeyTypes;
  options: FilterOptionsTypes;
};

export type FilterConfigType = {
  seperateFilter: Array<FilterType>;
  basicFilters: Array<FilterType>;
};

export type sortOptionsTypes = Array<{
  0: string;
  1: any;
}>;

export type FilterPropTypes = {
  filterConfig: FilterConfigType;
  selectedFilters: SelectedFilterObject;
};
