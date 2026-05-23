import styled from 'styled-components/native';
import type { ColorToken, FontFamilyToken, FontSizeToken, TextAlignToken } from '../../theme';

interface TextProps {
  color?: ColorToken;
  fontSize?: FontSizeToken;
  fontFamily?: FontFamilyToken;
  align?: TextAlignToken;
}

const StyledText = styled.Text<TextProps>`
  color: ${({ theme, color = 'textPrimary' }) => theme.colors[color]};
  font-size: ${({ theme, fontSize = 'md' }) => theme.fontSizes[fontSize]}px;
  font-family: ${({ theme, fontFamily = 'regular' }) => theme.fontFamilies[fontFamily]};
  text-align: ${({ align = 'left' }) => align};
`;

export type { TextProps };
export { StyledText };
