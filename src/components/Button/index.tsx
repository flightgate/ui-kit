import type { ReactNode } from 'react';

import { Padding, type PaddingProps } from 'src/components';
import { ActivityIndicator } from 'src/components/ActivityIndicator';
import { Text } from 'src/components/Text';
import type {
  AlignItemsToken,
  BorderRadiusToken,
  BorderWidthToken,
  ColorToken,
  JustifyContentToken,
  SpacingToken,
} from 'src/theme';

import { StyledButton, StyledButtonContent } from './styled';

interface ButtonProps extends PaddingProps {
  label: string;
  onPress: () => void;
  bg?: ColorToken;
  color?: ColorToken;
  borderWidth?: BorderWidthToken;
  borderColor?: ColorToken;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  iconGap?: SpacingToken;
  align?: AlignItemsToken;
  justify?: JustifyContentToken;
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
  prefixIcon,
  suffixIcon,
  iconGap = 'xs',
  align = 'center',
  justify = 'center',
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
        <StyledButtonContent gap={iconGap} align={align} justify={justify}>
          {prefixIcon}
          <Text color={color}>{label}</Text>
          {suffixIcon}
        </StyledButtonContent>
      )}
    </Padding>
  </StyledButton>
);

export type { ButtonProps };
export { Button };
