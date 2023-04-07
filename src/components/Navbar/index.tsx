import LayoutContext from "context/layoutContext/layout-context";
import { useContext } from "react";
import NavbarItems from "./NavbarItems";

const Navbar = () => {
  const { navbarConfig } = useContext(LayoutContext);
  return (
    <nav>
      <NavbarItems config={navbarConfig.navList} />
    </nav>
  );
};

export default Navbar;
