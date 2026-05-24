import type { ReactNode } from 'react';

import type { Theme, ThemeFontFamilies } from '../theme';
import { FontProvider } from './FontProvider';
import { KeyboardProvider } from './KeyboardProvider';
import { ThemeProvider } from './ThemeProvider';
import { ToastProvider } from './ToastProvider';

interface UIKitProviderProps {
  children: ReactNode;
  theme?: Theme;
  fontAssets?: Record<string, number>;
  fontFamilies?: ThemeFontFamilies;
}

const UIKitProvider = ({ children, theme, fontAssets, fontFamilies }: UIKitProviderProps) => (
  <ThemeProvider theme={theme}>
    <FontProvider fontAssets={fontAssets} fontFamilies={fontFamilies}>
      <KeyboardProvider>
        {children}
        <ToastProvider />
      </KeyboardProvider>
    </FontProvider>
  </ThemeProvider>
);

export type { UIKitProviderProps };
export { UIKitProvider };
