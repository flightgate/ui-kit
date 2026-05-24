import { describe, expect, it } from 'vitest';
import { LINE_HEIGHT_MULTIPLIER } from '../../theme';
import { DEFAULT_INPUT_HEIGHT, resolveInputHeight } from './resolveInputHeight';

describe('resolveInputHeight', () => {
  it('returns DEFAULT_INPUT_HEIGHT when not multiline', () => {
    // Arrange
    const multiline = false;
    const numberOfLines = undefined;
    const fontSize = 16;

    // Act
    const result = resolveInputHeight(multiline, numberOfLines, fontSize);

    // Assert
    expect(result).toBe(DEFAULT_INPUT_HEIGHT);
  });

  it('returns DEFAULT_INPUT_HEIGHT when multiline but numberOfLines is undefined', () => {
    // Arrange
    const multiline = true;
    const numberOfLines = undefined;
    const fontSize = 16;

    // Act
    const result = resolveInputHeight(multiline, numberOfLines, fontSize);

    // Assert
    expect(result).toBe(DEFAULT_INPUT_HEIGHT);
  });

  it('returns DEFAULT_INPUT_HEIGHT when numberOfLines is set but multiline is false', () => {
    // Arrange
    const multiline = false;
    const numberOfLines = 4;
    const fontSize = 16;

    // Act
    const result = resolveInputHeight(multiline, numberOfLines, fontSize);

    // Assert
    expect(result).toBe(DEFAULT_INPUT_HEIGHT);
  });

  it('computes height from numberOfLines and fontSize when multiline', () => {
    // Arrange
    const multiline = true;
    const numberOfLines = 4;
    const fontSize = 16;

    // Act
    const result = resolveInputHeight(multiline, numberOfLines, fontSize);

    // Assert
    expect(result).toBe(numberOfLines * fontSize * LINE_HEIGHT_MULTIPLIER);
  });

  it('scales proportionally with different font sizes', () => {
    // Arrange
    const multiline = true;
    const numberOfLines = 3;
    const fontSizeA = 12;
    const fontSizeB = 24;

    // Act
    const resultA = resolveInputHeight(multiline, numberOfLines, fontSizeA);
    const resultB = resolveInputHeight(multiline, numberOfLines, fontSizeB);

    // Assert
    expect(resultB).toBe(resultA * 2);
  });
});
