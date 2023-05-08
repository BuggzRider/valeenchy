import { layoutConfig } from "config";
import LayoutContext from "./layout-context";
import { ProviderProps } from "./types";

export const LayoutContextProvider = (props: ProviderProps) => {
  return (
    <LayoutContext.Provider value={layoutConfig}>
      {props.children}
    </LayoutContext.Provider>
  );
};
