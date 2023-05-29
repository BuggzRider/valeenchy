import { MouseEventHandler } from "react";
import { FilterOptionsTypes } from "../types";

export type CheckboxFilterPropTypes = {
  options: FilterOptionsTypes;
  selectedFilters: Array<string> | string;
  onCheckboxFilterChange: MouseEventHandler<HTMLUListElement>;
};
