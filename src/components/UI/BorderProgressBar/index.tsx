import styles from "./styles.module.scss";
import { BorderProgressBarPosition, BorderProgressBarPropTypes } from "./types";
const BorderProgressBar = ({
  color,
  thickness,
  position,
  progress = 0,
}: BorderProgressBarPropTypes) => {
  const isForSides = [
    BorderProgressBarPosition.LEFT,
    BorderProgressBarPosition.RIGHT,
  ].includes(position);
  return (
    <div
      className={`${styles.borderProgressBar} ${styles[position]}`}
      style={{
        backgroundColor: color,
        height: isForSides ? `${progress}%` : thickness,
        width: isForSides ? thickness : `${progress}%`,
      }}
    ></div>
  );
};

export default BorderProgressBar;
