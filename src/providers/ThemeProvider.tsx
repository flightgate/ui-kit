import type { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';

import { defaultTheme } from '../theme/defaults';
import type { Theme } from '../theme/types';

interface ThemeProviderProps {
  theme?: Theme;
  children: ReactNode;
}

const ThemeProvider = ({ theme = defaultTheme, children }: ThemeProviderProps) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);

export { ThemeProvider };
