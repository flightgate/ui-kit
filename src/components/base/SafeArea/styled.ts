import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

type SafeAreaEdge = 'top' | 'bottom' | 'left' | 'right';

interface StyledSafeAreaProps {
  edges?: SafeAreaEdge[];
  androidKeyboardPadding?: number;
}

const StyledSafeArea = styled(SafeAreaView).attrs<StyledSafeAreaProps>(
  ({ edges = ['top', 'bottom', 'left', 'right'] }) => ({ edges }),
)<StyledSafeAreaProps>`
  flex: 1;
  ${({ androidKeyboardPadding }) =>
    androidKeyboardPadding !== undefined && `padding-bottom: ${androidKeyboardPadding}px;`}
`;

export type { SafeAreaEdge, StyledSafeAreaProps };
export { StyledSafeArea };
