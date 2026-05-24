---
"@flightgate/ui-kit": minor
---

Add FontProvider, ToastProvider, UIKitProvider and test suite

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
