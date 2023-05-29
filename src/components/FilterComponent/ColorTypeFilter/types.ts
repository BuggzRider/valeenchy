import { MouseEventHandler } from "react";
import { FilterOptionTypes } from "../types";

export type ColorFilterPropsType = {
  options: FilterOptionTypes;
  selectedFilters: Array<string> | string;
  onColorFilterChange: MouseEventHandler<HTMLUListElement>;
};
