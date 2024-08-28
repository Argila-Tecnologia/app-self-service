import { RefObject, useMemo } from 'react';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { Text } from 'react-native';

interface IObservationBottomSheetModalProps {
  bottomSheetModalRef?: RefObject<BottomSheetModal>;
}

export function ObservationBottomSheetModal({
  bottomSheetModalRef,
}: IObservationBottomSheetModalProps) {
  const snapPoints = useMemo(() => ['50%', '90%'], []);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        name="observationBottomSheetModal"
        index={1}
        snapPoints={snapPoints}
      >
        <BottomSheetView style={{ flex: 1, alignItems: 'center' }}>
          <Text>observação</Text>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}
