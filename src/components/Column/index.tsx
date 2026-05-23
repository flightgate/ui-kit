import type { ContainerProps } from '../base/Container';
import { Container } from '../base/Container';

type ColumnProps = Omit<ContainerProps, 'direction'>;

const Column = (props: ColumnProps) => <Container direction="column" {...props} />;

export type { ColumnProps };
export { Column };
