import { deepMerge } from '../services';
import { defaultTheme } from './defaults';
import type { DeepPartial, Theme } from './types';

const createTheme = (overrides: DeepPartial<Theme> = {}): Theme =>
  deepMerge(defaultTheme, overrides);

export { createTheme };
