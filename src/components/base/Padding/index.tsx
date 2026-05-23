import { useMemo } from 'react';
import type { SpacingToken } from 'src/theme';

import { StyledPadding } from './styled';

interface PaddingProps {
  padding?: SpacingToken;
  paddingVertical?: SpacingToken;
  paddingHorizontal?: SpacingToken;
  paddingTop?: SpacingToken;
  paddingBottom?: SpacingToken;
  paddingLeft?: SpacingToken;
  paddingRight?: SpacingToken;
  children: React.ReactNode;
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
  const resolved = useMemo(() => {
    const vertical = paddingVertical ?? padding;
    const horizontal = paddingHorizontal ?? padding;

    return {
      paddingTop: paddingTop ?? vertical,
      paddingBottom: paddingBottom ?? vertical,
      paddingLeft: paddingLeft ?? horizontal,
      paddingRight: paddingRight ?? horizontal,
    };
  }, [
    padding,
    paddingVertical,
    paddingHorizontal,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
  ]);

  return <StyledPadding {...resolved}>{children}</StyledPadding>;
};

export type { PaddingProps };
export { Padding };
