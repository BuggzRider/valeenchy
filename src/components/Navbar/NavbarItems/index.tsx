import NavbarItem from "../NavbarItem";
import { NavbarItemsPropTypes } from "../types";
import { navListContainer } from "./styles";

const NavbarItems = ({ config = [] }: NavbarItemsPropTypes) => {
  return (
    <div css={navListContainer}>
      {config.map((item) => (
        <NavbarItem key={item.key} config={item} />
      ))}
    </div>
  );
};

export default NavbarItems;
