import NavbarItem from "../NavbarItem";
import { NavbarItemsPropTypes } from "../types";
import { navListContainer } from "./styles";

const NavbarItems = ({ config = [] }: NavbarItemsPropTypes) => {
  return (
    <ul css={navListContainer}>
      {config.map((item) => (
        <NavbarItem key={item.key} config={item} />
      ))}
    </ul>
  );
};

export default NavbarItems;
