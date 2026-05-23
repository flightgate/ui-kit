import type { ColorToken } from '../../theme';

import { Container } from '../base/Container';
import { Padding, type PaddingProps } from '../base/Padding';
import { SafeArea, type SafeAreaEdge, type SafeAreaProps } from '../base/SafeArea';

interface LayoutProps extends PaddingProps {
  bg?: ColorToken;
  edges?: SafeAreaEdge[];
  keyboardAware?: SafeAreaProps['keyboardAware'];
}

const Layout = ({ bg, edges, keyboardAware, children, ...paddingProps }: LayoutProps) => (
  <SafeArea edges={edges} keyboardAware={keyboardAware}>
    <Container flex={1} bg={bg}>
      <Padding {...paddingProps}>{children}</Padding>
    </Container>
  </SafeArea>
);

export type { LayoutProps };
export { Layout };
