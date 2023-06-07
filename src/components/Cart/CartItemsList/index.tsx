import SingleMediaRenderer from "components/SingleMediaRenderer";
import { SingleMediaOptions } from "components/SingleMediaRenderer/types";
import CloseButton from "components/UI/Buttons/CloseButton";
import NumberCounter from "components/UI/NumberCounter/NumberCounter";
import styles from "./styles.module.scss";
import { CartItemListPropType, CartItemPropTypes } from "./types";

const CartItem = ({ itemData }: CartItemPropTypes) => {
  return (
    <div className={styles.cartItemWrapper}>
      <div className={styles.cartItemContainer}>
        <SingleMediaRenderer
          url={itemData.imageSrc}
          type={SingleMediaOptions.IMAGE}
          alt={itemData.name}
          mediaStyles={styles.cartItemImageMedia}
          containerStyles={styles.cartItemImageContainer}
        />
        <div className={styles.cartItemDetailsContainer}>
          <p className={styles.cartItemDetailsHeading}>{itemData.name}</p>
          <p className={styles.cartItemDetailsSize}>{itemData.size}</p>
          <p className={styles.cartItemDetailsFinalPrize}>
            {itemData.totalPrize}
          </p>
          <NumberCounter
            min={0}
            max={10}
            onChange={() => {}}
            value={itemData.quantity}
          />
        </div>
      </div>
      <CloseButton onClickHandler={() => {}} circled />
    </div>
  );
};
const CartItemsList = ({ items }: CartItemListPropType) => {
  return (
    <div className={styles.cartItemsListContainer}>
      {items.map((item) => {
        return <CartItem key={item.name} itemData={item} />;
      })}
    </div>
  );
};

export default CartItemsList;
