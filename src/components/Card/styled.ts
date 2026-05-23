import styled from 'styled-components/native';
import type { BorderRadiusToken, ColorToken } from '../../theme';

interface StyledCardProps {
  radius?: BorderRadiusToken;
  bg?: ColorToken;
}

const StyledCard = styled.View<StyledCardProps>`
  background-color: ${({ theme, bg = 'bgSecondary' }) => theme.colors[bg]};
  border-radius: ${({ theme, radius = 'md' }) => theme.borderRadius[radius]}px;
`;

export type { StyledCardProps };
export { StyledCard };
