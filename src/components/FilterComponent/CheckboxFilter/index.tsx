import { getSelectedOptions } from "../Filter";
import styles from "./styles.module.scss";
import { CheckboxFilterPropTypes } from "./types";

const CheckboxFilter = ({
  options,
  selectedFilters,
  onCheckboxFilterChange,
}: CheckboxFilterPropTypes) => {
  return (
    <ul
      className={styles.checkboxFilterContainer}
      onClick={onCheckboxFilterChange}
    >
      {options &&
        Object.entries(options)?.map((option: any) => (
          <li
            className={`${styles.checkboxFilterElement} ${
              option[1].count > 0 ? styles.checkboxFilterElementCount : null
            }`}
            id={option[0]}
            key={option[0]}
          >
            <div>
              <input
                type="checkbox"
                id={option[0]}
                checked={getSelectedOptions(
                  selectedFilters,
                  option[1]?.label || ""
                )}
                disabled={option[1].count === 0}
              />
              <label htmlFor={option[0]}> {option[1].label} </label>
            </div>
            <span>{option[1].count}</span>
          </li>
        ))}
    </ul>
  );
};

export default CheckboxFilter;
