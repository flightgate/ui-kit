import { type SpacingProps, StyledSpacing } from './styled';

const Spacing = ({ size = 'md', direction = 'vertical' }: SpacingProps) => (
  <StyledSpacing size={size} direction={direction} />
);

export type { SpacingProps };
export { Spacing };
