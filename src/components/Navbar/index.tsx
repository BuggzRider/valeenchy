import LayoutContext from "context/layoutContext/layout-context";
import Image from "next/image";
import { useContext } from "react";
import NavbarItems from "./NavbarItems";
import { navBarStyles } from "./styles";

const Navbar = () => {
  const { navbarConfig } = useContext(LayoutContext);
  return (
    <nav css={(theme) => navBarStyles(theme)}>
      <Image
        src="/assets/images/logo.png"
        alt="Valeenchy logo"
        width="64"
        height="64"
      />
      <NavbarItems config={navbarConfig.navList} />
    </nav>
  );
};

export default Navbar;
