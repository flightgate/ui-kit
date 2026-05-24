import { describe, expect, it } from 'vitest';
import type { CheckboxOption } from './toggleCheckbox';
import { toggleCheckbox } from './toggleCheckbox';

describe('toggleCheckbox', () => {
  const optionA: CheckboxOption = { label: 'Option A', value: 'a' };
  const optionB: CheckboxOption = { label: 'Option B', value: 'b' };

  it('adds an option when it is not selected', () => {
    // Arrange
    const current: CheckboxOption[] = [optionA];

    // Act
    const result = toggleCheckbox(current, optionB, false, false);

    // Assert
    expect(result).toEqual([optionA, optionB]);
  });

  it('does not add a duplicate when option is already selected', () => {
    // Arrange
    const current: CheckboxOption[] = [optionA];

    // Act
    const result = toggleCheckbox(current, optionA, false, false);

    // Assert
    expect(result).toEqual([optionA]);
  });

  it('removes an option when canDeselect is true and option is selected', () => {
    // Arrange
    const current: CheckboxOption[] = [optionA, optionB];

    // Act
    const result = toggleCheckbox(current, optionA, true, false);

    // Assert
    expect(result).toEqual([optionB]);
  });

  it('does not remove an option when canDeselect is false', () => {
    // Arrange
    const current: CheckboxOption[] = [optionA];

    // Act
    const result = toggleCheckbox(current, optionA, false, false);

    // Assert
    expect(result).toEqual([optionA]);
  });

  it('returns current unchanged when readOnly is true', () => {
    // Arrange
    const current: CheckboxOption[] = [optionA];

    // Act
    const result = toggleCheckbox(current, optionB, false, true);

    // Assert
    expect(result).toBe(current);
  });

  it('handles empty list and adds the first option', () => {
    // Arrange
    const current: CheckboxOption[] = [];

    // Act
    const result = toggleCheckbox(current, optionA, false, false);

    // Assert
    expect(result).toEqual([optionA]);
  });
});
