import styled from 'styled-components/native';
import type {
  BorderRadiusToken,
  BorderWidthToken,
  ColorToken,
  FontFamilyToken,
  FontSizeToken,
} from '../../theme';

interface StyledTextInputProps {
  bg?: ColorToken;
  color?: ColorToken;
  fontSize?: FontSizeToken;
  fontFamily?: FontFamilyToken;
  borderColor?: ColorToken;
  borderWidth?: BorderWidthToken;
  radius?: BorderRadiusToken;
  multiline?: boolean;
  hasSuffix?: boolean;
  inputHeight?: number;
}

const StyledTextInput = styled.TextInput.attrs<StyledTextInputProps>(({ theme, multiline }) => ({
  placeholderTextColor: theme.colors.textSecondary,
  textAlignVertical: multiline ? 'top' : 'center',
}))<StyledTextInputProps>`
  width: 100%;
  height: ${({ inputHeight = 56 }) => inputHeight}px;
  background-color: ${({ theme, bg = 'bgSecondary' }) => theme.colors[bg]};
  color: ${({ theme, color = 'textPrimary' }) => theme.colors[color]};
  font-size: ${({ theme, fontSize = 'md' }) => theme.fontSizes[fontSize]}px;
  font-family: ${({ theme, fontFamily = 'regular' }) => theme.fontFamilies[fontFamily]};
  border-color: ${({ theme, borderColor = 'transparent' }) => theme.colors[borderColor]};
  border-width: ${({ theme, borderWidth = 'none' }) => theme.borderWidths[borderWidth]}px;
  border-radius: ${({ theme, radius = 'sm' }) => theme.borderRadius[radius]}px;
  padding-left: ${({ theme }) => theme.spacings.md}px;
  padding-right: ${({ theme, hasSuffix }) => (hasSuffix ? 48 : theme.spacings.md)}px;
`;

const SuffixIconContainer = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  height: 100%;
  width: 48px;
  justify-content: center;
  align-items: center;
`;

export type { StyledTextInputProps };
export { StyledTextInput, SuffixIconContainer };
