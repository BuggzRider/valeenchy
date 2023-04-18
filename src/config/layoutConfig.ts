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
        url: "/shop",
        type: NavbarItemTypes.LIST,
        listType: NavbarItemListTypes.EXPANDABLE,
        listItems: [
          {
            itemName: "Colors",
            key: "colors",
            url: "/colors",
            type: NavbarItemColumnListTypes.LIST,
            items: ["Bubblegum", "Black", "Cement", "Grey"],
          },
          {
            itemName: "Type",
            url: "/type",
            key: "type",
            type: NavbarItemColumnListTypes.LIST,
            items: ["All Collection", "All Products", "New", "Popular"],
          },
          {
            itemName: "Shop New",
            url: "/shopNew",
            key: "shopNew",
            type: NavbarItemColumnListTypes.IMAGE,
            imageUrl: "",
          },
          {
            itemName: "Shop Popular",
            url: "/shopPopular",
            key: "shopPopular",
            type: NavbarItemColumnListTypes.IMAGE,
            imageUrl: "",
          },
        ],
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
};
