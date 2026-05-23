import { type ReactNode, useMemo } from 'react';
import type { BorderRadiusToken, BorderWidthToken, ColorToken } from 'src/theme';

import { type ResolvedBorderProps, StyledBorder } from './styled';

interface BorderProps {
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

interface BorderComponentProps extends BorderProps {
  children: ReactNode;
}

const Border = ({
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
  children,
}: BorderComponentProps) => {
  const resolved = useMemo<ResolvedBorderProps>(() => {
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
  }, [
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
  ]);

  return <StyledBorder {...resolved}>{children}</StyledBorder>;
};

export type { BorderComponentProps, BorderProps };
export { Border };
