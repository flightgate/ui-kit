import { describe, expect, it } from 'vitest';
import { resolveBorder } from './resolveBorder';

describe('resolveBorder', () => {
  it('returns all sides from borderWidth and borderColor shorthand', () => {
    // Arrange
    const input = { borderWidth: 'sm' as const, borderColor: 'primary' as const };

    // Act
    const result = resolveBorder(input);

    // Assert
    expect(result).toEqual({
      borderTopWidth: 'sm',
      borderTopColor: 'primary',
      borderBottomWidth: 'sm',
      borderBottomColor: 'primary',
      borderLeftWidth: 'sm',
      borderLeftColor: 'primary',
      borderRightWidth: 'sm',
      borderRightColor: 'primary',
      radius: undefined,
    });
  });

  it('overrides vertical axis with borderVerticalWidth and borderVerticalColor', () => {
    // Arrange
    const input = {
      borderWidth: 'sm' as const,
      borderColor: 'primary' as const,
      borderVerticalWidth: 'md' as const,
      borderVerticalColor: 'danger' as const,
    };

    // Act
    const result = resolveBorder(input);

    // Assert
    expect(result.borderTopWidth).toBe('md');
    expect(result.borderTopColor).toBe('danger');
    expect(result.borderBottomWidth).toBe('md');
    expect(result.borderBottomColor).toBe('danger');
    expect(result.borderLeftWidth).toBe('sm');
    expect(result.borderLeftColor).toBe('primary');
  });

  it('overrides horizontal axis with borderHorizontalWidth and borderHorizontalColor', () => {
    // Arrange
    const input = {
      borderWidth: 'sm' as const,
      borderColor: 'primary' as const,
      borderHorizontalWidth: 'lg' as const,
      borderHorizontalColor: 'success' as const,
    };

    // Act
    const result = resolveBorder(input);

    // Assert
    expect(result.borderLeftWidth).toBe('lg');
    expect(result.borderLeftColor).toBe('success');
    expect(result.borderRightWidth).toBe('lg');
    expect(result.borderRightColor).toBe('success');
    expect(result.borderTopWidth).toBe('sm');
  });

  it('individual sides take highest priority', () => {
    // Arrange
    const input = {
      borderWidth: 'sm' as const,
      borderTopWidth: 'none' as const,
      borderTopColor: 'transparent' as const,
    };

    // Act
    const result = resolveBorder(input);

    // Assert
    expect(result.borderTopWidth).toBe('none');
    expect(result.borderTopColor).toBe('transparent');
    expect(result.borderBottomWidth).toBe('sm');
  });

  it('passes radius through unchanged', () => {
    // Arrange
    const input = { radius: 'full' as const };

    // Act
    const result = resolveBorder(input);

    // Assert
    expect(result.radius).toBe('full');
  });

  it('returns all undefined when no input provided', () => {
    // Arrange
    const input = {};

    // Act
    const result = resolveBorder(input);

    // Assert
    expect(result.borderTopWidth).toBeUndefined();
    expect(result.borderTopColor).toBeUndefined();
    expect(result.radius).toBeUndefined();
  });
});
