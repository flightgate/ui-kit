import type { SpacingToken } from '../../../theme';

interface PaddingInput {
  padding?: SpacingToken;
  paddingVertical?: SpacingToken;
  paddingHorizontal?: SpacingToken;
  paddingTop?: SpacingToken;
  paddingBottom?: SpacingToken;
  paddingLeft?: SpacingToken;
  paddingRight?: SpacingToken;
}

interface ResolvedPadding {
  paddingTop?: SpacingToken;
  paddingBottom?: SpacingToken;
  paddingLeft?: SpacingToken;
  paddingRight?: SpacingToken;
}

const resolvePadding = ({
  padding,
  paddingVertical,
  paddingHorizontal,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}: PaddingInput): ResolvedPadding => {
  const vertical = paddingVertical ?? padding;
  const horizontal = paddingHorizontal ?? padding;

  return {
    paddingTop: paddingTop ?? vertical,
    paddingBottom: paddingBottom ?? vertical,
    paddingLeft: paddingLeft ?? horizontal,
    paddingRight: paddingRight ?? horizontal,
  };
};

export type { PaddingInput, ResolvedPadding };
export { resolvePadding };
