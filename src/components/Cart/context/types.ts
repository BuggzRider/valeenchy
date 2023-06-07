export type CartContextType = {
  isCartPanelOpen: boolean;
  shippingQualifyMessage: string;
  setShippingQualifyMessage: (input: string) => void;
  setIsCartPanelOpen: (input: boolean) => void;
};
