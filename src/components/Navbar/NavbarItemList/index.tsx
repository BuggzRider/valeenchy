import { NavbarItemColumnListTypes } from "config";
import { NavbarItemProps } from "../types";

const NavbarItemList = ({ config = [] }: NavbarItemProps) => {
  return (
    <div>
      {config.map((item) => {
        switch (item.type) {
          case NavbarItemColumnListTypes.LIST:
            return <div></div>;
          case NavbarItemColumnListTypes.IMAGE:
            return <div></div>;
          default:
            return "";
        }
      })}
    </div>
  );
};

export default NavbarItemList;
