export type CartItemTypes = {
  imageSrc: string;
  name: string;
  size: string;
  totalPrize: string;
  quantity: number;
};

export type CartItemPropTypes = {
  itemData: CartItemTypes;
};

export type CartItemListPropType = {
  items: Array<CartItemTypes>;
};
