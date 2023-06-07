import { useState } from "react";
import CartContext from "./cart-context";
const CartContextProvider = (props: any) => {
  const [isCartPanelOpen, setIsCartPanelOpen] = useState(false);
  const [shippingQualifyMessage, setShippingQualifyMessage] = useState(
    "Congratulations! Your order qualifies for free shipping"
  );
  return (
    <CartContext.Provider
      value={{
        isCartPanelOpen,
        setIsCartPanelOpen,
        shippingQualifyMessage,
        setShippingQualifyMessage,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
