import Link from "next/link";
import styles from "./styles.module.scss";
import { PropTypes } from "./types";

const LinkButton = ({
  isLink,
  url,
  onClickHandler,
  extraStyles = "",
  label,
}: PropTypes) => {
  return (
    <Link
      className={`${isLink ? styles.link : styles.linkButton}  ${extraStyles}`}
      href={url || "javascript:void(0)"}
      onClick={onClickHandler}
    >
      {label}
    </Link>
  );
};

export default LinkButton;
