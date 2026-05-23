import { Padding, type PaddingProps } from 'src/components';
import { Text } from 'src/components/Text';
import type { ColorToken, FontSizeToken } from 'src/theme';
import { StyledBadgeContainer } from './styled';

interface BadgeProps extends PaddingProps {
  label: string;
  bg?: ColorToken;
  color?: ColorToken;
  fontSize?: FontSizeToken;
}

const Badge = ({
  label,
  bg = 'primary',
  color = 'white',
  fontSize = 'xs',
  padding = 'xs',
  ...paddingProps
}: BadgeProps) => (
  <StyledBadgeContainer bg={bg}>
    <Padding padding={padding} {...paddingProps}>
      <Text color={color} fontSize={fontSize}>
        {label}
      </Text>
    </Padding>
  </StyledBadgeContainer>
);

export type { BadgeProps };
export { Badge };
