import styles from "./styles.module.scss";
import { ItemStockLabelProps } from "./types";
const ItemStockLabel = ({ noOfItems }: ItemStockLabelProps) => {
  const getStockOption = (noOfItems: number) => {
    if (noOfItems === 0) {
      return {
        color: styles.dangerBackgroundColor,
        text: "Item is out of stock",
      };
    } else if (noOfItems > 0 && noOfItems < 10) {
      return {
        color: styles.warnBackgroundColor,
        text: `Only ${noOfItems} left in stock`,
      };
    } else {
      return {
        color: styles.successBackgroundColor,
        text: "Item is in stock",
      };
    }
  };
  const selectedStockOptions = getStockOption(noOfItems);
  return (
    <div className={styles.stockLabel}>
      <span className={`${styles.breathingIcon} ${selectedStockOptions.color}`}>
        <p>{selectedStockOptions.text}</p>
      </span>
    </div>
  );
};

export default ItemStockLabel;
