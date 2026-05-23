import { TouchableOpacity } from 'react-native';
import type { BorderRadiusToken, BorderWidthToken, ColorToken } from 'src/theme';
import styled from 'styled-components/native';

interface StyledButtonProps {
  bg?: ColorToken;
  borderWidth?: BorderWidthToken;
  borderColor?: ColorToken;
  disabled?: boolean;
  radius?: BorderRadiusToken;
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

export type { StyledButtonProps };
export { StyledButton };
