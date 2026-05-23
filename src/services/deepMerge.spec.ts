import { describe, expect, it } from 'vitest';

import { deepMerge } from './deepMerge';

describe('deepMerge', () => {
  it('returns the base when overrides is empty', () => {
    // Arrange
    const base = { a: 1, b: 2 };

    // Act
    const result = deepMerge(base, {});

    // Assert
    expect(result).toEqual({ a: 1, b: 2 });
  });

  it('overrides a shallow value', () => {
    // Arrange
    const base = { a: 1, b: 2 };

    // Act
    const result = deepMerge(base, { a: 99 });

    // Assert
    expect(result.a).toBe(99);
    expect(result.b).toBe(2);
  });

  it('merges nested objects without wiping sibling keys', () => {
    // Arrange
    const base = { colors: { primary: 'blue', secondary: 'gray' } };

    // Act
    const result = deepMerge(base, { colors: { primary: 'red' } });

    // Assert
    expect(result.colors.primary).toBe('red');
    expect(result.colors.secondary).toBe('gray');
  });

  it('handles multiple levels of nesting', () => {
    // Arrange
    const base = { a: { b: { c: 1, d: 2 } } };

    // Act
    const result = deepMerge(base, { a: { b: { c: 99 } } });

    // Assert
    expect(result.a.b.c).toBe(99);
    expect(result.a.b.d).toBe(2);
  });

  it('skips override keys with undefined value', () => {
    // Arrange
    const base = { a: 1, b: 2 };

    // Act
    const result = deepMerge(base, { a: undefined });

    // Assert
    expect(result.a).toBe(1);
  });

  it('does not mutate the base object', () => {
    // Arrange
    const base = { colors: { primary: 'blue' } };

    // Act
    deepMerge(base, { colors: { primary: 'red' } });

    // Assert
    expect(base.colors.primary).toBe('blue');
  });

  it('overwrites a primitive with another primitive', () => {
    // Arrange
    const base = { count: 1 };

    // Act
    const result = deepMerge(base, { count: 42 });

    // Assert
    expect(result.count).toBe(42);
  });
});
