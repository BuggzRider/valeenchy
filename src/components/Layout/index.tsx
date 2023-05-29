import { LayoutContextProvider } from "context/layoutContext";
import FuturaFont from "styles/font";
import Footer from "./../Footer";
import Navbar from "./../Navbar";
import { layoutContainer, layoutContainerInner } from "./styles";
import { PropTypes } from "./types";

const Layout = ({ children }: PropTypes) => {
  return (
    <LayoutContextProvider>
      <div
        className={`${FuturaFont.className}`}
        css={(theme) => layoutContainer(theme)}
      >
        <div css={(theme) => layoutContainerInner(theme)}>
          <Navbar />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </LayoutContextProvider>
  );
};

export default Layout;
