import type { DeepPartial } from '../theme';

const isObject = (value: unknown): value is object => typeof value === 'object' && value !== null;

const deepMerge = <T extends object>(base: T, overrides: DeepPartial<T>): T => {
  const result = { ...base };

  for (const key of Object.keys(overrides) as Array<keyof T>) {
    const override = overrides[key];

    if (override === undefined) continue;

    const baseValue = base[key];

    result[key] =
      isObject(baseValue) && isObject(override)
        ? (deepMerge(baseValue, override) as T[keyof T])
        : (override as T[keyof T]);
  }

  return result;
};

export { deepMerge };
