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
  width: 120,
  height: 70,

  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$RED',
});

export const HeaderTableNumberContainer = styled('View', {
  minHeight: 70,
  maxHeight: 70,

  alignItems: 'center',
  justifyContent: 'center',
});

export const HeaderHeaderTableNumberButton = styled('TouchableOpacity', {
  width: 120,
  height: 50,

  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: 25,

  backgroundColor: '$GRAY_500',

  marginRight: 20,
}).attrs(() => ({
  activeOpacity: 0.7,
}));

export const HeaderHeaderTableNumberButtonText = styled('Text', {
  fontFamily: '$REGULAR',
  fontSize: '$MD',
  color: '$GRAY_100',
  textTransform: 'uppercase',
});

export const HeaderSearchContainer = styled('View', {
  width: 300,
  minHeight: 70,
  maxHeight: 70,

  flexDirection: 'row',
  alignItems: 'center',

  paddingHorizontal: 10,

  borderLeftWidth: 1,
  borderLeftColor: '$GRAY_100',
});

export const HeaderSearchContent = styled('View', {
  flex: 1,
  minHeight: 50,
  maxHeight: 50,

  borderWidth: 1,
  borderColor: '$GRAY_300',
  borderRadius: 10,

  padding: 10,

  marginHorizontal: 10,
});

export const HeaderSearchInput = styled('TextInput', {
  flex: 1,

  fontFamily: '$REGULAR',
  fontSize: '$LG',
  color: '$WHITE',
}).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.WHITE,
}));

export const HeaderActionsContainer = styled('View', {
  flex: 1,

  flexDirection: 'row',
  justifyContent: 'flex-end',
});

export const HeaderActionButton = styled('TouchableOpacity', {
  minWidth: 170,
  maxWidth: 170,
  minHeight: 70,
  maxHeight: 70,

  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$RED',

  borderRightWidth: 1,
  borderRightColor: '$WHITE',

  padding: 10,
}).attrs(() => ({
  activeOpacity: 0.7,
}));

export const HeaderActionButtonText = styled('Text', {
  fontFamily: '$REGULAR',
  fontSize: '$MD',
  color: '$WHITE',
  textTransform: 'uppercase',

  marginLeft: 10,
});
