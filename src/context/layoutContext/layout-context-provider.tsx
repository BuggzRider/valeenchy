import { layoutConfig } from "config";
import LayoutContext from "./layout-context";
import { ProviderProps } from "./types";

const { navbarConfig, footerConfig, homePageConfig } = layoutConfig;
export const LayoutContextProvider = (props: ProviderProps) => {
  return (
    <LayoutContext.Provider
      value={{ navbarConfig, footerConfig, homePageConfig }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
};
