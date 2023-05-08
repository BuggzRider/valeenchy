import { layoutConfig } from "config";
import { createContext } from "react";

const LayoutContext = createContext(layoutConfig);

export default LayoutContext;
