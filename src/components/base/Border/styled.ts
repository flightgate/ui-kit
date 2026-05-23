import styled, { css } from 'styled-components/native';
import type { BorderRadiusToken, BorderWidthToken, ColorToken } from '../../../theme';

interface ResolvedBorderProps {
  borderTopWidth?: BorderWidthToken;
  borderTopColor?: ColorToken;
  borderBottomWidth?: BorderWidthToken;
  borderBottomColor?: ColorToken;
  borderLeftWidth?: BorderWidthToken;
  borderLeftColor?: ColorToken;
  borderRightWidth?: BorderWidthToken;
  borderRightColor?: ColorToken;
  radius?: BorderRadiusToken;
}

const borderStyles = css<ResolvedBorderProps>`
  border-top-width: ${({ theme, borderTopWidth = 'none' }) => theme.borderWidths[borderTopWidth]}px;
  border-top-color: ${({ theme, borderTopColor = 'transparent' }) => theme.colors[borderTopColor]};
  border-bottom-width: ${({ theme, borderBottomWidth = 'none' }) => theme.borderWidths[borderBottomWidth]}px;
  border-bottom-color: ${({ theme, borderBottomColor = 'transparent' }) => theme.colors[borderBottomColor]};
  border-left-width: ${({ theme, borderLeftWidth = 'none' }) => theme.borderWidths[borderLeftWidth]}px;
  border-left-color: ${({ theme, borderLeftColor = 'transparent' }) => theme.colors[borderLeftColor]};
  border-right-width: ${({ theme, borderRightWidth = 'none' }) => theme.borderWidths[borderRightWidth]}px;
  border-right-color: ${({ theme, borderRightColor = 'transparent' }) => theme.colors[borderRightColor]};
  border-radius: ${({ theme, radius = 'none' }) => theme.borderRadius[radius]}px;
  overflow: hidden;
`;

const StyledBorder = styled.View<ResolvedBorderProps>`
  ${borderStyles}
`;

export type { ResolvedBorderProps };
export { borderStyles, StyledBorder };
