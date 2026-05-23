import type { ReactNode } from 'react';
import { forwardRef } from 'react';
import type { FlatListProps } from 'react-native';
import { Modalize } from 'react-native-modalize';

import { useTheme } from '../../hooks/useTheme';
import type { SpacingToken } from '../../theme';
import { Padding } from '../base/Padding';

interface ModalProps {
  children?: ReactNode;
  height?: number;
  padding?: SpacingToken;
  panGestureEnabled?: boolean;
  withHandle?: boolean;
  closeOnOverlayTap?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  headerComponent?: () => ReactNode;
  footerComponent?: () => ReactNode;
  flatListProps?: Pick<
    FlatListProps<unknown>,
    'data' | 'renderItem' | 'onEndReached' | 'onEndReachedThreshold'
  >;
}

const Modal = forwardRef<Modalize, ModalProps>(
  (
    {
      children,
      height,
      padding = 'lg',
      panGestureEnabled = true,
      withHandle = true,
      closeOnOverlayTap = true,
      onOpen,
      onClose,
      headerComponent,
      footerComponent,
      flatListProps,
    },
    ref,
  ) => {
    const theme = useTheme();

    const commonProps = {
      ref,
      onOpen,
      onClose,
      panGestureEnabled,
      withHandle,
      closeOnOverlayTap,
      adjustToContentHeight: !height,
      modalHeight: height,
    };

    if (flatListProps) {
      return (
        <Modalize
          {...commonProps}
          HeaderComponent={
            headerComponent ? <Padding padding={padding}>{headerComponent()}</Padding> : undefined
          }
          FooterComponent={
            footerComponent ? <Padding padding={padding}>{footerComponent()}</Padding> : undefined
          }
          flatListProps={{
            ...flatListProps,
            contentContainerStyle: {
              paddingHorizontal: theme.spacings[padding],
            },
          }}
        />
      );
    }

    return (
      <Modalize {...commonProps}>
        <Padding padding={padding}>{children ?? null}</Padding>
      </Modalize>
    );
  },
);

export type { ModalProps };
export { Modal };
