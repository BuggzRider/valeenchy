import styles from "./styles.module.scss";
import { SpinnerPropTypes } from "./types";

const Spinner = ({
  color = "white",
  fontSize = "1.2rem",
  text = "",
  textFontSize = "0.5rem",
}: SpinnerPropTypes) => {
  return (
    <div className={styles.spinnerContainer}>
      <div
        className={styles.loader}
        style={{
          color: color,
          fontSize: fontSize,
          position: text ? "absolute" : "relative",
        }}
      ></div>
      {text && (
        <span
          className={styles.spinnerText}
          style={{ fontSize: textFontSize, color }}
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default Spinner;
