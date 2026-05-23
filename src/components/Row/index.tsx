import type { ContainerProps } from '../base/Container';
import { Container } from '../base/Container';

type RowProps = Omit<ContainerProps, 'direction'>;

const Row = ({ align = 'center', ...props }: RowProps) => (
  <Container direction="row" align={align} {...props} />
);

export type { RowProps };
export { Row };
