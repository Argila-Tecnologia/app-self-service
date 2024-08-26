import { styled } from '@theme/stitches.config';

export const DetailProductContainer = styled('View', {
  flex: 1,
});

export const DetailProductContent = styled('View', {
  flex: 1,

  paddingHorizontal: 36,
  paddingBottom: 30,
});

export const DetailProductHeader = styled('View', {
  width: '100%',
  minHeight: 60,
  maxHeight: 60,

  flexDirection: 'row',
  alignItems: 'center',

  // backgroundColor: '$GRAY_500',

  paddingHorizontal: 20,
});

export const DetailProductBackButton = styled('TouchableOpacity', {
  marginRight: 10,
});

export const DetailProductTitle = styled('Text', {
  fontFamily: '$BOLD',
  fontSize: '$LG',
  color: '$GRAY_100',
});

export const DetailProductImageContainer = styled('View', {
  flex: 1,
  minHeight: 250,
  maxHeight: 250,

  flexDirection: 'row',

  alignItems: 'center',
  justifyContent: 'center',

  marginTop: 10,
  marginBottom: 20,
});

export const DetailProductImage = styled('Image', {
  width: 370,
});

export const DetailProductDescription = styled('Text', {
  fontFamily: '$REGULAR',
  fontSize: '$MD',
  color: '$GRAY_100',
  textAlign: 'justify',
});

export const DetailProductFooter = styled('View', {
  width: '100%',
  // minHeight: 60,
  // maxHeight: 60,

  flexDirection: 'row',
  justifyContent: 'flex-end',

  padding: 10,

  backgroundColor: '$GRAY_500',
});

export const DetailProductFooterQuantityContainer = styled('View', {
  flexDirection: 'row',
  alignItems: 'center',

  backgroundColor: '$GRAY_600',

  borderRadius: 10,

  marginRight: 50,
});

export const DetailProductFooterQuantityText = styled('Text', {
  fontFamily: '$REGULAR',
  fontSize: '$XXL',
  color: '$GRAY_200',

  paddingHorizontal: 30,
});
