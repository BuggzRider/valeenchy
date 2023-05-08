import ReactSlider from "react-slider";
import styles from "./styles.module.scss";
import { RangeFilterPropTypes } from "./types";

const defaultSliderValues = [0, 100];
const RangeFilter = ({
  options,
  selectedValues = defaultSliderValues,
}: RangeFilterPropTypes) => {
  const onSliderChangeHandler = (value: Array<number>, thumbIndex: number) => {
    const clonedValues = [...selectedValues];
    clonedValues[thumbIndex] = value[thumbIndex];
  };

  const onInputChangeHandler = (value: any, thumbIndex: number) => {
    const clonedValues = [...selectedValues];
    clonedValues[thumbIndex] = value;
  };
  return (
    <div className={styles.rangeFilterContainer}>
      <ReactSlider
        className={styles.horizontal_slider}
        thumbClassName={styles.slider_thumbs}
        trackClassName={styles.slider_bar}
        min={options.min}
        max={options.max}
        defaultValue={defaultSliderValues}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        pearling
        minDistance={10}
        renderTrack={(props, state) => (
          <div
            {...props}
            className={`${styles.slider_bar} ${
              [0, 2].includes(state.index) ? styles.slider_bar_grey : ""
            }`}
          >
            {" "}
          </div>
        )}
        onChange={onSliderChangeHandler}
        value={selectedValues}
      />
      <div className={styles.numberInputWrapper}>
        <div className={styles.inputContainer}>
          <span>{options.symbol}</span>
          <input
            type="number"
            id="lower-range"
            className={styles.numberInput}
            value={selectedValues[0]}
            min={options.min}
            max={options.max}
            onChange={(e) => onInputChangeHandler(e, 0)}
          />
        </div>
        <span className={styles.seperator}>-</span>
        <div className={styles.inputContainer}>
          <span>{options.symbol}</span>
          <input
            type="number"
            id="upper-range"
            className={styles.numberInput}
            value={selectedValues[1]}
            min={options.min}
            max={options.max}
            onChange={(e) => onInputChangeHandler(e.target.value, 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default RangeFilter;
