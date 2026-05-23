import { Image } from 'expo-image';
import styled from 'styled-components/native';

import type { ColorToken } from '../../theme';

interface StyledAvatarProps {
  size?: number;
  bg?: ColorToken;
}

const StyledAvatar = styled.View<StyledAvatarProps>`
  background-color: ${({ theme, bg = 'bgSecondary' }) => theme.colors[bg]};
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
  height: ${({ size = 48 }) => size}px;
  width: ${({ size = 48 }) => size}px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StyledAvatarImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

export type { StyledAvatarProps };
export { StyledAvatar, StyledAvatarImage };
