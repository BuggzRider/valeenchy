import { getSelectedOptions } from "../Filter";
import styles from "./styles.module.scss";
import { ColorFilterPropsType } from "./types";

const ColorTypeFilter = ({
  options,
  selectedFilters,
  onColorFilterChange,
}: ColorFilterPropsType) => {
  return (
    <div className={styles.colorFilterContainer}>
      <ul className={styles.colorfilterListStyle} onClick={onColorFilterChange}>
        {options &&
          Object.entries(options)?.map((option: any) => (
            <li
              className={styles.colorFilter}
              style={{ backgroundColor: option[1]?.colorCode }}
              key={`${option[1]?.colorCode}`}
            >
              {getSelectedOptions(selectedFilters, option[1]?.label || "") && (
                <span className={styles.colorFilterSelected}>{""}</span>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ColorTypeFilter;
