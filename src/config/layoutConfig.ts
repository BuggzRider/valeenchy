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
        listItems: {
          columnList1: {
            displayName: "Colors",
            key: "colors",
            url: "/colors",
            type: NavbarItemColumnListTypes.LIST,
            items: [
              {
                displayName: "Bubblegum",
                url: "/shop?colour='Bubblegum'",
                key: "Bubblegum",
              },
              {
                displayName: "Black",
                url: "/shop?colour='Black'",
                key: "Black",
              },
              {
                displayName: "Cement",
                url: "/shop?colour='Cement'",
                key: "Cement",
              },
              {
                displayName: "Grey",
                url: "/shop?colour='Grey'",
                key: "Grey",
              },
            ],
          },
          columnList2: {
            displayName: "Type",
            url: "/type",
            key: "type",
            type: NavbarItemColumnListTypes.LIST,
            items: [
              {
                displayName: "All Collection",
                url: "/type?colour='All Collection'",
                key: "All Collection",
              },
              {
                displayName: "All Products",
                url: "/type?colour='All Products'",
                key: "All Products",
              },
              {
                displayName: "New",
                url: "/type?colour='New'",
                key: "New",
              },
              {
                displayName: "Popular",
                url: "/type?colour='Popular'",
                key: "Popular",
              },
            ],
          },
          columnImage1: {
            displayName: "Shop New",
            url: "/shopNew",
            key: "shopNew",
            type: NavbarItemColumnListTypes.IMAGE,
            imageUrl: "",
          },
          columnImage2: {
            displayName: "Shop Popular",
            url: "/shopPopular",
            key: "shopPopular",
            type: NavbarItemColumnListTypes.IMAGE,
            imageUrl: "",
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
};
