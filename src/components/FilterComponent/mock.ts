export const sortFilterOptions = {
  featured: {
    label: "Featured",
  },
  bestSelling: {
    label: "Best Selling",
  },
  alphabeticallyAZ: {
    label: "Alphabetically, A-Z",
  },
  alphabeticallyZA: {
    label: "Alphabetically, Z-A",
  },
  priceLH: {
    label: "Price, low to high",
  },
  priceHL: {
    label: "Price , High to Low",
  },
  dateON: {
    label: "Date, old to new",
  },
  dateNO: {
    label: "Date, new to old",
  },
};

export const colorFilterOptions = {
  black: {
    label: "Black",
    colorCode: "#000000",
  },
  bubblegum: {
    label: "Bubblegum",
    colorCode: "#f641af",
  },
  cement: {
    label: "Cement",
    colorCode: "#c5c5c5",
  },
  chocolate: {
    label: "Chocolate",
    colorCode: "#542e35",
  },
  khaki: {
    label: "Khaki",
    colorCode: "#4b5c42",
  },
  lemon: {
    label: "Lemon",
    colorCode: "#f4df8d",
  },
  lemonMarble: {
    label: "Lemon Marble",
    colorCode: "#888888",
  },
  lightGreyMarl: {
    label: "Light Grey Marl",
    colorCode: "#ece8e5",
  },
  lilac: {
    label: "Lilac",
    colorCode: "#bd88e7",
  },
  navy: {
    label: "Navy",
    colorCode: "#07317a",
  },
  red: {
    label: "Red",
    colorCode: "#e52824",
  },
  sage: {
    label: "Sage",
    colorCode: "#8cb4b1",
  },
  turquoise: {
    label: "Turquoise",
    colorCode: "#40e0d0",
  },
  white: {
    label: "White",
    colorCode: "#ffffff",
  },
};

export const productTypeFilterOptions = {
  bottoms: {
    label: "Bottoms",
    count: 4,
  },
  dresses: {
    label: "Dresses",
    count: 0,
  },
  onesies: {
    label: "Onesies",
    count: 1,
  },
  tops: {
    label: "Tops",
    count: 0,
  },
};

export const availableFilterOptions = {
  inStock: {
    label: "In Stock",
    count: 4,
  },
  outOfStock: {
    label: "Out of Stock",
    count: 0,
  },
};

export const priceFilterOptions = {
  label: "Price",
  min: 0,
  max: 180,
  symbol: "₹",
};

export const allFilters = {
  sortFilterOptions,
  colorFilterOptions,
  productTypeFilterOptions,
  availableFilterOptions,
};
