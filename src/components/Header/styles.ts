import { styled } from '@theme/stitches.config';

export const HeaderContainer = styled('View', {
  width: '100%',

  minHeight: 70,
  maxHeight: 70,

  backgroundColor: '$GRAY_600',
});

export const HeaderContent = styled('View', {
  flex: 1,

  flexDirection: 'row',
});

export const HeaderLogo = styled('View', {
  width: 100,
  height: 70,

  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$RED',
});

export const HeaderActionsContainer = styled('View', {
  flex: 1,

  flexDirection: 'row',
  justifyContent: 'flex-end',
});

export const HeaderActionButton = styled('TouchableOpacity', {
  minWidth: 200,
  maxWidth: 200,
  minHeight: 70,
  maxHeight: 70,

  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$RED',
});

export const HeaderActionButtonText = styled('Text', {
  fontFamily: '$REGULAR',
  fontSize: '$MD',
  color: '$WHITE',
  textTransform: 'uppercase',
});
