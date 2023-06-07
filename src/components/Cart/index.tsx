import dynamic from "next/dynamic";
import CartBody from "./CartBody";
import { useCartContext } from "./context";
import styles from "./styles.module.scss";

const Sidebar = dynamic(
  () => {
    return import("components/UI/Sidebar");
  },
  { ssr: false }
);

const Cart = () => {
  const { isCartPanelOpen, setIsCartPanelOpen } = useCartContext();
  return (
    <div className={styles.className}>
      <Sidebar
        isSidebarOpen={isCartPanelOpen}
        onClose={() => setIsCartPanelOpen(false)}
        title="Cart"
        footer={<div></div>}
      >
        <CartBody />
      </Sidebar>
    </div>
  );
};

export default Cart;
