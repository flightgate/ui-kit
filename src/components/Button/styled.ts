import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import type {
  AlignItemsToken,
  BorderRadiusToken,
  BorderWidthToken,
  ColorToken,
  JustifyContentToken,
  SpacingToken,
} from '../../theme';

interface StyledButtonProps {
  bg?: ColorToken;
  borderWidth?: BorderWidthToken;
  borderColor?: ColorToken;
  disabled?: boolean;
  radius?: BorderRadiusToken;
}

interface StyledButtonContentProps {
  gap?: SpacingToken;
  align?: AlignItemsToken;
  justify?: JustifyContentToken;
}

const StyledButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})<StyledButtonProps>`
  background-color: ${({ theme, bg = 'primary' }) => theme.colors[bg]};
  border-radius: ${({ theme, radius = 'sm' }) => theme.borderRadius[radius]}px;
  border-width: ${({ theme, borderWidth = 'none' }) => theme.borderWidths[borderWidth]}px;
  border-color: ${({ theme, borderColor = 'primary' }) => theme.colors[borderColor]};
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled = false }) => (disabled ? 0.5 : 1)};
`;

const StyledButtonContent = styled.View<StyledButtonContentProps>`
  flex-direction: row;
  align-items: ${({ align = 'center' }) => align};
  justify-content: ${({ justify = 'center' }) => justify};
  gap: ${({ theme, gap = 'xs' }) => theme.spacings[gap]}px;
  width: 100%;
`;

export type { StyledButtonContentProps, StyledButtonProps };
export { StyledButton, StyledButtonContent };
