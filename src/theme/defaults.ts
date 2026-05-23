import type { Theme } from './types';

const defaultTheme: Theme = {
  colors: {
    primary: '#6366F1',
    secondary: '#A5B4FC',
    tertiary: '#EDE9FE',

    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',

    textPrimary: '#111827',
    textSecondary: '#6B7280',
    textDisabled: '#D1D5DB',

    bgPrimary: '#F9FAFB',
    bgSecondary: '#F3F4F6',

    success: '#10B981',
    warning: '#F59E0B',
    danger: '#EF4444',
    info: '#3B82F6',
  },

  fontSizes: {
    xxs: 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
  },

  spacings: {
    none: 0,
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },

  borderRadius: {
    none: 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 9999,
  },

  fontFamilies: {
    regular: 'System',
    semiBold: 'System',
    bold: 'System',
    italic: 'System',
  },
};

export { defaultTheme };
