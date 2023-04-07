import NavbarItem from "../NavbarItem";
import { NavbarItemsPropTypes } from "../types";

const NavbarItems = ({ config = [] }: NavbarItemsPropTypes) => {
  return (
    <ul>
      {config.map((item) => (
        <NavbarItem key={item.key} config={item} />
      ))}
    </ul>
  );
};

export default NavbarItems;
