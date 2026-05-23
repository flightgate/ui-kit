import type { ReactNode } from 'react';

import { StyledText, type TextProps } from './styled';

interface TextComponentProps extends TextProps {
  children?: ReactNode;
}

const Text = ({ children, ...props }: TextComponentProps) => (
  <StyledText {...props}>{children}</StyledText>
);

export type { TextComponentProps as TextProps };
export { Text };
