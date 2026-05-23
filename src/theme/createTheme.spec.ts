import { describe, expect, it } from 'vitest';
import { createTheme } from './createTheme';
import { defaultTheme } from './defaults';

describe('createTheme', () => {
  it('returns the default theme when called with no arguments', () => {
    // Arrange & Act
    const result = createTheme();

    // Assert
    expect(result).toEqual(defaultTheme);
  });

  it('returns the default theme when called with an empty object', () => {
    // Arrange & Act
    const result = createTheme({});

    // Assert
    expect(result).toEqual(defaultTheme);
  });

  it('overrides a single color without affecting the others', () => {
    // Arrange
    const expectedTheme = {
      ...defaultTheme,
      colors: { ...defaultTheme.colors, primary: '#FF0000' },
    };

    // Act
    const result = createTheme({ colors: { primary: '#FF0000' } });

    // Assert
    expect(result).toEqual(expectedTheme);
  });

  it('overrides multiple sections independently', () => {
    // Arrange
    const expectedTheme = {
      ...defaultTheme,
      colors: { ...defaultTheme.colors, primary: '#FF0000' },
      fontSizes: { ...defaultTheme.fontSizes, md: 18 },
      spacings: { ...defaultTheme.spacings, lg: 28 },
    };

    // Act
    const result = createTheme({
      colors: { primary: '#FF0000' },
      fontSizes: { md: 18 },
      spacings: { lg: 28 },
    });

    // Assert
    expect(result).toEqual(expectedTheme);
  });

  it('overrides font families without affecting unspecified ones', () => {
    // Arrange
    const expectedTheme = {
      ...defaultTheme,
      fontFamilies: {
        ...defaultTheme.fontFamilies,
        regular: 'Inter-Regular',
        bold: 'Inter-Bold',
      },
    };

    // Act
    const result = createTheme({
      fontFamilies: { regular: 'Inter-Regular', bold: 'Inter-Bold' },
    });

    // Assert
    expect(result).toEqual(expectedTheme);
  });
});
