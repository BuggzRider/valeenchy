import Filter from "./Filter";
import styles from "./styles.module.scss";
import { FilterPropTypes } from "./types";

const FilterComponent = ({
  filterConfig,
  selectedFilters,
}: FilterPropTypes) => {
  const { seperateFilter = [], basicFilters = [] } = filterConfig;

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.seperateFiltersContainer}>
        {seperateFilter.map((filter) => (
          <Filter
            key={filter.name}
            filter={filter}
            selectedFilters={selectedFilters}
            onFilterChangeHandler={() => {}}
          />
        ))}
      </div>
      <div className={styles.normalFiltersContainer}>
        <div className={styles.heading}>Filters</div>
        {basicFilters.map((filter) => (
          <Filter
            key={filter.name}
            filter={filter}
            selectedFilters={selectedFilters}
            onFilterChangeHandler={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
