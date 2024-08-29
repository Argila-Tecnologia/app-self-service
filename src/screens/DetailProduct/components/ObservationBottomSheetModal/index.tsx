import { RefObject, useCallback, useMemo, useState } from 'react';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

import { Square } from 'phosphor-react-native';

import { IObservationDTO } from '@dtos/observation-dto';

import { TextArea } from '@components/Form/TextArea';
import { Button } from '@components/Form/Button';

import {
  ObservationFooterContainer,
  ObservationContainer,
  ObservationTitle,
  ObservationList,
  ObservationItemName,
  ObservationItemCheckButton,
} from './styles';

interface IObservationBottomSheetModalProps {
  bottomSheetModalRef?: RefObject<BottomSheetModal>;
  onAddObservation: () => void;
}

export function ObservationBottomSheetModal({
  bottomSheetModalRef,
  onAddObservation,
}: IObservationBottomSheetModalProps) {
  const [observationsSelected, setObservationsSelected] = useState<
    IObservationDTO[]
  >([]);

  const snapPoints = useMemo(() => ['50%', '90%'], []);

  // FUNCTIONS
  const handleSelectedObservation = useCallback(
    (observation: IObservationDTO) => {
      if (observationsSelected.length === 0) {
        setObservationsSelected([observation]);

        return;
      }

      if (observationsSelected.length > 0) {
        const observationFindIndex = observationsSelected.findIndex(
          (obs) => obs.id === observation.id,
        );
        console.log('🚀 ~ observationFindIndex:', observationFindIndex);
      }
    },
    [observationsSelected],
  );
  // END FUNCTIONS

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        name="observationBottomSheetModal"
        index={1}
        snapPoints={snapPoints}
      >
        <ObservationContainer>
          <ObservationTitle>Observações</ObservationTitle>

          <BottomSheetView style={{ flex: 1 }}>
            <ObservationList
              data={[
                {
                  id: '1',
                  name: 'Sem orégano',
                },
              ]}
              keyExtractor={(item) => item.id}
              renderItem={({ item: observation }) => (
                // <ObservationItemContainer>
                <ObservationItemCheckButton
                  activeOpacity={0.7}
                  onPress={() => {
                    handleSelectedObservation(observation);
                  }}
                >
                  <Square />

                  <ObservationItemName>{observation.name}</ObservationItemName>
                </ObservationItemCheckButton>
                // </ObservationItemContainer>
              )}
            />

            <TextArea placeholder="Digite sua observação" />

            <ObservationFooterContainer>
              <Button
                style={{ maxWidth: 150 }}
                onPress={() => {
                  onAddObservation();
                }}
              >
                Adicionar
              </Button>
            </ObservationFooterContainer>
          </BottomSheetView>
        </ObservationContainer>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}
