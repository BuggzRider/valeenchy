import Input from "components/UI/Input";
import { InputTypes } from "components/UI/Input/types";
import Collapsible from "react-collapsible";
import styles from "./styles.module.scss";
const CartCollapsibleItems = () => {
  return (
    <div className={styles.cartCollapsible}>
      <Collapsible
        easing={"cubic-bezier(0.215, 0.61, 0.355, 1)"}
        trigger="Special instructions for seller"
        className={styles.collapsible__component}
        contentOuterClassName={styles.collapsible__component__content_outer}
        triggerClassName={styles.collapsible__component__trigger}
        triggerOpenedClassName={`${styles.collapsible__component__trigger} ${styles["is-open"]}`}
      >
        <Input
          type={InputTypes.TEXTAREA}
          placeholder="Special instructions for seller"
          onChange={() => {}}
        />
      </Collapsible>
      <Collapsible
        easing={"cubic-bezier(0.215, 0.61, 0.355, 1)"}
        trigger="Estimate shipping"
        className={styles.collapsible__component}
        contentOuterClassName={styles.collapsible__component__content_outer}
        triggerClassName={styles.collapsible__component__trigger}
        triggerOpenedClassName={`${styles.collapsible__component__trigger} ${styles["is-open"]}`}
      >
        <div>hello</div>
      </Collapsible>
    </div>
  );
};

export default CartCollapsibleItems;
