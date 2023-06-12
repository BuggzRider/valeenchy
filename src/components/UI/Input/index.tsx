import styles from "./styles.module.scss";
import { InputPropTypes, InputTypes } from "./types";
const Input = ({ type, extraStyles, ...props }: InputPropTypes) => {
  const getInputComponent = (type: InputTypes) => {
    switch (type) {
      case InputTypes.TEXTAREA:
        return (
          <textarea
            className={`${styles.customInputs__textarea} ${extraStyles}`}
            {...props}
          />
        );
      case InputTypes.TEXT:
        return (
          <div className={styles.customInputs}>
            <input
              type={type}
              className={`${styles.customInputs__input} ${extraStyles}`}
              {...props}
            />
            <label htmlFor={props.id} className={styles.customInputs__label}>
              {props.label}
            </label>
          </div>
        );
      default:
        return null;
    }
  };
  return getInputComponent(type);
};

export default Input;
