import { RefObject, useCallback, useMemo, useState } from 'react';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import uuid from 'react-native-uuid';

import { CheckSquare, Square } from 'phosphor-react-native';

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
  onAddObservation: (observations: IObservationDTO[]) => void;
}

const DATA = [
  {
    id: '1',
    name: 'Sem orégano',
  },
  {
    id: '2',
    name: 'Sem tomate',
  },
];

export function ObservationBottomSheetModal({
  bottomSheetModalRef,
  onAddObservation,
}: IObservationBottomSheetModalProps) {
  const [selectedObservations, setSelectedObservations] = useState<
    IObservationDTO[]
  >([]);
  const [freeObservation, setFreeObservation] = useState('');

  const snapPoints = useMemo(() => ['50%', '90%'], []);

  // FUNCTIONS
  const handleSelectedObservation = useCallback(
    (observation: IObservationDTO) => {
      if (selectedObservations.length === 0) {
        setSelectedObservations([observation]);

        return;
      }

      if (selectedObservations.length > 0) {
        const observationFindIndex = selectedObservations.findIndex(
          (obs) => obs.id === observation.id,
        );

        if (observationFindIndex !== -1) {
          const removeObservation = selectedObservations.filter(
            (obs) => obs.id !== observation.id,
          );

          setSelectedObservations(removeObservation);
        } else {
          setSelectedObservations((oldState) => [...oldState, observation]);
        }
      }
    },
    [selectedObservations],
  );

  const handleSaveObservations = useCallback(() => {
    const addObservations: IObservationDTO[] = [];

    addObservations.push(...selectedObservations);

    if (freeObservation !== '') {
      const freeObservationData = {
        id: uuid.v4().toString(),
        name: freeObservation,
      };

      addObservations.push(freeObservationData);
    }

    onAddObservation(addObservations);

    bottomSheetModalRef?.current?.dismiss();
  }, [
    freeObservation,
    selectedObservations,
    onAddObservation,
    bottomSheetModalRef,
  ]);

  // const resetObservationsData = useCallback(() => {
  //   const resetData = DATA.map((section) => ({
  //     ...section,
  //     data: section.data.map((item) => ({ ...item, quantity: 0 })),
  //   }));
  //   setAdditionalData(resetData);
  // }, []);
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

          {/* <BottomSheetView style={{ flex: 1 }}> */}
          <ObservationList
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item: observation }) => (
              <ObservationItemCheckButton
                activeOpacity={0.7}
                onPress={() => {
                  handleSelectedObservation(observation);
                }}
              >
                {selectedObservations.some(
                  (obs) => obs.id === observation.id,
                ) ? (
                  <CheckSquare />
                ) : (
                  <Square />
                )}

                <ObservationItemName>{observation.name}</ObservationItemName>
              </ObservationItemCheckButton>
            )}
          />

          <TextArea
            placeholder="Digite sua observação"
            value={freeObservation}
            onChangeText={(text) => {
              setFreeObservation(text);
            }}
          />

          <ObservationFooterContainer>
            <Button style={{ maxWidth: 150 }} onPress={handleSaveObservations}>
              Adicionar
            </Button>
          </ObservationFooterContainer>
          {/* </BottomSheetView> */}
        </ObservationContainer>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}
