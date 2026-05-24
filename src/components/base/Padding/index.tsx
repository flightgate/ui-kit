import { type ReactNode, useMemo } from 'react';
import type { SpacingToken } from '../../../theme';
import { resolvePadding } from './resolvePadding';
import { StyledPadding } from './styled';

interface PaddingProps {
  padding?: SpacingToken;
  paddingVertical?: SpacingToken;
  paddingHorizontal?: SpacingToken;
  paddingTop?: SpacingToken;
  paddingBottom?: SpacingToken;
  paddingLeft?: SpacingToken;
  paddingRight?: SpacingToken;
  children: ReactNode;
}

const Padding = ({
  padding,
  paddingVertical,
  paddingHorizontal,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  children,
}: PaddingProps) => {
  const resolved = useMemo(
    () =>
      resolvePadding({
        padding,
        paddingVertical,
        paddingHorizontal,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
      }),
    [
      padding,
      paddingVertical,
      paddingHorizontal,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
    ],
  );

  return <StyledPadding {...resolved}>{children}</StyledPadding>;
};

export type { PaddingProps };
export { Padding };
