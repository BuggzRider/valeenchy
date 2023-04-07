import { NavbarItemType } from "../types";

const NavbarItem = ({ config }: NavbarItemType) => {
  return <li>{config.displayName}</li>;
};

export default NavbarItem;
