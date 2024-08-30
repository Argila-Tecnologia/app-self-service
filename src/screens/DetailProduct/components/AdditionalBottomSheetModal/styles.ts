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

export const AdditionalList = styled(
  BottomSheetSectionList<IAdditionalItemsProps, ISectionAdditionalProps>,
  {},
);

export const AdditionalFooterContainer = styled('View', {
  // minHeight: 70,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginTop: 10,

  padding: 10,
});
