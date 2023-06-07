import { createPortal } from "react-dom";
import SidebarComponent from "./sidebar";
import { SidebarPropTypes } from "./types";

const Sidebar = (props: SidebarPropTypes) => {
  return document
    ? createPortal(<SidebarComponent {...props} />, document.body)
    : null;
};

export default Sidebar;
