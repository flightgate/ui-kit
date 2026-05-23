import type { Theme } from 'src/theme';
import { useTheme as useStyledTheme } from 'styled-components/native';

const useTheme = (): Theme => useStyledTheme() as Theme;

export { useTheme };
