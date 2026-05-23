import type { ColorToken, SpacingToken } from '../../theme';
import { Button } from '../Button';
import { Container } from '../base/Container';
import { Spacing } from '../Spacing';
import { Text } from '../Text';

interface CheckboxOption {
  label: string;
  value: string;
}

type CheckboxAppearance = 'background' | 'borderOnly';

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

const getColors = (
  isSelected: boolean,
  appearance: CheckboxAppearance,
): { bg: ColorToken; color: ColorToken; borderColor: ColorToken } => {
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
    if (readOnly) return;

    const isSelected = value.some((item) => item.value === option.value);

    if (canDeselect && isSelected) {
      onChange(value.filter((item) => item.value !== option.value));
      return;
    }

    if (!isSelected) {
      onChange([...value, option]);
    }
  };

  return (
    <Container>
      <Container direction="row" gap={gap} wrap="wrap">
        {options.map((option, index) => {
          const isSelected = value.some((item) => item.value === option.value);
          const { bg, color, borderColor } = getColors(isSelected, appearance);

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
