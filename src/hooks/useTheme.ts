import { useTheme as useStyledTheme } from 'styled-components/native';

import type { Theme } from '../theme/types';

const useTheme = (): Theme => useStyledTheme() as Theme;

export { useTheme };
