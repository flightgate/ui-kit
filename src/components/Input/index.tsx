import { Eye, EyeOff } from 'lucide-react-native';
import type { ElementRef, ReactNode } from 'react';
import { forwardRef, useMemo, useState } from 'react';
import type { TextInputProps } from 'react-native';
import { View } from 'react-native';

import { useTheme } from '../../hooks/useTheme';
import type {
  BorderRadiusToken,
  BorderWidthToken,
  ColorToken,
  FontFamilyToken,
  FontSizeToken,
} from '../../theme';
import { Spacing } from '../Spacing';
import { Text } from '../Text';
import { resolveInputHeight } from './resolveInputHeight';
import { StyledTextInput, SuffixIconContainer } from './styled';

interface InputProps
  extends Pick<
    TextInputProps,
    | 'autoCapitalize'
    | 'editable'
    | 'keyboardType'
    | 'multiline'
    | 'numberOfLines'
    | 'onChangeText'
    | 'onSubmitEditing'
    | 'placeholder'
    | 'returnKeyType'
    | 'value'
  > {
  label?: string;
  labelColor?: ColorToken;
  labelFontSize?: FontSizeToken;
  labelFontFamily?: FontFamilyToken;
  error?: string;

  bg?: ColorToken;
  color?: ColorToken;
  fontSize?: FontSizeToken;
  fontFamily?: FontFamilyToken;
  borderColor?: ColorToken;
  borderWidth?: BorderWidthToken;
  radius?: BorderRadiusToken;

  isPassword?: boolean;
  suffixIcon?: ReactNode;
  maskedInput?: (text: string) => string;
  borderHighlight?: boolean;

  onBlur?: TextInputProps['onBlur'];
  onFocus?: TextInputProps['onFocus'];
}

const Input = forwardRef<ElementRef<typeof StyledTextInput>, InputProps>(
  (
    {
      label,
      labelColor = 'textPrimary',
      labelFontSize = 'sm',
      labelFontFamily = 'regular',
      error,

      bg = 'bgSecondary',
      color = 'textPrimary',
      fontSize = 'md',
      fontFamily = 'regular',
      borderColor = 'transparent',
      borderWidth = 'none',
      radius = 'sm',

      isPassword = false,
      suffixIcon,
      maskedInput,
      borderHighlight = true,

      multiline,
      numberOfLines,
      onChangeText,
      onBlur,
      onFocus,
      editable = true,
      ...textInputProps
    },
    ref,
  ) => {
    const theme = useTheme();
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const hasSuffix = isPassword || !!suffixIcon;

    const inputHeight = useMemo(
      () => resolveInputHeight(multiline, numberOfLines, theme.fontSizes[fontSize]),
      [multiline, numberOfLines, fontSize, theme],
    );

    const activeBorderColor: ColorToken = isFocused && borderHighlight ? 'primary' : borderColor;
    const activeBorderWidth: BorderWidthToken = isFocused && borderHighlight ? 'md' : borderWidth;

    const handleFocus: NonNullable<TextInputProps['onFocus']> = (e) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur: NonNullable<TextInputProps['onBlur']> = (e) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const handleChangeText = (text: string) => {
      onChangeText?.(maskedInput ? maskedInput(text) : text);
    };

    return (
      <View>
        {label && (
          <>
            <Text color={labelColor} fontSize={labelFontSize} fontFamily={labelFontFamily}>
              {label}
            </Text>
            <Spacing size="xs" />
          </>
        )}
        <View>
          <StyledTextInput
            bg={bg}
            color={color}
            fontSize={fontSize}
            fontFamily={fontFamily}
            borderColor={activeBorderColor}
            borderWidth={activeBorderWidth}
            radius={radius}
            multiline={multiline}
            numberOfLines={numberOfLines}
            inputHeight={inputHeight}
            hasSuffix={hasSuffix}
            editable={editable}
            secureTextEntry={isPassword && !isPasswordVisible}
            onFocus={handleFocus as never}
            onBlur={handleBlur as never}
            onChangeText={handleChangeText}
            ref={ref as never}
            // biome-ignore lint/suspicious/noExplicitAny: TODO: fix this
            {...(textInputProps as any)}
          />
          {isPassword && (
            <SuffixIconContainer
              onPress={() => setIsPasswordVisible((v) => !v)}
              activeOpacity={0.7}
            >
              {isPasswordVisible ? (
                <EyeOff size={24} color={theme.colors.textSecondary} />
              ) : (
                <Eye size={24} color={theme.colors.textSecondary} />
              )}
            </SuffixIconContainer>
          )}
          {!isPassword && suffixIcon && <SuffixIconContainer>{suffixIcon}</SuffixIconContainer>}
        </View>
        {error && (
          <>
            <Spacing size="xs" />
            <Text fontSize="xs" color="danger">
              {error}
            </Text>
          </>
        )}
      </View>
    );
  },
);

export type { InputProps };
export { Input };
