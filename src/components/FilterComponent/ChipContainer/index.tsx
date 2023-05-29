import { FilterKeyTypes } from "config";
import { isEmpty } from "ramda";
import styles from "./styles.module.scss";
import { ChipContainerPropTypes } from "./types";

const ChipContainer = ({
  selectedFiltersObject = {},
  onChipClick,
}: ChipContainerPropTypes) => {
  const getFilter = (
    selectedFiltersObject: ChipContainerPropTypes["selectedFiltersObject"],
    filterKey: FilterKeyTypes
  ) => {
    if (typeof selectedFiltersObject[filterKey] === "string") {
      return (
        <div
          className={styles["chip"]}
          key={`${filterKey}_${selectedFiltersObject[filterKey]}`}
          data-filter={JSON.stringify({
            [filterKey]: selectedFiltersObject[filterKey],
          })}
        >
          {selectedFiltersObject[filterKey]}
        </div>
      );
    } else if (Array.isArray(selectedFiltersObject[filterKey])) {
      return (selectedFiltersObject[filterKey] as Array<string>)?.map(
        (filter: any) => (
          <div
            className={styles["chip"]}
            key={`${filterKey}_${filter}`}
            data-filter={JSON.stringify({ [filterKey]: filter })}
          >
            {filter}
          </div>
        )
      );
    }
  };

  return !isEmpty(selectedFiltersObject) ? (
    <div className={styles["chip-container"]} onClick={onChipClick}>
      {Object.keys(selectedFiltersObject).map((filterKey: any) =>
        getFilter(selectedFiltersObject, filterKey)
      )}
    </div>
  ) : null;
};

export default ChipContainer;
