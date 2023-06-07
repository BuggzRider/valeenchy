import styles from "./styles.module.scss";

const CloseButton = ({ onClickHandler, circled = false }: any) => {
  return (
    <button
      className={`${styles.closeButtonContainer} ${
        circled ? styles.circled : ""
      }`}
      onClick={onClickHandler}
    >
      <span className={styles.closeButtonStyles}>&nbsp;</span>
    </button>
  );
};

export default CloseButton;
