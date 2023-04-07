import { pathOr } from 'ramda';

export const rgba = (themeColor: string, opacity: number) => (theme?: any) => {
  const color: any = pathOr(themeColor, ['colors', themeColor])(theme);
  const isThreeLetterHex = color.length === 4;
  const [r, g, b]: number[] = color
    .slice(1)
    .match(new RegExp(`.{1,${isThreeLetterHex ? 1 : 2}}`, 'g'))
    .map((n: any) => parseInt(n, 16));
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const BASE_COLORS = {
  // Project Colors

  // Black/White
  white: '#FFF',
  black: '#000',

  // grey
  'cyan-grey': '#5f7279',
  'dark-charcoal': '#333',
  'brownish-grey': '#666',
  greyish: '#B4B4B4',
  'wild-sand': '#F2F1EF',
  'light-grey': '#d8d8d8',

  // Blue
  'dark-blue': '#041E42',
  'light-navy': '#003087',
  denim: '#0072CE',
  'nice-blue': '#1A6EC1',
  'deep-sky-blue': '#6CACE4',
  'pale-grey': '#EDF7F9',

  // Green
  'racing-green': '#0F4A00',
  'dark-grass-green': '#427D00',
  'tree-green': '#26871D',
  'apple-green': '#6EC11A',
  'light-khaki': '#EBF6D1',

  // Orange/Yellows
  rouge: '#AA1F41',
  'brick-orange': '#C00D1E',
  orange: '#F0884A',
  'golden-yellow': '#FFB81C',
  'sun-yellow': '#FFF200',
  'brick-red': '#C00E1E',

  // Legacy Colors
  'grey-border': '#B5B5B5',
  'off-white': '#eee',
  'disabled-blue': '#B9D4EF',
  'pink-grey': '#fdedeb',
  'black-blue': '#1267A4',
  'classic-blue': '#0072CE',
};

export const BUTTON_ALIASES = {
  // solid buttons -- named primary in Project Blue but to avoid confusion with
  // primary/secondary colors vs primary/secondary buttons, buttons will use
  // solid/outline instead
  blue: {
    static: BASE_COLORS.denim,
    hoverFocus: BASE_COLORS['dark-blue'],
    disabled: BASE_COLORS['disabled-blue'],
    accent: BASE_COLORS.white,
    accentDisabled: BASE_COLORS.white,
  },
  green: {
    static: BASE_COLORS['dark-grass-green'],
    hoverFocus: BASE_COLORS['racing-green'],
    disabled: rgba(BASE_COLORS['dark-grass-green'], 0.4)(),
    disabledBorder: 'transparent',
    accent: BASE_COLORS.white,
    accentDisabled: BASE_COLORS.white,
  },
  boldGreen: {
    static: BASE_COLORS['racing-green'],
    hoverFocus: BASE_COLORS['racing-green'],
    disabled: rgba(BASE_COLORS['dark-grass-green'], 0.4)(),
    disabledBorder: 'transparent',
    accent: BASE_COLORS.white,
    accentDisabled: BASE_COLORS.white,
  },
  yellow: {
    static: BASE_COLORS['golden-yellow'],
    hoverFocus: BASE_COLORS.orange,
    disabled: BASE_COLORS['sun-yellow'],
    accent: BASE_COLORS['dark-charcoal'],
    accentDisabled: BASE_COLORS.greyish,
  },
  // outline buttons -- borders match text for outlines
  'dark-charcoal': {
    static: BASE_COLORS['dark-charcoal'],
    hoverFocus: BASE_COLORS['dark-charcoal'],
    disabled: BASE_COLORS.greyish,
    accent: BASE_COLORS.white,
    accentDisabled: BASE_COLORS.white,
  },
  white: {
    static: BASE_COLORS.white,
    hoverFocus: BASE_COLORS.white,
    disabled: BASE_COLORS.greyish,
    accent: BASE_COLORS['dark-charcoal'],
    accentDisabled: BASE_COLORS['dark-charcoal'],
  },
  transparent: {
    static: 'transparent',
    hoverFocus: 'transparent',
    disabled: 'transparent',
    accent: 'transparent',
    accentDisabled: 'transparent',
  },
};

export const DEFAULT_THEME_ALIAS_OVERRIDES = {
  colors: {},
  buttonColors: { primary: BUTTON_ALIASES.blue, accent: BUTTON_ALIASES.white },
};

export const FONT_SIZES = {
  disclaimer: '0.714rem', // 11.424px
  caption: '0.826rem', // 13.216px
  input: '16px', // Using px for consistency between mobile and tablet/desktop
  button: '0.909rem', // 14.544px
  body: '1rem', // 16px
  h6: '1.1rem', // 17.6px
  h5: '1.21rem', // 19.36px
  h4: '1.331rem', // 21.296px
  h3: '1.464rem', // 23.424px
  h2: '1.611rem', // 25.776px
  h1: '1.772rem', // 28.352px
  xl: '2.286rem', // 36.576px
};

export const LINE_HEIGHTS = {
  disclaimer: '0.9184rem',
  caption: '1.0625rem',
  button: '1.1875rem',
  body: '1.3125rem',
  h6: '1.375rem',
  h5: '1.500rem',
  h4: '1.6875rem',
  h3: '1.8125rem',
  h2: '2rem',
  h1: '2.1875rem',
  li: '3.429rem',
};

// Alternative breakpoints for tablet viewport
export const ALTERNATIVE_BREAKPOINTS = {
  TABLET_LANDSCAPE: 1024,
  TABLET_PORTRAIT: 768,
  LARGE_DESKTOP: 1440,
};

/* Default theme used for GM */
export const defaultTheme = {
  colors: {
    ...BASE_COLORS,
    ...DEFAULT_THEME_ALIAS_OVERRIDES.colors,
  },
  buttonColors: {
    ...BUTTON_ALIASES,
    ...DEFAULT_THEME_ALIAS_OVERRIDES.buttonColors,
  },
  // based on the current site and project blue (Joe Sarkis)
  breakpoints: [640, 960], // 0-639 = Mobile, 640-959 = Tablet, 960+ = Desktop
  maxWidths: [480, '96.875%', 1440], // Mobile, Tablet, Desktop
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64],
  fontWeights: {
    normal: '400',
    bold: '500',
  },
  fontSizes: {
    ...FONT_SIZES,
  },
  lineHeights: { ...LINE_HEIGHTS },
  outlineWidths: [0, 1],
  zIndexs: ['0', '9', '10', '11', '10001', '10002'],
  isGrocery: false,
};

/* mediaQueries */
export const mediaQueries = {
  mobileOnly: (props: any): string => {
    const desktopBreakPoint: number =
      (props.theme &&
        props.theme.desktopBreakPoints &&
        props.theme.breakpoints[0]) ||
      defaultTheme.breakpoints[0];
    return `@media (max-width: ${desktopBreakPoint}px)`;
  },
  desktopOnly: (props: any): string => {
    const desktopBreakPoint: number =
      (props.theme &&
        props.theme.desktopBreakPoints &&
        props.theme.breakpoints[1]) ||
      defaultTheme.breakpoints[1];
    return `@media (min-width: ${desktopBreakPoint}px)`;
  },
  ie11Only:
    '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)',
  ie11DesktopOnly: (props: any): string => {
    const desktopBreakPoint: number =
      (props.theme &&
        props.theme.desktopBreakPoints &&
        props.theme.breakpoints[1]) ||
      defaultTheme.breakpoints[1];
    return `@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) and (min-width: ${desktopBreakPoint}px)`;
  },
};
