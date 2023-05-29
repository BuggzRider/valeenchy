import { roundImagesMock, squareImagesMock } from "components/CardSlider/mock";
import { collapsibleComponent } from "components/CollapsibleComponent/mock";
import { fiveImageCollageMock } from "components/ConfigurablePhotoCollage/mock";
import {
  availableFilterOptions,
  colorFilterOptions,
  priceFilterOptions,
  productTypeFilterOptions,
  sortFilterOptions,
} from "components/FilterComponent/mock";

export enum NavbarItemTypes {
  HYPERLINK_ONLY = "hyperlink_only",
  LIST = "list",
}

export enum NavbarItemListTypes {
  NORMAL = "normal",
  EXPANDABLE = "expandable",
}

export enum NavbarItemColumnListTypes {
  LIST = "list",
  IMAGE = "image",
}

export enum FilterKeyTypes {
  COLORS = "color",
  TYPES = "types",
  TAGS = "tags",
  SORT = "sort",
  PRODUCT_TYPE = "productType",
  AVAILABILITY = "availability",
  PRICE = "price",
}

export enum FilterTypes {
  COLOR = "COLOR",
  RADIO = "RADIO",
  CHECKBOX = "CHECKBOX",
  RANGE = "RANGE",
}

export const layoutConfig = {
  navbarConfig: {
    navList: [
      {
        displayName: "Shop",
        key: "shop",
        url: "/shop",
        type: NavbarItemTypes.LIST,
        listType: NavbarItemListTypes.EXPANDABLE,
        listItems: {
          columnList1: {
            displayName: "Colors",
            key: FilterKeyTypes.COLORS,
            type: NavbarItemColumnListTypes.LIST,
            items: [
              {
                displayName: "Bubblegum",
                query: { [FilterKeyTypes.COLORS]: "Bubblegum" },
                key: "Bubblegum",
              },
              {
                displayName: "Black",
                query: { [FilterKeyTypes.COLORS]: "Black" },
                key: "Black",
              },
              {
                displayName: "Cement",
                query: { [FilterKeyTypes.COLORS]: "Cement" },
                key: "Cement",
              },
              {
                displayName: "Grey",
                query: { [FilterKeyTypes.COLORS]: "Grey" },
                key: "Grey",
              },
            ],
          },
          columnList2: {
            displayName: "Type",
            key: FilterKeyTypes.TYPES,
            type: NavbarItemColumnListTypes.LIST,
            items: [
              {
                displayName: "All Collection",
                query: { [FilterKeyTypes.TYPES]: "All Collection" },
                key: "All Collection",
              },
              {
                displayName: "All Products",
                query: { [FilterKeyTypes.TYPES]: "All Products" },
                key: "All Products",
              },
              {
                displayName: "New",
                query: { [FilterKeyTypes.TYPES]: "New" },
                key: "New",
              },
              {
                displayName: "Popular",
                query: { [FilterKeyTypes.TYPES]: "Popular" },
                key: "Popular",
              },
            ],
          },
          columnImage1: {
            displayName: "Shop New",
            query: { [FilterKeyTypes.TAGS]: "Shop New" },
            key: "shopNew",
            type: NavbarItemColumnListTypes.IMAGE,
            imageUrl: "/assets/images/potraitLarge.webp",
          },
          columnImage2: {
            displayName: "Shop Popular",
            query: { [FilterKeyTypes.TAGS]: "Shop Popular" },
            key: "shopPopular",
            type: NavbarItemColumnListTypes.IMAGE,
            imageUrl: "/assets/images/test.webp",
          },
        },
      },
      {
        displayName: "Lookbooks",
        key: "lookbooks",
        url: "/lookbooks",
        type: NavbarItemTypes.HYPERLINK_ONLY,
      },
      {
        displayName: "About",
        url: "/about",
        key: "about",
        type: NavbarItemTypes.LIST,
        listType: NavbarItemListTypes.NORMAL,
        listItems: [
          {
            displayName: "FAQ",
            url: "/about/faq",
            key: "FAQ",
          },
          {
            displayName: "Contact",
            url: "/about/contact",
            key: "Contact",
          },
          {
            displayName: "Our Team",
            url: "/about/ourTeam",
            key: "Our Team",
          },
        ],
      },
      {
        displayName: "News",
        url: "news",
        key: "news",
        type: NavbarItemTypes.HYPERLINK_ONLY,
      },
    ],
  },
  footerConfig: {
    linkList: [
      {
        displayName: "Shop",
        url: "/shop",
        key: "shop",
        type: NavbarItemColumnListTypes.LIST,
        listType: NavbarItemListTypes.NORMAL,
        listItems: [],
      },
      {
        displayName: "Lookbooks",
        url: "/lookbooks",
        key: "lookbooks",
        type: NavbarItemColumnListTypes.LIST,
        listType: NavbarItemListTypes.NORMAL,
        listItems: [],
      },
      {
        displayName: "About",
        url: "/about",
        key: "about",
        type: NavbarItemColumnListTypes.LIST,
        listType: NavbarItemListTypes.NORMAL,
        listItems: [],
      },
      {
        displayName: "News",
        url: "/news",
        key: "news",
        type: NavbarItemColumnListTypes.LIST,
        listType: NavbarItemListTypes.NORMAL,
        listItems: [],
      },
      {
        displayName: "Search",
        url: "/search",
        key: "search",
        type: NavbarItemColumnListTypes.LIST,
        listType: NavbarItemListTypes.NORMAL,
        listItems: [],
      },
      {
        displayName: "Privacy",
        url: "/privacy",
        key: "privacy",
        type: NavbarItemColumnListTypes.LIST,
        listType: NavbarItemListTypes.NORMAL,
        listItems: [],
      },
      {
        displayName: "Terms",
        url: "/terms",
        key: "terms",
        type: NavbarItemColumnListTypes.LIST,
        listType: NavbarItemListTypes.NORMAL,
        listItems: [],
      },
      {
        displayName: "Shipping",
        url: "/shipping",
        key: "shipping",
        type: NavbarItemColumnListTypes.LIST,
        listType: NavbarItemListTypes.NORMAL,
        listItems: [],
      },
    ],
  },
  homePageConfig: {
    centerImageObject: {
      url: "/assets/images/homeCenter.png",
      alt: "image",
      overlayTextConfig: {
        heading: "Story Theme",
        body: "A powerful theme built for modern commerce.",
        buttonsArray: [
          { isLink: false, url: "/", label: "View Products", key: "products" },
          { isLink: true, url: "/", label: "Learn More", key: "about" },
        ],
      },
    },
    circleCardSlider: {
      heading: "Shop by colour",
      items: roundImagesMock,
    },
    squareCardSlider: {
      heading: "Our Best Sellers",
      items: squareImagesMock,
    },
    fiveImageCollage: {
      items: fiveImageCollageMock,
    },
    fiveImageReverseCollage: {
      items: fiveImageCollageMock,
    },
    collapsibleComponent: {
      items: collapsibleComponent,
      heading: "A few things you might be wondering",
    },
  },
  shopConfiguration: {
    filterConfig: {
      seperateFilter: [
        {
          name: "Sort",
          type: FilterTypes.RADIO,
          key: FilterKeyTypes.SORT,
          options: sortFilterOptions,
        },
      ],
      basicFilters: [
        {
          name: "Color",
          type: FilterTypes.COLOR,
          key: FilterKeyTypes.COLORS,
          options: colorFilterOptions,
        },
        {
          name: "Product Type",
          type: FilterTypes.CHECKBOX,
          key: FilterKeyTypes.PRODUCT_TYPE,
          options: productTypeFilterOptions,
        },
        {
          name: "Availability",
          type: FilterTypes.CHECKBOX,
          key: FilterKeyTypes.AVAILABILITY,
          options: availableFilterOptions,
        },
        {
          name: "Price",
          type: FilterTypes.RANGE,
          key: FilterKeyTypes.PRICE,
          options: priceFilterOptions,
        },
      ],
    },
  },
};
