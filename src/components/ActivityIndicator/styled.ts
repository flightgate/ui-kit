import { ActivityIndicator as RNActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import type { ColorToken } from '../../theme';

interface StyledActivityIndicatorProps {
  color?: ColorToken;
}

const StyledActivityIndicator = styled(RNActivityIndicator).attrs<StyledActivityIndicatorProps>(
  ({ theme, color = 'primary' }) => ({
    color: theme.colors[color],
  }),
)``;

export type { StyledActivityIndicatorProps };
export { StyledActivityIndicator };
