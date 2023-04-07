import { LayoutContextProvider } from "context/layoutContext";
import Footer from "./../Footer";
import Navbar from "./../Navbar";
import { PropTypes } from "./types";

const Layout = ({ children }: PropTypes) => {
  return (
    <LayoutContextProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </LayoutContextProvider>
  );
};

export default Layout;
