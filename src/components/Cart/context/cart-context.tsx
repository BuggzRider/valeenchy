import { createContext, useContext } from "react";
import { CartContextType } from "./types";

const CartContext = createContext<CartContextType>(null as never);

export const useCartContext = () => {
  const ctx = useContext<CartContextType>(CartContext);
  /* istanbul ignore if */
  if (!ctx) {
    throw new Error(
      "Cart context not available. Did you forget to include the <CartProvider> in your component hierarchy?"
    );
  }
  return ctx;
};

export default CartContext;
