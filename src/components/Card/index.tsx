import { Border, type BorderProps, Padding, type PaddingProps } from 'src/components';
import type { BorderRadiusToken, ColorToken } from 'src/theme';

import { StyledCard } from './styled';

interface CardProps extends PaddingProps, BorderProps {
  radius?: BorderRadiusToken;
  bg?: ColorToken;
}

const Card = ({ padding = 'md', radius, bg, children, ...props }: CardProps) => (
  <Border {...props} radius={radius}>
    <StyledCard radius={radius} bg={bg}>
      <Padding padding={padding} {...props}>
        {children}
      </Padding>
    </StyledCard>
  </Border>
);

export type { CardProps };
export { Card };
