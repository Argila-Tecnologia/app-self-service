import { styled } from '../../theme/stitches.config';

export const HomeContainer = styled('View', {
  flex: 1,
});

export const HomeContent = styled('View', {
  flex: 1,

  flexDirection: 'row',
});

export const HomeCategoriesContainer = styled('View', {
  width: 120,

  flexDirection: 'column',

  backgroundColor: '$GRAY_600',
});

export const HomeMenu = styled('View', {
  minWidth: 120,
  maxWidth: 120,

  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',

  marginVertical: 30,
});

export const HomeCategoryItemButton = styled('TouchableOpacity', {
  width: '100%',
  minHeight: 90,
  maxHeight: 90,

  justifyContent: 'center',

  padding: 10,

  variants: {
    selected: {
      true: {
        backgroundColor: '$RED',
      },
    },
  },
}).attrs(() => ({
  activeOpacity: 0.7,
}));

export const HomeCategoryItemButtonText = styled('Text', {
  fontFamily: '$REGULAR',
  fontSize: '$MD',
  color: '$WHITE',
  textAlign: 'center',
  textTransform: 'uppercase',
});

export const HomeFooterContainer = styled('View', {
  flexDirection: 'column',
  alignItems: 'center',

  paddingTop: 10,
});

export const HomeFooterItemButton = styled('TouchableOpacity', {}).attrs(
  () => ({
    activeOpacity: 0.7,
  }),
);

export const HomeFooterItemButtonText = styled('Text', {
  fontFamily: '$REGULAR',
  fontSize: '$MD',
  color: '$WHITE',
  textAlign: 'center',
  textTransform: 'uppercase',
});

export const HomeFooterNameProductText = styled('Text', {
  width: '100%',

  fontFamily: '$REGULAR',
  fontSize: '$MD',
  color: '$WHITE',
  textAlign: 'center',

  marginTop: 40,

  padding: 10,

  backgroundColor: '$GRAY_500',
});

export const HomeProductsContainer = styled('View', {
  flex: 1,

  backgroundColor: '$GRAY_500',
});
