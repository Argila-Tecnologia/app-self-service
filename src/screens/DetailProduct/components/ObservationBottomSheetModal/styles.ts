import { IObservationDTO } from '@dtos/observation-dto';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { styled } from '@theme/stitches.config';

export const ObservationContainer = styled('View', {
  flex: 1,
  flexDirection: 'column',

  padding: 16,
});

export const ObservationTitle = styled('Text', {
  fontFamily: '$BOLD',
  fontSize: '$MD',
  color: '$GRAY_600',
  textTransform: 'uppercase',

  // marginTop: 16,
  marginBottom: 16,
});

export const ObservationList = styled(BottomSheetFlatList<IObservationDTO>, {});

// export const ObservationItemContainer = styled('View', {});

export const ObservationItemCheckButton = styled('TouchableOpacity', {
  flexDirection: 'row',
  alignItems: 'center',
});

export const ObservationItemName = styled('Text', {
  flex: 1,

  fontFamily: '$REGULAR',
  fontSize: '$MD',
  color: '$GRAY_500',
  textTransform: 'uppercase',

  marginLeft: 10,
});

export const ObservationFooterContainer = styled('View', {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',

  marginTop: 10,
});
