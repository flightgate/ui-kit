import { Padding, type PaddingProps } from 'src/components';
import type { BorderRadiusToken, ColorToken } from 'src/theme';

import { StyledCard } from './styled';

interface CardProps extends PaddingProps {
  radius?: BorderRadiusToken;
  bg?: ColorToken;
}

const Card = ({ padding = 'md', radius, bg, children, ...paddingProps }: CardProps) => (
  <StyledCard radius={radius} bg={bg}>
    <Padding padding={padding} {...paddingProps}>
      {children}
    </Padding>
  </StyledCard>
);

export type { CardProps };
export { Card };
