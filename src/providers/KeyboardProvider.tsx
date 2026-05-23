import { type ReactNode, useEffect, useState } from 'react';
import { Keyboard, type KeyboardEvent } from 'react-native';

import { KeyboardContext } from '../contexts/KeyboardContext';

interface KeyboardProviderProps {
  children: ReactNode;
}

const KeyboardProvider = ({ children }: KeyboardProviderProps) => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', (e: KeyboardEvent) => {
      setIsKeyboardOpen(true);
      setKeyboardHeight(e.endCoordinates.height);
    });
    const hideSub = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOpen(false);
      setKeyboardHeight(0);
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <KeyboardContext.Provider value={{ isKeyboardOpen, keyboardHeight }}>
      {children}
    </KeyboardContext.Provider>
  );
};

export type { KeyboardProviderProps };
export { KeyboardProvider };
