import type { BorderRadiusToken, ColorToken } from 'src/theme';

// biome-ignore lint/style/noRestrictedImports: To prevent circular dependency
import { Border, type BorderProps } from '../base/Border';
// biome-ignore lint/style/noRestrictedImports: To prevent circular dependency
import { Padding, type PaddingProps } from '../base/Padding';
import { StyledCard } from './styled';

interface CardProps extends PaddingProps, BorderProps {
  radius?: BorderRadiusToken;
  bg?: ColorToken;
}

const Card = ({
  padding = 'md',
  paddingVertical,
  paddingHorizontal,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  children,
  radius,
  bg,
  ...borderProps
}: CardProps) => (
  <Border {...borderProps} radius={radius}>
    <StyledCard bg={bg}>
      <Padding
        padding={padding}
        paddingVertical={paddingVertical}
        paddingHorizontal={paddingHorizontal}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
      >
        {children}
      </Padding>
    </StyledCard>
  </Border>
);

export type { CardProps };
export { Card };
