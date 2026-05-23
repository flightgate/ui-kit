import type { SpacingToken } from 'src/theme';
import styled from 'styled-components/native';

type SpacingDirection = 'horizontal' | 'vertical';

interface SpacingProps {
  size?: SpacingToken;
  direction?: SpacingDirection;
}

const StyledSpacing = styled.View<SpacingProps>`
  ${({ theme, size = 'md', direction = 'vertical' }) => {
    if (direction === 'horizontal') {
      return `width: ${theme.spacings[size]}px;`;
    }

    return `height: ${theme.spacings[size]}px;`;
  }}
`;

export type { SpacingDirection, SpacingProps };
export { StyledSpacing };
