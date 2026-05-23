import styled from 'styled-components/native';
import type { ColorToken } from '../../theme';

interface StyledBadgeContainerProps {
  bg?: ColorToken;
}

const StyledBadgeContainer = styled.View<StyledBadgeContainerProps>`
  background-color: ${({ theme, bg = 'primary' }) => theme.colors[bg]};
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
  align-self: flex-start;
`;

export type { StyledBadgeContainerProps };
export { StyledBadgeContainer };
