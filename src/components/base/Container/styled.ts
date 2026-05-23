import styled from 'styled-components/native';

import type {
  AlignItemsToken,
  BorderRadiusToken,
  ColorToken,
  FlexDirectionToken,
  FlexWrapToken,
  JustifyContentToken,
  SpacingToken,
} from '../../../theme';

interface ContainerProps {
  direction?: FlexDirectionToken;
  justify?: JustifyContentToken;
  align?: AlignItemsToken;
  wrap?: FlexWrapToken;
  gap?: SpacingToken;
  flex?: number;
  bg?: ColorToken;
  radius?: BorderRadiusToken;
}

const StyledContainer = styled.View<ContainerProps>`
  flex-direction: ${({ direction = 'column' }) => direction};
  justify-content: ${({ justify = 'flex-start' }) => justify};
  align-items: ${({ align = 'stretch' }) => align};
  flex-wrap: ${({ wrap = 'nowrap' }) => wrap};
  gap: ${({ theme, gap = 'none' }) => theme.spacings[gap]}px;
  background-color: ${({ theme, bg = 'transparent' }) => theme.colors[bg]};
  border-radius: ${({ theme, radius = 'none' }) => theme.borderRadius[radius]}px;
  ${({ flex }) => flex !== undefined && `flex: ${flex};`}
`;

export type { ContainerProps };
export { StyledContainer };
