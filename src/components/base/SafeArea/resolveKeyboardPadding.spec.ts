import { describe, expect, it } from 'vitest';
import { resolveKeyboardPadding } from './resolveKeyboardPadding';

describe('resolveKeyboardPadding', () => {
  it('returns keyboardHeight on Android when keyboard is open and keyboardAware is true', () => {
    // Arrange
    const keyboardAware = true;
    const isKeyboardOpen = true;
    const platform = 'android';
    const keyboardHeight = 300;

    // Act
    const result = resolveKeyboardPadding(keyboardAware, isKeyboardOpen, platform, keyboardHeight);

    // Assert
    expect(result).toBe(300);
  });

  it('returns undefined on iOS even when keyboard is open and keyboardAware is true', () => {
    // Arrange
    const keyboardAware = true;
    const isKeyboardOpen = true;
    const platform = 'ios';
    const keyboardHeight = 300;

    // Act
    const result = resolveKeyboardPadding(keyboardAware, isKeyboardOpen, platform, keyboardHeight);

    // Assert
    expect(result).toBeUndefined();
  });

  it('returns undefined when keyboard is closed', () => {
    // Arrange
    const keyboardAware = true;
    const isKeyboardOpen = false;
    const platform = 'android';
    const keyboardHeight = 300;

    // Act
    const result = resolveKeyboardPadding(keyboardAware, isKeyboardOpen, platform, keyboardHeight);

    // Assert
    expect(result).toBeUndefined();
  });

  it('returns undefined when keyboardAware is false', () => {
    // Arrange
    const keyboardAware = false;
    const isKeyboardOpen = true;
    const platform = 'android';
    const keyboardHeight = 300;

    // Act
    const result = resolveKeyboardPadding(keyboardAware, isKeyboardOpen, platform, keyboardHeight);

    // Assert
    expect(result).toBeUndefined();
  });
});
