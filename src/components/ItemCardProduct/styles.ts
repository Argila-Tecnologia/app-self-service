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

export const ItemCardProductContent = styled('View', {});

export const ItemCardProductInfo = styled('View', {
  padding: 10,
});

export const ItemCardProductTitle = styled('Text', {
  fontFamily: '$BOLD',
  fontSize: '$XXL',
  color: '$GRAY_100',

  marginBottom: 10,
});

export const ItemCardProductDescription = styled('Text', {
  fontFamily: '$REGULAR',
  fontSize: '$LG',
  color: '$GRAY_100',
});

export const ItemCardProductFooter = styled('View', {});
