import type { BorderRadiusToken, BorderWidthToken, ColorToken } from '../../../theme';

interface BorderInput {
  borderWidth?: BorderWidthToken;
  borderColor?: ColorToken;
  borderVerticalWidth?: BorderWidthToken;
  borderVerticalColor?: ColorToken;
  borderHorizontalWidth?: BorderWidthToken;
  borderHorizontalColor?: ColorToken;
  borderTopWidth?: BorderWidthToken;
  borderTopColor?: ColorToken;
  borderBottomWidth?: BorderWidthToken;
  borderBottomColor?: ColorToken;
  borderLeftWidth?: BorderWidthToken;
  borderLeftColor?: ColorToken;
  borderRightWidth?: BorderWidthToken;
  borderRightColor?: ColorToken;
  radius?: BorderRadiusToken;
}

interface ResolvedBorder {
  borderTopWidth?: BorderWidthToken;
  borderTopColor?: ColorToken;
  borderBottomWidth?: BorderWidthToken;
  borderBottomColor?: ColorToken;
  borderLeftWidth?: BorderWidthToken;
  borderLeftColor?: ColorToken;
  borderRightWidth?: BorderWidthToken;
  borderRightColor?: ColorToken;
  radius?: BorderRadiusToken;
}

const resolveBorder = ({
  borderWidth,
  borderColor,
  borderVerticalWidth,
  borderVerticalColor,
  borderHorizontalWidth,
  borderHorizontalColor,
  borderTopWidth,
  borderTopColor,
  borderBottomWidth,
  borderBottomColor,
  borderLeftWidth,
  borderLeftColor,
  borderRightWidth,
  borderRightColor,
  radius,
}: BorderInput): ResolvedBorder => {
  const verticalWidth = borderVerticalWidth ?? borderWidth;
  const verticalColor = borderVerticalColor ?? borderColor;
  const horizontalWidth = borderHorizontalWidth ?? borderWidth;
  const horizontalColor = borderHorizontalColor ?? borderColor;

  return {
    borderTopWidth: borderTopWidth ?? verticalWidth,
    borderTopColor: borderTopColor ?? verticalColor,
    borderBottomWidth: borderBottomWidth ?? verticalWidth,
    borderBottomColor: borderBottomColor ?? verticalColor,
    borderLeftWidth: borderLeftWidth ?? horizontalWidth,
    borderLeftColor: borderLeftColor ?? horizontalColor,
    borderRightWidth: borderRightWidth ?? horizontalWidth,
    borderRightColor: borderRightColor ?? horizontalColor,
    radius,
  };
};

export type { BorderInput, ResolvedBorder };
export { resolveBorder };
