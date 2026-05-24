import { createContext, useContext } from 'react';

interface FontLoadingContextType {
  loaded: boolean;
  error: Error | null;
}

const FontLoadingContext = createContext<FontLoadingContextType>({ loaded: false, error: null });

const useFontLoading = () => useContext(FontLoadingContext);

export type { FontLoadingContextType };
export { FontLoadingContext, useFontLoading };
