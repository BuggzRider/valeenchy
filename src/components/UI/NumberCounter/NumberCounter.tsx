import { Minus, Plus } from "./Icons";
import styles from "./styles.module.scss";

const NumberCounter = ({ min = 0, max = Math.min(), onChange, value }: any) => {
  return (
    <div className={styles.numberCounter}>
      <button
        className={styles.controls}
        onClick={() => onChange(min === value ? value : value - 1)}
      >
        <Minus className={styles.icon} />
      </button>
      <span className={styles.inputControls}>
        <input
          type="number"
          id="numberInput"
          className={styles.inputField}
          min={min}
          max={max}
          readOnly
          value={value}
        />
      </span>
      <button className={styles.controls} onClick={() => onChange(value + 1)}>
        <Plus className={styles.icon} />
      </button>
    </div>
  );
};

export default NumberCounter;
