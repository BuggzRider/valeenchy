import BorderProgressBar from "components/UI/BorderProgressBar";
import { BorderProgressBarPosition } from "components/UI/BorderProgressBar/types";
import CartItemsList from "../CartItemsList";
import { useCartContext } from "../context";
import { cartItemsMock } from "../mock";
import styles from "./styles.module.scss";

const CartBody = () => {
  const { shippingQualifyMessage } = useCartContext();
  return (
    <div className={styles.cartBodyContainer}>
      <div className={styles.shippingQualifyMessageContainer}>
        <span className={styles.shippingQualifyTextContainer}>
          <p className={styles.shippingQualifyMessage}>
            {shippingQualifyMessage}
          </p>
        </span>
        <BorderProgressBar
          color={"#eeeff1"}
          thickness={"4px"}
          position={BorderProgressBarPosition.RIGHT}
          progress={90}
        />
      </div>
      <CartItemsList items={cartItemsMock} />
    </div>
  );
};

export default CartBody;
