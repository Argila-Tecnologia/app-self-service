import { styled } from '@theme/stitches.config';

import { FlatList } from 'react-native';

import { IAdditionalItem, IObservationItem } from '.';

export const DetailProductContainer = styled('View', {
  flex: 1,
});

export const DetailProductHeader = styled('View', {
  width: '100%',
  minHeight: 70,
  maxHeight: 70,

  flexDirection: 'row',
  alignItems: 'center',

  // backgroundColor: '$GRAY_500',

  paddingHorizontal: 20,
});

export const DetailProductWrapper = styled('View', {
  flex: 1,
  flexDirection: 'row',
});

export const DetailProductContent = styled('View', {
  flex: 1,

  paddingHorizontal: 26,
  paddingBottom: 30,
});

export const DetailProductBackButton = styled('TouchableOpacity', {
  flexDirection: 'row',
  alignItems: 'center',
});

export const DetailProductTitle = styled('Text', {
  fontFamily: '$BOLD',
  fontSize: '$XL',
  color: '$GRAY_100',
  textTransform: 'uppercase',

  marginLeft: 10,
});

export const DetailProductImageContainer = styled('View', {
  flex: 1,
  minHeight: 250,
  maxHeight: 250,

  flexDirection: 'row',

  alignItems: 'center',
  justifyContent: 'center',

  // marginTop: 10,
  marginBottom: 20,
});

export const DetailProductImage = styled('Image', {
  width: '100%',
  minHeight: 250,
  maxHeight: 250,
});

export const DetailProductDescription = styled('Text', {
  fontFamily: '$REGULAR',
  fontSize: '$MD',
  color: '$GRAY_100',
  textAlign: 'justify',
});

export const DetailProductAdditionalAndObservationContainer = styled('View', {
  minWidth: 300,

  backgroundColor: '$GRAY_500',
});

export const DetailProductAdditionalContainer = styled('View', {
  flex: 1,

  borderBottomWidth: 1,
  borderBottomColor: '$WHITE',

  paddingHorizontal: 10,
});

export const DetailProductObservationContainer = styled('View', {
  flex: 1,

  paddingHorizontal: 10,
});

export const DetailProductAdditionalList = styled(FlatList<IAdditionalItem>, {
  flex: 1,
});

export const DetailProductObservationList = styled(FlatList<IObservationItem>, {
  flex: 1,
});

export const DetailProductAdditionalAndObservationTitle = styled('Text', {
  fontFamily: '$BOLD',
  fontSize: '$MD',
  color: '$GRAY_100',
  textTransform: 'uppercase',

  marginTop: 5,
  marginBottom: 10,
});

export const DetailProductAdditionalAndObservationItemWrapper = styled('View', {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const DetailProductAdditionalAndObservationItem = styled('Text', {
  flex: 1,

  fontFamily: '$REGULAR',
  fontSize: '$SM',
  color: '$WHITE',
  textTransform: 'uppercase',

  marginRight: 5,
});

export const DetailProductAdditionalAndObservationItemPrice = styled('Text', {
  fontFamily: '$REGULAR',
  fontSize: '$SM',
  color: '$WHITE',
  textTransform: 'uppercase',
});

export const DetailProductFooterContainer = styled('View', {
  // width: '100%',
  // minHeight: 60,
  // maxHeight: 60,

  flexDirection: 'row',
  justifyContent: 'flex-end',

  padding: 10,

  backgroundColor: '$GRAY_300',
});

export const DetailProductFooterAdditionalProductObservationWrapper = styled(
  'View',
  {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',

    marginRight: 30,

    paddingLeft: 10,
  },
);

export const DetailProductFooterQuantityPriceAddItemWrapper = styled('View', {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-end',

  paddingRight: 10,
});

export const DetailProductFooterQuantityContainer = styled('View', {
  width: 200,
  flexDirection: 'row',
  alignItems: 'center',

  backgroundColor: '$GRAY_600',

  borderRadius: 10,
});

export const DetailProductFooterQuantityText = styled('Text', {
  // width: 100,
  flex: 1,
  fontFamily: '$REGULAR',
  fontSize: '$XXL',
  color: '$GRAY_200',
  textAlign: 'center',

  paddingHorizontal: 10,
});

export const DetailProductFooterPriceWrapper = styled('View', {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  // backgroundColor: '$BRAND_LIGHT',

  marginHorizontal: 10,
});

export const DetailProductFooterPriceText = styled('Text', {
  fontFamily: '$BOLD',
  fontSize: '$XXL',
  color: '$WHITE',
  textAlign: 'center',
});
