import { RefObject, useMemo } from 'react';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import { TextArea } from '@components/Form/TextArea';

import {
  ObservationFooterContainer,
  ObservationFreeContainer,
  ObservationFreeTitle,
  ObservationList,
} from './styles';
import { Button } from '@components/Form/Button';

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
        <ObservationFreeContainer>
          <ObservationFreeTitle>Observações</ObservationFreeTitle>

          <ObservationList
            data={[]}
            keyExtractor={(item) => item.id}
            renderItem={() => <ObservationFreeTitle>fd</ObservationFreeTitle>}
          />

          <TextArea placeholder="Digite sua observação" />

          <ObservationFooterContainer>
            <Button style={{ maxWidth: 150 }}>Adicionar</Button>
          </ObservationFooterContainer>
        </ObservationFreeContainer>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}
