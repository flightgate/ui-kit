import { LINE_HEIGHT_MULTIPLIER } from '../../theme';

const DEFAULT_INPUT_HEIGHT = 56;

const resolveInputHeight = (
  multiline: boolean | undefined,
  numberOfLines: number | undefined,
  fontSize: number,
): number => {
  if (multiline && numberOfLines) {
    return numberOfLines * fontSize * LINE_HEIGHT_MULTIPLIER;
  }

  return DEFAULT_INPUT_HEIGHT;
};

export { DEFAULT_INPUT_HEIGHT, resolveInputHeight };
