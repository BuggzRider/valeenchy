import CloseButton from "../Buttons/CloseButton";
import styles from "./styles.module.scss";
import { SidebarPropTypes } from "./types";

const Sidebar = ({
  children,
  isSidebarOpen,
  onClose,
  title,
  footer,
}: SidebarPropTypes) => {
  return (
    <div
      className={`${styles.sidebarContainer} ${
        isSidebarOpen ? styles.sidebarOpen : ""
      }`}
    >
      <div className={styles.sidebarHeaderContainer}>
        {title}
        <CloseButton onClickHandler={onClose} />
      </div>
      <div className={styles.sidebarChildContainer}>{children}</div>
      {footer}
    </div>
  );
};

export default Sidebar;
