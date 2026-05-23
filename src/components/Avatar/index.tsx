import { User } from 'lucide-react-native';
import type { ReactNode } from 'react';

import { useTheme } from '../../hooks/useTheme';
import type { ColorToken } from '../../theme';
import { Column } from '../Column';
import { Row } from '../Row';
import { Spacing } from '../Spacing';
import { Text } from '../Text';
import { StyledAvatar, StyledAvatarImage } from './styled';

interface AvatarUser {
  name?: string | null;
  imageUri?: string | null;
  subtitle?: string | null;
}

interface AvatarProps {
  user: AvatarUser;
  size?: number;
  bg?: ColorToken;
  iconColor?: ColorToken;
  showInfo?: boolean;
}

const Avatar = ({
  user,
  size = 48,
  bg = 'bgSecondary',
  iconColor = 'textSecondary',
  showInfo = true,
}: AvatarProps) => {
  const theme = useTheme();

  const renderContent = (user: AvatarUser): ReactNode => {
    if (user.imageUri) {
      return (
        <StyledAvatarImage
          source={{ uri: user.imageUri }}
          contentFit="cover"
          cachePolicy="memory-disk"
          transition={200}
        />
      );
    }

    return <User color={theme.colors[iconColor]} size={size * 0.5} />;
  };

  return (
    <Row align="center">
      <StyledAvatar size={size} bg={bg}>
        {renderContent(user)}
      </StyledAvatar>
      {showInfo && user?.name && (
        <>
          <Spacing size="md" direction="horizontal" />
          <Column flex={1}>
            <Text fontFamily="semiBold">{user.name}</Text>
            {user.subtitle && (
              <Text fontSize="sm" color="textSecondary">
                {user.subtitle}
              </Text>
            )}
          </Column>
        </>
      )}
    </Row>
  );
};

export type { AvatarProps, AvatarUser };
export { Avatar };
