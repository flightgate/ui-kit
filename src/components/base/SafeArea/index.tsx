import type { ReactNode } from 'react';
import { Platform } from 'react-native';

import { useKeyboard } from '../../../contexts/KeyboardContext';
import { resolveKeyboardPadding } from './resolveKeyboardPadding';
import { type SafeAreaEdge, StyledSafeArea } from './styled';

interface SafeAreaProps {
  children: ReactNode;
  edges?: SafeAreaEdge[];
  keyboardAware?: boolean;
}

const SafeArea = ({ children, edges, keyboardAware = false }: SafeAreaProps) => {
  const { isKeyboardOpen, keyboardHeight } = useKeyboard();

  const androidKeyboardPadding = resolveKeyboardPadding(
    keyboardAware,
    isKeyboardOpen,
    Platform.OS,
    keyboardHeight,
  );

  return (
    <StyledSafeArea edges={edges} androidKeyboardPadding={androidKeyboardPadding}>
      {children}
    </StyledSafeArea>
  );
};

export type { SafeAreaEdge, SafeAreaProps };
export { SafeArea };
