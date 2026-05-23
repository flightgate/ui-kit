import { deepMerge } from '../services/deepMerge';
import { defaultTheme } from './defaults';
import type { DeepPartial, Theme } from './types';

const createTheme = (overrides: DeepPartial<Theme> = {}): Theme =>
  deepMerge(defaultTheme, overrides);

export { createTheme };
