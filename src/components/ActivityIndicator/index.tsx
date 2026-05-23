import type { ColorToken } from '../../theme';
import { Container } from '../base/Container';

import { StyledActivityIndicator } from './styled';

interface ActivityIndicatorProps {
  color?: ColorToken;
  size?: 'small' | 'large';
  isFullScreen?: boolean;
}

const ActivityIndicator = ({
  color = 'primary',
  size = 'small',
  isFullScreen = false,
}: ActivityIndicatorProps) => {
  const indicator = <StyledActivityIndicator color={color} size={size} />;

  if (isFullScreen) {
    return (
      <Container flex={1} justify="center" align="center">
        {indicator}
      </Container>
    );
  }

  return indicator;
};

export type { ActivityIndicatorProps };
export { ActivityIndicator };
