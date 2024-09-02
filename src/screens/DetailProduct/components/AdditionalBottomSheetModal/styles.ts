import { styled } from '@theme/stitches.config';

import { BottomSheetSectionList } from '@gorhom/bottom-sheet';
import { IAdditionalItemsProps, ISectionAdditionalProps } from '.';

export const AdditionalContainer = styled('View', {
  flex: 1,
  flexDirection: 'column',

  padding: 16,
});

export const AdditionalTitle = styled('Text', {
  fontFamily: '$BOLD',
  fontSize: '$MD',
  color: '$GRAY_600',
  textTransform: 'uppercase',

  // marginTop: 16,
  marginBottom: 16,
});

export const AdditionalSectionList = styled(
  BottomSheetSectionList<IAdditionalItemsProps, ISectionAdditionalProps>,
  {
    paddingHorizontal: 10,
  },
);

export const AdditionalSectionTitle = styled('Text', {
  fontFamily: '$BOLD',
  fontSize: '$LG',
  color: '$GRAY_600',

  paddingVertical: 10,
});

export const AdditionalSectionItemContainer = styled('View', {
  flexDirection: 'row',
  alignContent: 'center',

  marginBottom: 15,
});

export const AdditionalSectionItemNameAndPriceContainer = styled('View', {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',

  marginRight: 10,
  // marginBottom: 10,
});

export const AdditionalSectionItemName = styled('Text', {
  fontFamily: '$REGULAR',
  fontSize: '$MD',
  color: '$GRAY_600',

  marginRight: 10,
});

export const AdditionalSectionItemPrice = styled('Text', {
  fontFamily: '$BOLD',
  fontSize: '$MD',
  color: '$GRAY_600',
});

export const AdditionalSectionItemQuantityContainer = styled('View', {
  width: 150,
  minHeight: 40,
  maxHeight: 40,

  flexDirection: 'row',

  alignItems: 'center',
  justifyContent: 'center',
});

export const AdditionalSectionItemQuantityButton = styled('TouchableOpacity', {
  minHeight: 40,
  maxHeight: 40,

  flex: 1,

  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: 10,

  backgroundColor: '$RED',
});

export const AdditionalSectionItemQuantityButtonText = styled('Text', {
  fontFamily: '$REGULAR',
  fontSize: '$LG',
  color: '$WHITE',

  backgroundColor: '$RED',
});

export const AdditionalSectionItemQuantity = styled('Text', {
  fontFamily: '$BOLD',
  fontSize: '$MD',
  color: '$GRAY_600',

  paddingHorizontal: 20,
});

export const AdditionalFooterContainer = styled('View', {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',

  marginTop: 10,

  padding: 10,
});
