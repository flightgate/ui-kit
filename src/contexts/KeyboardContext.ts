import { createContext, useContext } from 'react';

interface KeyboardContextType {
  isKeyboardOpen: boolean;
  keyboardHeight: number;
}

const KeyboardContext = createContext<KeyboardContextType | undefined>(undefined);

const useKeyboard = () => {
  const context = useContext(KeyboardContext);

  if (!context) throw new Error('useKeyboard must be used inside KeyboardProvider');

  return context;
};

export type { KeyboardContextType };
export { KeyboardContext, useKeyboard };
