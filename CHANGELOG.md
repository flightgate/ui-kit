# @flightgate/ui-kit

## 0.1.0-beta.3

### Minor Changes

- ec9489d: Add FontProvider, ToastProvider, UIKitProvider and test suite

  **Providers:**

  - `FontProvider` — loads fonts via `expo-font`, bundles Montserrat by default; accepts `fontAssets` and `fontFamilies` for full customization. Must be placed inside `ThemeProvider`.
  - `ToastProvider` — renders `react-native-toast-message` configured with theme colors for `success`, `error`, `warning` and `info` types.
  - `UIKitProvider` — single all-in-one provider that composes `ThemeProvider`, `FontProvider`, `KeyboardProvider` and `ToastProvider`. Accepts all customization props from each sub-provider.

  **Context & hook:**

  - `FontLoadingContext` + `useFontLoading()` — exposes `{ loaded, error }` font loading state.

  **Service:**

  - `Toast` — static API: `Toast.success()`, `Toast.error()`, `Toast.warning()`, `Toast.info()`, `Toast.hide()`.

  **Exports:**

  - `DEFAULT_FONT_ASSETS` and `DEFAULT_FONT_FAMILIES` — Montserrat defaults, exported for consumers who want to extend them.

  **Tests:**

  - Unit tests for all pure logic functions: `resolvePadding`, `resolveBorder`, `getCheckboxColors`, `toggleCheckbox`, `resolveInputHeight`, `resolveKeyboardPadding` (42 tests total).

## 0.1.0-beta.2

### Minor Changes

- 48770af: Initial component library release with full theme system and core components.

  **Theme**

  - Token system: `ColorToken`, `FontSizeToken`, `SpacingToken`, `BorderRadiusToken`, `BorderWidthToken`, `FontFamilyToken`, `FlexDirectionToken`, `FlexWrapToken`, `JustifyContentToken`, `AlignItemsToken`, `TextAlignToken`
  - `LINE_HEIGHT_MULTIPLIER` shared constant (1.3) applied to `Text` and `Input`
  - `createTheme` for custom theme overrides via `DeepPartial<Theme>`
  - `ThemeProvider` and `useTheme` hook

  **Base components**

  - `Container` — flex layout with direction, justify, align, gap, wrap, bg, radius, flex
  - `Padding` — full padding hierarchy (padding → vertical/horizontal → top/bottom/left/right)
  - `Border` — full border hierarchy with width and color per side + radius
  - `SafeArea` — wraps `SafeAreaView` with Android keyboard padding support via `KeyboardProvider`

  **Layout components**

  - `Row` — horizontal Container with center align default
  - `Column` — vertical Container
  - `Layout` — SafeArea + Container (bg) + Padding composition; accepts `keyboardAware` and `edges`
  - `Spacing` — vertical or horizontal spacer using spacing tokens

  **UI components**

  - `Text` — color, fontSize, fontFamily, align, automatic line-height
  - `Button` — themed, supports prefix/suffix icons, loading state, full padding control
  - `Badge` — label chip with bg, color, fontSize and padding props
  - `Card` — Border + bg + Padding composition with full border/padding hierarchy
  - `ActivityIndicator` — themed spinner, supports fullscreen mode
  - `Avatar` — single or overlapping multi-user display with `expo-image` and lucide fallback icon
  - `Icon` — thin wrapper for any lucide-react-native icon with color and size tokens
  - `Input` — TextInput with label, error, focus highlight, password toggle, mask, suffix icon, multiline
  - `Checkbox` — multi-option chip selector with `background`/`borderOnly` appearance
  - `Select` — self-contained dropdown using `Popup` internally, no external context required
  - `Popup` — compact bottom sheet via `react-native-modalize` with margin and padding control
  - `Modal` — full bottom sheet with optional FlatList, header and footer support

  **Providers and contexts**

  - `KeyboardProvider` + `useKeyboard` — tracks keyboard open state and height for Android safe area compensation

  **Build**

  - `pnpm build` compiles via `tsc --project tsconfig.build.json` to `dist/` with declaration maps
  - Changesets + GitHub Actions release pipeline
