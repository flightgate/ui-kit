import type { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import type { Theme } from '../theme';
import { defaultTheme } from '../theme';

interface ThemeProviderProps {
  theme?: Theme;
  children: ReactNode;
}

const ThemeProvider = ({ theme = defaultTheme, children }: ThemeProviderProps) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);

export { ThemeProvider };
