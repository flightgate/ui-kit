import { ChevronDown } from 'lucide-react-native';
import { useRef } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import type { Modalize } from 'react-native-modalize';

import { useTheme } from '../../hooks/useTheme';
import type { ColorToken, FontFamilyToken, FontSizeToken } from '../../theme';
import { Column } from '../Column';
import { Popup } from '../Popup';
import { Spacing } from '../Spacing';
import { Text } from '../Text';
import { StyledSelectTrigger } from './styled';

interface SelectItem {
  label: string;
  value: string | number;
}

interface SelectProps {
  items: SelectItem[];
  value?: string | number;
  onChange: (value: string | number) => void;
  label?: string;
  placeholder?: string;
  labelColor?: ColorToken;
  labelFontSize?: FontSizeToken;
  labelFontFamily?: FontFamilyToken;
  error?: string;
  hasError?: boolean;
}

const Select = ({
  items,
  value,
  onChange,
  label,
  placeholder = 'Selecione',
  labelColor = 'textPrimary',
  labelFontSize = 'sm',
  labelFontFamily = 'regular',
  error,
  hasError = false,
}: SelectProps) => {
  const theme = useTheme();
  const popupRef = useRef<Modalize>(null);

  const selectedLabel = items.find((item) => item.value === value)?.label;
  const showError = hasError || !!error;

  const handleSelect = (itemValue: string | number) => {
    onChange(itemValue);
    popupRef.current?.close();
  };

  return (
    <>
      <Column>
        {label && (
          <>
            <Text color={labelColor} fontSize={labelFontSize} fontFamily={labelFontFamily}>
              {label}
            </Text>
            <Spacing size="xs" />
          </>
        )}
        <StyledSelectTrigger
          hasError={showError}
          onPress={() => popupRef.current?.open()}
          activeOpacity={0.8}
        >
          <Text color={selectedLabel ? 'textPrimary' : 'textSecondary'}>
            {selectedLabel ?? placeholder}
          </Text>
          <ChevronDown color={theme.colors.textSecondary} size={20} />
        </StyledSelectTrigger>
        {error && (
          <>
            <Spacing size="xs" />
            <Text fontSize="xs" color="danger">
              {error}
            </Text>
          </>
        )}
      </Column>
      <Popup ref={popupRef} padding="none">
        <FlatList
          data={items}
          keyExtractor={(item) => String(item.value)}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleSelect(item.value)}
              style={{
                padding: theme.spacings.md,
                borderBottomWidth: 1,
                borderBottomColor: theme.colors.bgSecondary,
              }}
            >
              <Text color={item.value === value ? 'primary' : 'textPrimary'}>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      </Popup>
    </>
  );
};

export type { SelectItem, SelectProps };
export { Select };
