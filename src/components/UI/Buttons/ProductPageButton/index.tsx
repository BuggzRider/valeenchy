import styles from "./styles.module.scss";
import { ProductPageButtonProps } from "./types";
const ProductPageButton = (props: ProductPageButtonProps) => {
  const { onClick, isPrimary = false, children = "", extraStyles } = props;
  return (
    <button
      className={`${styles.productPageButtons} ${
        isPrimary ? styles.productPageButtonsPrimary : ""
      } ${extraStyles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ProductPageButton;
