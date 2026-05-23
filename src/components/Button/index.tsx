import type { ReactNode } from 'react';
import type {
  AlignItemsToken,
  BorderRadiusToken,
  BorderWidthToken,
  ColorToken,
  FontFamilyToken,
  FontSizeToken,
  JustifyContentToken,
  SpacingToken,
} from '../../theme';
import { ActivityIndicator } from '../ActivityIndicator';
import { Padding, type PaddingProps } from '../base/Padding';
import { Text } from '../Text';

import { StyledButton, StyledButtonContent } from './styled';

interface ButtonProps extends Omit<PaddingProps, 'children'> {
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
  fontSize?: FontSizeToken;
  fontFamily?: FontFamilyToken;
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
  fontSize,
  fontFamily,
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
          <Text color={color} fontSize={fontSize} fontFamily={fontFamily}>
            {label}
          </Text>
          {suffixIcon}
        </StyledButtonContent>
      )}
    </Padding>
  </StyledButton>
);

export type { ButtonProps };
export { Button };
