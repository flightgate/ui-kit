import RNToastMessage, { BaseToast, type BaseToastProps } from 'react-native-toast-message';
import { useTheme } from 'styled-components/native';

import type { Theme } from '../theme';

const toastConfig = (theme: Theme) => ({
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: theme.colors.success, width: '100%' }}
      text1Style={{ fontFamily: theme.fontFamilies.regular, fontSize: theme.fontSizes.sm }}
      text1NumberOfLines={0}
      text2Style={{ fontFamily: theme.fontFamilies.regular, fontSize: theme.fontSizes.xs }}
      text2NumberOfLines={0}
    />
  ),
  error: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: theme.colors.danger, width: '100%' }}
      text1Style={{ fontFamily: theme.fontFamilies.regular, fontSize: theme.fontSizes.sm }}
      text1NumberOfLines={0}
      text2Style={{ fontFamily: theme.fontFamilies.regular, fontSize: theme.fontSizes.xs }}
      text2NumberOfLines={0}
    />
  ),
  warning: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: theme.colors.warning, width: '100%' }}
      text1Style={{ fontFamily: theme.fontFamilies.regular, fontSize: theme.fontSizes.sm }}
      text1NumberOfLines={0}
      text2Style={{ fontFamily: theme.fontFamilies.regular, fontSize: theme.fontSizes.xs }}
      text2NumberOfLines={0}
    />
  ),
  info: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: theme.colors.info, width: '100%' }}
      text1Style={{ fontFamily: theme.fontFamilies.regular, fontSize: theme.fontSizes.sm }}
      text1NumberOfLines={0}
      text2Style={{ fontFamily: theme.fontFamilies.regular, fontSize: theme.fontSizes.xs }}
      text2NumberOfLines={0}
    />
  ),
});

const ToastProvider = () => {
  const theme = useTheme() as Theme;

  return <RNToastMessage config={toastConfig(theme)} />;
};

export { ToastProvider };
