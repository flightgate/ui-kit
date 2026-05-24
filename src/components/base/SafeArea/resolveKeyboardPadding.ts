const resolveKeyboardPadding = (
  keyboardAware: boolean,
  isKeyboardOpen: boolean,
  platform: string,
  keyboardHeight: number,
): number | undefined => {
  if (keyboardAware && isKeyboardOpen && platform === 'android') {
    return keyboardHeight;
  }

  return undefined;
};

export { resolveKeyboardPadding };
