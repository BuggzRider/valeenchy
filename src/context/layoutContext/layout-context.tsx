import { layoutConfig } from "config";
import { createContext } from "react";

const { navbarConfig, footerConfig } = layoutConfig;
const LayoutContext = createContext({
  navbarConfig,
  footerConfig,
});

export default LayoutContext;
