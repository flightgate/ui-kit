import RNToastMessage, { type ToastShowParams } from 'react-native-toast-message';

const DEFAULT_OPTIONS: ToastShowParams = {
  visibilityTime: 4000,
  topOffset: 60,
};

const Toast = {
  success: (title: string, description?: string, options?: ToastShowParams) => {
    RNToastMessage.show({
      type: 'success',
      text1: title,
      text2: description,
      ...DEFAULT_OPTIONS,
      ...options,
    });
  },
  error: (title: string, description?: string, options?: ToastShowParams) => {
    RNToastMessage.show({
      type: 'error',
      text1: title,
      text2: description,
      ...DEFAULT_OPTIONS,
      ...options,
    });
  },
  warning: (title: string, description?: string, options?: ToastShowParams) => {
    RNToastMessage.show({
      type: 'warning',
      text1: title,
      text2: description,
      ...DEFAULT_OPTIONS,
      ...options,
    });
  },
  info: (title: string, description?: string, options?: ToastShowParams) => {
    RNToastMessage.show({
      type: 'info',
      text1: title,
      text2: description,
      ...DEFAULT_OPTIONS,
      ...options,
    });
  },
  hide: () => {
    RNToastMessage.hide();
  },
};

export { Toast };
