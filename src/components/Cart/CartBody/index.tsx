import BorderProgressBar from "components/UI/BorderProgressBar";
import { BorderProgressBarPosition } from "components/UI/BorderProgressBar/types";
import ProductPageButton from "components/UI/Buttons/ProductPageButton";
import CartCollapsibleItems from "../CartCollapsibleItems";
import CartItemsList from "../CartItemsList";
import { useCartContext } from "../context";
import { cartItemsMock } from "../mock";
import styles from "./styles.module.scss";

const CartBody = () => {
  const { shippingQualifyMessage } = useCartContext();
  return (
    <div className={styles.cartBodyContainer}>
      <div className={styles.cartHeaderItems}>
        <div className={styles.shippingQualifyMessageContainer}>
          <span className={styles.shippingQualifyTextContainer}>
            <p className={styles.shippingQualifyMessage}>
              {shippingQualifyMessage}
            </p>
          </span>
          <BorderProgressBar
            color={"#eeeff1"}
            thickness={"4px"}
            position={BorderProgressBarPosition.BOTTOM}
            progress={90}
          />
        </div>
        <CartItemsList items={cartItemsMock} />
      </div>
      <div className={styles.cartFooterItems}>
        <CartCollapsibleItems />
        <div className={styles.shipmentTextContainer}>
          <em>Shipping & taxes calculated at checkout</em>
        </div>
        <ProductPageButton
          onClick={() => {}}
          isPrimary
          extraStyles={styles.cartButton}
        >
          Check Out
        </ProductPageButton>
      </div>
    </div>
  );
};

export default CartBody;
