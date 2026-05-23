# @flightgate/ui-kit

Componentes, hooks, serviços e padrões para apps Expo/React Native.

## Instalação

```bash
# No seu projeto Expo existente
npx expo install @flightgate/ui-kit
```

Depois instale as dependências nativas que você for usar:

```bash
# Obrigatórias (base)
npx expo install \
  expo-image \
  expo-secure-store \
  react-native-reanimated \
  react-native-gesture-handler \
  react-native-safe-area-context \
  react-native-svg

# Opcionais (instale só o que precisar)
npx expo install expo-av                    # áudio/vídeo e gravação
npx expo install expo-image-picker          # câmera e galeria
npx expo install expo-screen-capture        # proteção contra screenshot
npx expo install expo-font                  # fontes customizadas
npx expo install expo-clipboard             # copy/paste
npx expo install expo-file-system           # acesso a arquivos
npx expo install lottie-react-native        # animações Lottie
npx expo install lucide-react-native        # ícones
npx expo install react-native-modalize      # bottom sheets e modais
npx expo install react-native-toast-message # notificações toast
npx expo install react-native-tab-view      # abas tabulares
npx expo install react-native-compressor    # compressão de mídia
npx expo install styled-components          # tema dinâmico
```

> Após instalar módulos nativos, rode `npx expo prebuild` e recompile o app.

## Uso

Você escolhe o quanto quer usar — desde componentes visuais isolados até a arquitetura completa.

### Nível 1 — Só componentes visuais

```tsx
import { Button, Input, Text, Card } from '@flightgate/ui-kit';

export default function LoginScreen() {
  return (
    <Card>
      <Text fontSize="lg" bold>Bem-vindo</Text>
      <Input label="E-mail" placeholder="seu@email.com" />
      <Button text="Entrar" onPress={() => {}} />
    </Card>
  );
}
```

### Nível 2 — Componentes + Tema

```tsx
// app/_layout.tsx
import { ThemeProvider } from '@flightgate/ui-kit';

const theme = {
  colors: {
    primary: '#6366F1',
    secondary: '#A5B4FC',
    // ...
  },
  fontSizes: { xs: 12, sm: 14, md: 16, lg: 18, xl: 22, xxl: 28 },
  spacings: { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48, xxxl: 64 },
  borderRadius: { none: 0, xs: 4, sm: 8, md: 12, lg: 16, full: 9999 },
};

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      {/* seu app */}
    </ThemeProvider>
  );
}
```

### Nível 3 — Arquitetura completa

```tsx
// app/_layout.tsx
import {
  ThemeProvider,
  AuthProvider,
  PermissionsProvider,
  ModalProvider,
  ToastProvider,
  NetworkProvider,
} from '@flightgate/ui-kit';

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <NetworkProvider>
        <AuthProvider>
          <PermissionsProvider>
            <ToastProvider>
              <ModalProvider>
                {/* seu app */}
              </ModalProvider>
            </ToastProvider>
          </PermissionsProvider>
        </AuthProvider>
      </NetworkProvider>
    </ThemeProvider>
  );
}
```

## Licença

MIT
