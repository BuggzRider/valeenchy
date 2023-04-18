import LinkListRenderer from "components/LinkListRenderer";
import { isEmpty } from "ramda";
import { useState } from "react";
import { NavbarItemsPropTypes } from "../types";
import { navListContainer } from "./styles";

const NavbarItems = ({ config = [] }: NavbarItemsPropTypes) => {
  const [presentHoveredLink, setpresentHoveredLink] = useState("");
  const hoveredLinkHandler = (e: any) => {
    console.log(presentHoveredLink);
    isEmpty(e.target.dataset) || e.target.dataset.automation === ""
      ? setpresentHoveredLink("")
      : setpresentHoveredLink(e.target.dataset.automation);
  };
  return (
    <ul css={navListContainer} onMouseOver={hoveredLinkHandler}>
      {config.map((item) => (
        <LinkListRenderer key={item.key} config={item} />
      ))}
    </ul>
  );
};

export default NavbarItems;
