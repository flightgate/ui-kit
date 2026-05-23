import type { BorderRadiusToken, ColorToken } from 'src/theme';
import styled from 'styled-components/native';

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
