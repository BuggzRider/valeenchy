import { useEffect } from "react";
import Spinner from "../Spinner";
import styles from "./styles.module.scss";
import { BackdropPropTypes } from "./types";

const Backdrop = ({
  show,
  showSpinner,
  spinnerText = "",
  spinnerColor = "",
  spinnerSize = "16rem",
  backdropBackgroundColor = "#0006",
  backdropPosition = "fixed",
}: BackdropPropTypes) => {
  useEffect(() => {
    if (show) {
      document.getElementsByTagName("HTML")[0].style.overflowY = "hidden";
    } else {
      document.getElementsByTagName("HTML")[0].style.overflowY = "auto";
    }
  }, [show]);

  return (
    <div
      className={`${styles.backdrop} ${
        show ? styles.backdropShow : styles.backdropHide
      }`}
      style={{
        backgroundColor: backdropBackgroundColor,
        position: backdropPosition,
      }}
    >
      {show && showSpinner && (
        <div className={styles.backdropChildren}>
          <Spinner
            fontSize={spinnerSize}
            textFontSize="3rem"
            text={spinnerText}
            color={spinnerColor}
          />
        </div>
      )}
    </div>
  );
};

export default Backdrop;
