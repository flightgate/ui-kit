import type { SpacingToken } from '../../theme';
import { Button } from '../Button';
import { Container } from '../base/Container';
import { Spacing } from '../Spacing';
import { Text } from '../Text';
import type { CheckboxAppearance } from './getCheckboxColors';
import { getCheckboxColors } from './getCheckboxColors';
import type { CheckboxOption } from './toggleCheckbox';
import { toggleCheckbox } from './toggleCheckbox';

interface CheckboxProps {
  options: CheckboxOption[];
  value: CheckboxOption[];
  onChange: (value: CheckboxOption[]) => void;
  canDeselect?: boolean;
  appearance?: CheckboxAppearance;
  error?: string;
  readOnly?: boolean;
  gap?: SpacingToken;
}

const Checkbox = ({
  options,
  value,
  onChange,
  canDeselect = false,
  appearance = 'background',
  error,
  readOnly = false,
  gap = 'xs',
}: CheckboxProps) => {
  const handlePress = (option: CheckboxOption) => {
    onChange(toggleCheckbox(value, option, canDeselect, readOnly));
  };

  return (
    <Container>
      <Container direction="row" gap={gap} wrap="wrap">
        {options.map((option, index) => {
          const isSelected = value.some((item) => item.value === option.value);
          const { bg, color, borderColor } = getCheckboxColors(isSelected, appearance);

          return (
            <Button
              key={String(index)}
              label={option.label}
              onPress={() => handlePress(option)}
              bg={bg}
              color={color}
              borderColor={borderColor}
              borderWidth="md"
              radius="full"
              fontFamily="semiBold"
              fontSize="sm"
              paddingHorizontal="sm"
              paddingVertical="xxs"
              disabled={readOnly}
            />
          );
        })}
      </Container>
      {error && (
        <>
          <Spacing size="xs" />
          <Text fontSize="xs" color="danger">
            {error}
          </Text>
        </>
      )}
    </Container>
  );
};

export type { CheckboxAppearance, CheckboxOption, CheckboxProps };
export { Checkbox };
