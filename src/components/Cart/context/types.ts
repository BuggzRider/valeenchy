export type CartContextType = {
  isCartPanelOpen: boolean;
  shippingQualifyMessage: string;
  isCartEmpty: boolean;
  setIsCartEmpty: (input: boolean) => void;
  setShippingQualifyMessage: (input: string) => void;
  setIsCartPanelOpen: (input: boolean) => void;
};
