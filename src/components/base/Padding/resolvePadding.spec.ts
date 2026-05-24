import { describe, expect, it } from 'vitest';
import { resolvePadding } from './resolvePadding';

describe('resolvePadding', () => {
  it('returns all sides from padding shorthand', () => {
    // Arrange
    const input = { padding: 'md' as const };

    // Act
    const result = resolvePadding(input);

    // Assert
    expect(result).toEqual({
      paddingTop: 'md',
      paddingBottom: 'md',
      paddingLeft: 'md',
      paddingRight: 'md',
    });
  });

  it('overrides vertical axis with paddingVertical', () => {
    // Arrange
    const input = { padding: 'md' as const, paddingVertical: 'sm' as const };

    // Act
    const result = resolvePadding(input);

    // Assert
    expect(result).toEqual({
      paddingTop: 'sm',
      paddingBottom: 'sm',
      paddingLeft: 'md',
      paddingRight: 'md',
    });
  });

  it('overrides horizontal axis with paddingHorizontal', () => {
    // Arrange
    const input = { padding: 'md' as const, paddingHorizontal: 'lg' as const };

    // Act
    const result = resolvePadding(input);

    // Assert
    expect(result).toEqual({
      paddingTop: 'md',
      paddingBottom: 'md',
      paddingLeft: 'lg',
      paddingRight: 'lg',
    });
  });

  it('individual sides take highest priority', () => {
    // Arrange
    const input = {
      padding: 'md' as const,
      paddingVertical: 'sm' as const,
      paddingHorizontal: 'lg' as const,
      paddingTop: 'xs' as const,
      paddingLeft: 'xxs' as const,
    };

    // Act
    const result = resolvePadding(input);

    // Assert
    expect(result).toEqual({
      paddingTop: 'xs',
      paddingBottom: 'sm',
      paddingLeft: 'xxs',
      paddingRight: 'lg',
    });
  });

  it('returns undefined sides when no input provided', () => {
    // Arrange
    const input = {};

    // Act
    const result = resolvePadding(input);

    // Assert
    expect(result).toEqual({
      paddingTop: undefined,
      paddingBottom: undefined,
      paddingLeft: undefined,
      paddingRight: undefined,
    });
  });
});
