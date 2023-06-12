import { useCartContext } from "components/Cart/context";
import LayoutContext from "context/layoutContext/layout-context";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import NavbarItems from "./NavbarItems";
import {
  navBarStyles,
  navbarIcon,
  navbarIconsContainer,
  navbarLogoContainer,
  navbarLogoLink,
} from "./styles";

const Navbar = () => {
  const { navbarConfig } = useContext(LayoutContext);
  const { isCartPanelOpen, setIsCartPanelOpen, isCartEmpty } = useCartContext();
  return (
    <nav css={(theme) => navBarStyles(theme)}>
      <div css={navbarLogoContainer}>
        <Link css={(theme) => navbarLogoLink(theme)} href="/">
          <Image
            src="https://vallenchy-images.nyc3.cdn.digitaloceanspaces.com/images/logo.png"
            alt="Valeenchy logo"
            width="100"
            height="100"
          />
        </Link>
      </div>
      <NavbarItems config={navbarConfig.navList} />
      <div css={navbarIconsContainer}>
        <Image
          src="/icons/searchIcon.svg"
          alt="Search icon"
          width="55"
          height="55"
          css={(theme) => navbarIcon(theme)}
        />
        <Image
          src={isCartEmpty ? "/icons/cart.svg" : "/icons/filledCart.svg"}
          alt={isCartEmpty ? "Empty cart" : "Filled cart"}
          width="51"
          height="55"
          css={(theme) => navbarIcon(theme)}
          onClick={() => setIsCartPanelOpen(!isCartPanelOpen)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
