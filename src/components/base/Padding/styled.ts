import styled from 'styled-components/native';
import type { SpacingToken } from '../../../theme';

interface ResolvedPaddingProps {
  paddingTop?: SpacingToken;
  paddingBottom?: SpacingToken;
  paddingLeft?: SpacingToken;
  paddingRight?: SpacingToken;
}

const StyledPadding = styled.View<ResolvedPaddingProps>`
  padding-top: ${({ theme, paddingTop = 'none' }) => theme.spacings[paddingTop]}px;
  padding-bottom: ${({ theme, paddingBottom = 'none' }) => theme.spacings[paddingBottom]}px;
  padding-left: ${({ theme, paddingLeft = 'none' }) => theme.spacings[paddingLeft]}px;
  padding-right: ${({ theme, paddingRight = 'none' }) => theme.spacings[paddingRight]}px;
`;

export type { ResolvedPaddingProps };
export { StyledPadding };
