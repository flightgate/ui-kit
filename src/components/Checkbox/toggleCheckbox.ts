interface CheckboxOption {
  label: string;
  value: string;
}

const toggleCheckbox = (
  current: CheckboxOption[],
  option: CheckboxOption,
  canDeselect: boolean,
  readOnly: boolean,
): CheckboxOption[] => {
  if (readOnly) return current;

  const isSelected = current.some((item) => item.value === option.value);

  if (canDeselect && isSelected) {
    return current.filter((item) => item.value !== option.value);
  }

  if (!isSelected) {
    return [...current, option];
  }

  return current;
};

export type { CheckboxOption };
export { toggleCheckbox };
