import { Padding, type PaddingProps } from 'src/components';
import { ActivityIndicator } from 'src/components/ActivityIndicator';
import { Text } from 'src/components/Text';
import type { BorderRadiusToken, BorderWidthToken, ColorToken } from 'src/theme';

import { StyledButton } from './styled';

interface ButtonProps extends PaddingProps {
  label: string;
  onPress: () => void;
  bg?: ColorToken;
  color?: ColorToken;
  borderWidth?: BorderWidthToken;
  borderColor?: ColorToken;
  disabled?: boolean;
  loading?: boolean;
  radius?: BorderRadiusToken;
}

const Button = ({
  label,
  onPress,
  bg = 'primary',
  color = 'white',
  borderWidth = 'none',
  borderColor = 'primary',
  disabled = false,
  loading = false,
  radius = 'sm',
  paddingHorizontal = 'md',
  paddingVertical = 'sm',
  ...paddingProps
}: ButtonProps) => (
  <StyledButton
    bg={bg}
    borderWidth={borderWidth}
    borderColor={borderColor}
    disabled={disabled || loading}
    radius={radius}
    onPress={onPress}
  >
    <Padding
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
      {...paddingProps}
    >
      {loading ? (
        <ActivityIndicator color={color} size="small" />
      ) : (
        <Text color={color}>{label}</Text>
      )}
    </Padding>
  </StyledButton>
);

export type { ButtonProps };
export { Button };
