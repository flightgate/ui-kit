import { useTheme as useStyledTheme } from 'styled-components/native';
import type { Theme } from '../theme';

const useTheme = (): Theme => useStyledTheme() as Theme;

export { useTheme };
