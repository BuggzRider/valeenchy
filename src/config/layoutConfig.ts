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

export const layoutConfig = {
  navbarConfig: {
    navList: [
      {
        displayName: "Shop",
        key: "shop",
        type: NavbarItemTypes.LIST,
        listType: NavbarItemListTypes.EXPANDABLE,
        listItems: [
          {
            itemName: "Colors",
            key: "colors",
            type: NavbarItemColumnListTypes.LIST,
            items: ["Bubblegum", "Black", "Cement", "Grey"],
          },
          {
            itemName: "Type",
            key: "type",
            type: NavbarItemColumnListTypes.LIST,
            items: ["All Collection", "All Products", "New", "Popular"],
          },
          {
            itemName: "Shop New",
            key: "shopNew",
            type: NavbarItemColumnListTypes.IMAGE,
            imageUrl: "",
          },
          {
            itemName: "Shop Popular",
            key: "shopPopular",
            type: NavbarItemColumnListTypes.IMAGE,
            imageUrl: "",
          },
        ],
      },
      {
        displayName: "Lookbooks",
        key: "lookbooks",
        type: NavbarItemTypes.HYPERLINK_ONLY,
      },
      {
        displayName: "About",
        key: "about",
        type: NavbarItemTypes.LIST,
        listType: NavbarItemListTypes.NORMAL,
        listItems: [
          {
            itemName: "FAQ",
            key: "faq",
          },
          {
            itemName: "Contact",
            key: "contact",
          },
          {
            itemName: "Our Team",
            key: "ourTeam",
          },
        ],
      },
      {
        displayName: "News",
        key: "news",
        type: NavbarItemTypes.HYPERLINK_ONLY,
      },
    ],
  },
  footerConfig: {},
};
