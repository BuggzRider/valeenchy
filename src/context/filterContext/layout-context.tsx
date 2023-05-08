import { layoutConfig } from "config";
import { createContext } from "react";

const { navbarConfig, footerConfig, homePageConfig } = layoutConfig;
const LayoutContext = createContext({
  navbarConfig,
  footerConfig,
  homePageConfig,
});

export default LayoutContext;
