import type { ReactNode } from 'react';

import { type ContainerProps, StyledContainer } from './styled';

interface ContainerComponentProps extends ContainerProps {
  children?: ReactNode;
}

const Container = ({ children, ...props }: ContainerComponentProps) => (
  <StyledContainer {...props}>{children}</StyledContainer>
);

export type { ContainerComponentProps as ContainerProps };
export { Container };
