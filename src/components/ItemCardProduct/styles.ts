import { styled } from '@theme/stitches.config';

export const ItemCardProductContainer = styled('TouchableOpacity', {
  width: '100%',
  minHeight: 200,
  maxheight: 200,

  flexDirection: 'row',

  backgroundColor: '$BLACK',

  borderRadius: 10,

  marginBottom: 20,

  overflow: 'hidden',
});

export const ItemCardProductImage = styled('Image', {
  maxWidth: 200,
  minHeight: 200,
  maxHeight: 200,

  marginRight: 20,
});

export const ItemCardProductContent = styled('View', {
  flex: 1,
  padding: 10,
});

export const ItemCardProductNameAndPriceContainer = styled('View', {
  width: '100%',

  flexDirection: 'row',
  justifyContent: 'space-between',

  marginBottom: 10,
});

export const ItemCardProductName = styled('Text', {
  flex: 1,

  fontFamily: '$BOLD',
  fontSize: '$XXL',
  color: '$GRAY_100',
});

export const ItemCardProductPriceContainer = styled('View', {
  flexDirection: 'column',
  alignItems: 'flex-end',

  marginLeft: 10,
});

export const ItemCardProductPrice = styled('Text', {
  fontFamily: '$REGULAR',
  fontSize: '$LG',
  color: '$GRAY_100',
});

export const ItemCardProductPromotion = styled('Text', {
  fontFamily: '$REGULAR',
  fontSize: '$LG',
  color: '$GRAY_100',
});

export const ItemCardProductDescription = styled('Text', {
  flex: 1,

  fontFamily: '$REGULAR',
  fontSize: '$LG',
  color: '$GRAY_100',
});

export const ItemCardProductFooter = styled('View', {
  flexDirection: 'row',
  justifyContent: 'flex-end',

  marginTop: 10,
});
