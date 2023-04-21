import { colorFilterOptionsType } from "./ColorTypeFilter/types";
import { countFilterTypes } from "./FilterWithCounts/types";

export type FilterOptionTypes = {
  key: String;
  label: String;
  count: Number;
  selected: Boolean;
};

export type sortOptionsTypes = {
  key: String;
  order: String;
  label: String;
};

export type FilterPropTypes = {
  sortFilterOptions: Array<sortOptionsTypes>;
  colorFilterOptions: Array<colorFilterOptionsType>;
  productTypeFilterOptions: Array<countFilterTypes>;
  availableFilterOptions: Array<countFilterTypes>;
};
