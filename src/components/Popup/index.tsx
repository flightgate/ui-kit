import type { ReactNode } from 'react';
import { forwardRef } from 'react';
import { Modalize } from 'react-native-modalize';

import { useTheme } from '../../hooks/useTheme';
import type { SpacingToken } from '../../theme';
import type { PaddingProps } from '../base/Padding';
import { Padding } from '../base/Padding';

interface PopupProps extends Omit<PaddingProps, 'children'> {
  children?: ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
  marginVertical?: number | 'auto';
  marginHorizontal?: number | 'auto';
  fullWidth?: boolean;
  panGestureEnabled?: boolean;
  withHandle?: boolean;
  closeOnOverlayTap?: boolean;
  padding?: SpacingToken;
}

const Popup = forwardRef<Modalize, PopupProps>(
  (
    {
      children,
      onOpen,
      onClose,
      marginVertical = 'auto',
      marginHorizontal = 'auto',
      fullWidth = false,
      panGestureEnabled = true,
      withHandle = false,
      closeOnOverlayTap = true,
      padding = 'md',
      ...paddingProps
    },
    ref,
  ) => {
    const theme = useTheme();

    const modalStyle = {
      marginHorizontal: fullWidth ? theme.spacings.lg : marginHorizontal,
      marginVertical,
      borderRadius: theme.borderRadius.md,
      backgroundColor: theme.colors.bgPrimary,
    };

    return (
      <Modalize
        ref={ref}
        onOpen={onOpen}
        onClose={onClose}
        panGestureEnabled={panGestureEnabled}
        withHandle={withHandle}
        closeOnOverlayTap={closeOnOverlayTap}
        adjustToContentHeight
        modalStyle={modalStyle}
      >
        <Padding padding={padding} {...paddingProps}>
          {children ?? null}
        </Padding>
      </Modalize>
    );
  },
);

export type { PopupProps };
export { Popup };
