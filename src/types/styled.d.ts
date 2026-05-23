import type { Theme } from 'src/theme';

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
