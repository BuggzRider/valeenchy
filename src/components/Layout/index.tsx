import Cart from "components/Cart";
import CartContextProvider from "components/Cart/context/cart-context-provider";
import { LayoutContextProvider } from "context/layoutContext";
import FuturaFont from "styles/font";
import Footer from "./../Footer";
import Navbar from "./../Navbar";
import styles from "./styles.module.scss";
import { PropTypes } from "./types";

const Layout = ({ children }: PropTypes) => {
  return (
    <LayoutContextProvider>
      <CartContextProvider>
        <div
          className={`${FuturaFont.className} ${styles.layoutContainer}`}
          id="layout_root"
        >
          <div className={`${styles.layoutContainerInner}`}>
            <Navbar />
            <main>{children}</main>
          </div>
          <Footer />
          <Cart />
        </div>
      </CartContextProvider>
    </LayoutContextProvider>
  );
};

export default Layout;
