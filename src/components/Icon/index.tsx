import type { ComponentType } from 'react';

import { useTheme } from '../../hooks/useTheme';
import type { ColorToken, FontSizeToken } from '../../theme';

type LucideIconComponent = ComponentType<{
  color?: string;
  size?: number;
}>;

interface IconProps {
  icon: LucideIconComponent;
  color?: ColorToken;
  size?: FontSizeToken | number;
}

const Icon = ({ icon: LucideIcon, color = 'textPrimary', size = 'md' }: IconProps) => {
  const theme = useTheme();
  const iconSize = typeof size === 'number' ? size : theme.fontSizes[size];

  return <LucideIcon color={theme.colors[color]} size={iconSize} />;
};

export type { IconProps, LucideIconComponent };
export { Icon };
