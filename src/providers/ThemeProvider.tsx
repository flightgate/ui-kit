import type { ReactNode } from 'react';
import type { Theme } from 'src/theme';

import { defaultTheme } from 'src/theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';

interface ThemeProviderProps {
  theme?: Theme;
  children: ReactNode;
}

const ThemeProvider = ({ theme = defaultTheme, children }: ThemeProviderProps) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);

export { ThemeProvider };
