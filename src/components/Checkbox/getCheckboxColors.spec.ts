import { describe, expect, it } from 'vitest';
import { getCheckboxColors } from './getCheckboxColors';

describe('getCheckboxColors', () => {
  describe('background appearance', () => {
    it('returns primary bg and white text when selected', () => {
      // Arrange
      const isSelected = true;
      const appearance = 'background' as const;

      // Act
      const result = getCheckboxColors(isSelected, appearance);

      // Assert
      expect(result).toEqual({ bg: 'primary', color: 'white', borderColor: 'primary' });
    });

    it('returns transparent bg and secondary text when not selected', () => {
      // Arrange
      const isSelected = false;
      const appearance = 'background' as const;

      // Act
      const result = getCheckboxColors(isSelected, appearance);

      // Assert
      expect(result).toEqual({
        bg: 'transparent',
        color: 'textSecondary',
        borderColor: 'bgSecondary',
      });
    });
  });

  describe('borderOnly appearance', () => {
    it('returns transparent bg and primary text when selected', () => {
      // Arrange
      const isSelected = true;
      const appearance = 'borderOnly' as const;

      // Act
      const result = getCheckboxColors(isSelected, appearance);

      // Assert
      expect(result).toEqual({ bg: 'transparent', color: 'primary', borderColor: 'primary' });
    });

    it('returns transparent bg and secondary text when not selected', () => {
      // Arrange
      const isSelected = false;
      const appearance = 'borderOnly' as const;

      // Act
      const result = getCheckboxColors(isSelected, appearance);

      // Assert
      expect(result).toEqual({
        bg: 'transparent',
        color: 'textSecondary',
        borderColor: 'textSecondary',
      });
    });
  });
});
