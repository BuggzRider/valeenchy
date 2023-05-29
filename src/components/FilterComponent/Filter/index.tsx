import { FilterTypes } from "config";
import Collapsible from "react-collapsible";
import CheckboxFilter from "../CheckboxFilter";
import ColorTypeFilter from "../ColorTypeFilter";
import RangeFilter from "../RangeFilter";
import { FilterType } from "../types";
import styles from "./styles.module.scss";
import { FilterComponentType } from "./types";

export const getSelectedOptions = (
  selectedFilter: Array<string> | string,
  label: string
): boolean => {
  if (typeof selectedFilter === "string") {
    return selectedFilter === label;
  } else if (Array.isArray(selectedFilter)) {
    return selectedFilter.includes(label);
  }
  return false;
};

const Filter = ({
  filter,
  selectedFilters,
  onFilterChangeHandler,
}: FilterComponentType) => {
  const getFilterOptions = (filter: FilterType) => {
    switch (filter?.type) {
      case FilterTypes.RADIO:
        return (
          <div
            className={styles["filter-body"]}
            onClick={(e) => onFilterChangeHandler(e, filter.type)}
          >
            {filter?.options &&
              Object.entries(filter?.options)?.map((option) => (
                <p
                  key={option[0]}
                  className={`${styles["filter-body-option"]} ${
                    getSelectedOptions(
                      selectedFilters?.[filter?.key] || "",
                      option[1]?.label || ""
                    )
                      ? styles["filter-body-option-selected"]
                      : ""
                  }`}
                >
                  {option[1].label}
                </p>
              ))}
          </div>
        );
      case FilterTypes.CHECKBOX:
        return (
          <CheckboxFilter
            options={filter?.options}
            selectedFilters={selectedFilters?.[filter?.key] || ""}
            onCheckboxFilterChange={() => {}}
          />
        );
      case FilterTypes.RANGE:
        return (
          <RangeFilter
            options={filter?.options}
            selectedValues={
              selectedFilters?.[filter?.key] as unknown as Array<number>
            }
          />
        );
      case FilterTypes.COLOR:
        return (
          <ColorTypeFilter
            options={filter?.options}
            selectedFilters={selectedFilters?.[filter?.key] || ""}
            onColorFilterChange={() => {}}
          />
        );
    }
  };
  return (
    <div className={styles.filter}>
      <Collapsible
        easing={"cubic-bezier(0.215, 0.61, 0.355, 1)"}
        trigger={filter?.name || "Filter"}
        className={styles.Collapsible_filter}
        contentOuterClassName={styles.Collapsible__filter__content_outer}
        triggerClassName={styles.Collapsible__filter__trigger}
        triggerOpenedClassName={`${styles.Collapsible__filter__trigger} ${styles["is-open"]}`}
      >
        {getFilterOptions(filter)}
      </Collapsible>
    </div>
  );
};

export default Filter;
