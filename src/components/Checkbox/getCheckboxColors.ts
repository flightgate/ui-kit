import type { ColorToken } from '../../theme';

type CheckboxAppearance = 'background' | 'borderOnly';

interface CheckboxColors {
  bg: ColorToken;
  color: ColorToken;
  borderColor: ColorToken;
}

const getCheckboxColors = (isSelected: boolean, appearance: CheckboxAppearance): CheckboxColors => {
  if (appearance === 'background') {
    return {
      bg: isSelected ? 'primary' : 'transparent',
      color: isSelected ? 'white' : 'textSecondary',
      borderColor: isSelected ? 'primary' : 'bgSecondary',
    };
  }

  return {
    bg: 'transparent',
    color: isSelected ? 'primary' : 'textSecondary',
    borderColor: isSelected ? 'primary' : 'textSecondary',
  };
};

export type { CheckboxAppearance, CheckboxColors };
export { getCheckboxColors };
