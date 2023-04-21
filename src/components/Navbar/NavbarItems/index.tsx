import NavbarItem from "../NavbarItem";
import { NavbarItemsPropTypes } from "../types";
import { navListContainer } from "./styles";

const NavbarItems = ({ config = [] }: NavbarItemsPropTypes) => {
  // const [navbarItems, setNavbarItems] = useState<NavItemsTypes>({
  //   links: [],
  //   hoveredItem: [],
  // });

  // useEffect(() => {
  //   const navItems: NavItemsTypes = { links: [], hoveredItem: [] };

  //   config.forEach((item) => {
  //     navItems.links.push(<LinkListRenderer key={item.key} config={item} />);
  //     if (item.type === NavbarItemTypes.LIST)
  //       navItems.hoveredItem[item.key] = item;
  //   });
  //   setNavbarItems(navItems);
  // }, [config]);

  return (
    <div css={navListContainer}>
      {config.map((item) => (
        <NavbarItem config={item} />
      ))}
    </div>
  );
};

export default NavbarItems;
