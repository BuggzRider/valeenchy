import styles from "./styles.module.scss";
import { ARROW_BUTTON_TYPES, PropTypes } from "./types";

const ArrowButton = ({
  onClickHandler,
  extraStyles = "",
  label,
  type,
  disabled,
}: PropTypes) => {
  return (
    <button
      className={`${styles.arrowButton} ${
        type === ARROW_BUTTON_TYPES.RIGHT ? styles.arrowButton_right : ""
      } ${extraStyles}`}
      onClick={onClickHandler}
      disabled={disabled}
    >
      <span>{label}</span>
    </button>
  );
};

export default ArrowButton;
