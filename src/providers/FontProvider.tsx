import { useFonts } from 'expo-font';
import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { ThemeProvider as StyledThemeProvider, useTheme } from 'styled-components/native';

import { FontLoadingContext } from '../contexts/FontLoadingContext';
import type { Theme, ThemeFontFamilies } from '../theme';

const DEFAULT_FONT_FAMILIES: ThemeFontFamilies = {
  regular: 'regular',
  semiBold: 'semiBold',
  bold: 'bold',
  italic: 'italic',
};

const DEFAULT_FONT_ASSETS: Record<string, number> = {
  regular: require('../assets/fonts/Montserrat-Regular.ttf'),
  semiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
  bold: require('../assets/fonts/Montserrat-Bold.ttf'),
  italic: require('../assets/fonts/Montserrat-Italic.ttf'),
};

interface FontProviderProps {
  children: ReactNode;
  fontAssets?: Record<string, number>;
  fontFamilies?: ThemeFontFamilies;
}

const FontProvider = ({
  children,
  fontAssets = DEFAULT_FONT_ASSETS,
  fontFamilies = DEFAULT_FONT_FAMILIES,
}: FontProviderProps) => {
  const theme = useTheme() as Theme;
  const [loaded, error] = useFonts(fontAssets);

  const mergedTheme = useMemo<Theme>(() => ({ ...theme, fontFamilies }), [theme, fontFamilies]);

  const contextValue = useMemo(() => ({ loaded, error }), [loaded, error]);

  return (
    <FontLoadingContext.Provider value={contextValue}>
      <StyledThemeProvider theme={mergedTheme}>{children}</StyledThemeProvider>
    </FontLoadingContext.Provider>
  );
};

export type { FontProviderProps };
export { DEFAULT_FONT_ASSETS, DEFAULT_FONT_FAMILIES, FontProvider };
