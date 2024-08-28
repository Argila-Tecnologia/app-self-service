import { RefObject, useMemo } from 'react';

import { Text } from 'react-native';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

interface IAdditionalBottomSheetModalProps {
  bottomSheetModalRef?: RefObject<BottomSheetModal>;
}

export function AdditionalBottomSheetModal({
  bottomSheetModalRef,
}: IAdditionalBottomSheetModalProps) {
  const snapPoints = useMemo(() => ['50%', '90%'], []);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        name="additionalBottomSheetModal"
        index={1}
        snapPoints={snapPoints}
      >
        <BottomSheetView style={{ flex: 1, alignItems: 'center' }}>
          <Text>adicionais</Text>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}
