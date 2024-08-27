import { styled } from '@theme/stitches.config';

export const DetailProductContainer = styled('View', {
  flex: 1,
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

export const DetailProductAdditionalAndObservationTitle = styled('Text', {
  fontFamily: '$REGULAR',
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
  fontSize: '$sm',
  color: '$WHITE',
  textTransform: 'uppercase',

  marginRight: 5,
});

export const DetailProductAdditionalAndObservationItemPrice = styled('Text', {
  fontFamily: '$REGULAR',
  fontSize: '$sm',
  color: '$WHITE',
  textTransform: 'uppercase',
});

export const DetailProductFooterContainer = styled('View', {
  width: '100%',
  // minHeight: 60,
  // maxHeight: 60,

  flexDirection: 'row',
  justifyContent: 'flex-end',

  padding: 10,

  backgroundColor: '$GRAY_500',
});

export const DetailProductFooterAdditionalProductObservationWrapper = styled(
  'View',
  {
    flex: 1,
    flexDirection: 'row',

    backgroundColor: '$BRAND_LIGHT',

    marginRight: 30,
  },
);

export const DetailProductFooterQuantityPriceAddItemWrapper = styled('View', {
  flex: 1,
  flexDirection: 'row',

  backgroundColor: '$BRAND_LIGHT',
});

export const DetailProductFooterQuantityContainer = styled('View', {
  width: 200,
  flexDirection: 'row',
  alignItems: 'center',

  backgroundColor: '$GRAY_600',

  borderRadius: 10,

  marginRight: 50,
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
