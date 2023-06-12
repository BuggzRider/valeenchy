import { useEffect, useRef } from "react";
import Backdrop from "../BackDrop";
import CloseButton from "../Buttons/CloseButton";
import styles from "./styles.module.scss";
import { SidebarPropTypes } from "./types";

const SidebarComponent = ({
  children,
  isSidebarOpen,
  onClose,
  title,
  footer,
}: SidebarPropTypes) => {
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (
        isSidebarOpen &&
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isSidebarOpen, onClose]);
  return (
    <>
      <Backdrop show={isSidebarOpen} />
      <div
        className={`${styles.sidebarContainer} ${
          isSidebarOpen ? styles.sidebarOpen : ""
        }`}
        ref={containerRef}
      >
        <div className={styles.sidebarHeaderContainer}>
          <h1>{title}</h1>
          <CloseButton onClickHandler={onClose} />
        </div>
        <div className={styles.sidebarChildContainer}>{children}</div>
        {footer}
      </div>
    </>
  );
};

export default SidebarComponent;
