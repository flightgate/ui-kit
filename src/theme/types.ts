interface ThemeColors {
  primary: string;
  secondary: string;
  tertiary: string;

  white: string;
  black: string;
  transparent: string;

  textPrimary: string;
  textSecondary: string;
  textDisabled: string;

  bgPrimary: string;
  bgSecondary: string;

  success: string;
  warning: string;
  danger: string;
  info: string;
}

interface ThemeFontSizes {
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

interface ThemeSpacings {
  none: number;
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

interface ThemeBorderRadius {
  none: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  full: number;
}

interface ThemeBorderWidths {
  none: number;
  sm: number;
  md: number;
  lg: number;
}

interface ThemeFontFamilies {
  regular: string;
  semiBold: string;
  bold: string;
  italic: string;
}

interface Theme {
  colors: ThemeColors;
  fontSizes: ThemeFontSizes;
  spacings: ThemeSpacings;
  borderRadius: ThemeBorderRadius;
  borderWidths: ThemeBorderWidths;
  fontFamilies: ThemeFontFamilies;
}

// Token types — derived from the theme interfaces so they stay in sync automatically
type ColorToken = keyof ThemeColors;
type FontSizeToken = keyof ThemeFontSizes;
type SpacingToken = keyof ThemeSpacings;
type BorderRadiusToken = keyof ThemeBorderRadius;
type BorderWidthToken = keyof ThemeBorderWidths;
type FontFamilyToken = keyof ThemeFontFamilies;

// Layout token types — used as component prop values
type FlexDirectionToken = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type JustifyContentToken =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type AlignItemsToken = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
type TextAlignToken = 'left' | 'center' | 'right' | 'justify';

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export type {
  AlignItemsToken,
  BorderRadiusToken,
  BorderWidthToken,
  ColorToken,
  DeepPartial,
  FlexDirectionToken,
  FontFamilyToken,
  FontSizeToken,
  JustifyContentToken,
  SpacingToken,
  TextAlignToken,
  Theme,
  ThemeBorderRadius,
  ThemeBorderWidths,
  ThemeColors,
  ThemeFontFamilies,
  ThemeFontSizes,
  ThemeSpacings,
};
