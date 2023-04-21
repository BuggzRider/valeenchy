export const sortFilterOptions = [
  {
    key: "featured",
    order: "",
    label: "Featured",
  },
  {
    key: "bestSelling",
    order: "",
    label: "Best Selling",
  },
  {
    key: "alphabetically",
    order: "ascending",
    label: "Alphabetically, A-Z",
  },
  {
    key: "alphabetically",
    order: "decending",
    label: "Alphabetically, Z-A",
  },
  {
    key: "price",
    order: "ascending",
    label: "Price, low to high",
  },
  {
    key: "price",
    order: "decending",
    label: "Price , High to Low",
  },
  {
    key: "date",
    order: "ascending",
    label: "Date, old to new",
  },
  {
    key: "date",
    order: "decending",
    label: "Date, new to old",
  },
];

export const colorFilterOptions = [
  {
    key: "black",
    label: "Black",
    code: "#000000",
    selected: false,
  },
  {
    key: "bubblegum",
    label: "Bubblegum",
    code: "#f641af",
    selected: true,
  },
  {
    key: "cement",
    label: "Cement",
    code: "#c5c5c5",
    selected: false,
  },
  {
    key: "chocolate",
    label: "Chocolate",
    code: "#542e35",
    selected: false,
  },
  {
    key: "khaki",
    label: "Khaki",
    code: "#4b5c42",
    selected: false,
  },
  {
    key: "lemon",
    label: "Lemon",
    code: "#f4df8d",
    selected: false,
  },
  {
    key: "lemonMarble",
    label: "Lemon Marble",
    code: "#888888",
    selected: false,
  },
  {
    key: "lightGreyMarl",
    label: "Light Grey Marl",
    code: "#ece8e5",
    selected: false,
  },
  {
    key: "lilac",
    label: "Lilac",
    code: "#bd88e7",
    selected: false,
  },
  {
    key: "navy",
    label: "Navy",
    code: "#07317a",
    selected: false,
  },
  {
    key: "red",
    label: "Red",
    code: "#e52824",
    selected: false,
  },
  {
    key: "sage",
    label: "Sage",
    code: "#8cb4b1",
    selected: false,
  },
  {
    key: "turquoise",
    label: "Turquoise",
    code: "#40e0d0",
    selected: false,
  },
  {
    key: "white",
    label: "White",
    code: "#ffffff",
    selected: false,
  },
];

export const productTypeFilterOptions = [
  {
    key: "bottoms",
    label: "Bottoms",
    count: 0,
    selected: true,
  },
  {
    key: "dresses",
    label: "Dresses",
    count: 0,
    selected: false,
  },
  {
    key: "onesies",
    label: "Onesies",
    count: 0,
    selected: true,
  },
  {
    key: "tops",
    label: "Tops",
    count: 0,
    selected: false,
  },
];

export const availableFilterOptions = [
  {
    key: "inStock",
    label: "In Stock",
    count: 0,
    selected: false,
  },
  {
    key: "outOfStock",
    label: "Out f Stock",
    count: 0,
    selected: false,
  },
];

export const selectedFilters = [
  {
    type: "color",
    value: "Black",
  },
  {
    type: "productType",
    value: "Bottom",
  },
  {
    type: "availability",
    value: "In Stock",
  },
  {
    type: "color",
    value: "Black",
  },
  {
    type: "productType",
    value: "Bottom",
  },
  {
    type: "availability",
    value: "In Stock",
  },
];

export const allFilters = {
  sortFilterOptions,
  colorFilterOptions,
  productTypeFilterOptions,
  availableFilterOptions,
};
