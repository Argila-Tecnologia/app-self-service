import { IObservationDTO } from '@dtos/observation-dto';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { styled } from '@theme/stitches.config';

export const ObservationFreeContainer = styled('View', {
  flex: 1,
  flexDirection: 'column',

  padding: 16,
});

export const ObservationFreeTitle = styled('Text', {
  fontFamily: '$BOLD',
  fontSize: '$MD',
  color: '$GRAY_600',
  textTransform: 'uppercase',

  // marginTop: 16,
  marginBottom: 16,
});

export const ObservationList = styled(BottomSheetFlatList<IObservationDTO>, {
  maxHeight: '100%',

  marginBottom: 10,
});

export const ObservationFooterContainer = styled('View', {
  minHeight: 70,

  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',

  marginTop: 10,
});
