import { RefObject, useMemo } from 'react';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

import {
  AdditionalContainer,
  AdditionalFooterContainer,
  AdditionalList,
  AdditionalTitle,
} from './styles';
import { Text } from 'react-native';
import { Button } from '@components/Form/Button';

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
        <AdditionalContainer>
          <AdditionalTitle>Adicionais</AdditionalTitle>

          <BottomSheetView style={{ flex: 1 }}>
            <AdditionalList
              data={[]}
              renderItem={() => <Text>Adicionais</Text>}
            />

            <AdditionalFooterContainer>
              <Button style={{ maxWidth: 150 }}>Adicionar</Button>
            </AdditionalFooterContainer>
          </BottomSheetView>
        </AdditionalContainer>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}
