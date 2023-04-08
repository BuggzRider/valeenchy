import Link from "next/link";
import { NavbarItemType } from "../types";
import { navBarListItemContainer, navBarListItemLink } from "./styles";

const NavbarItem = ({ config }: NavbarItemType) => {
  return (
    <li css={(theme) => navBarListItemContainer(theme)}>
      <Link
        css={(theme) => navBarListItemLink(theme)}
        href={`/${config.key}`}
        data-automation={config.key}
      >
        {config.displayName}
      </Link>
    </li>
  );
};

export default NavbarItem;
