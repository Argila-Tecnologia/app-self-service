import { RefObject, useMemo } from 'react';

import { Text, View } from 'react-native';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import { Button } from '@components/Form/Button';

import {
  AdditionalContainer,
  AdditionalFooterContainer,
  AdditionalList,
  AdditionalTitle,
} from './styles';

interface IAdditionalBottomSheetModalProps {
  bottomSheetModalRef?: RefObject<BottomSheetModal>;
}

export interface IAdditionalItemsProps {
  id: string;
  name: string;
  // quantity: number;
  // price: number;
  // minQuantity: number;
  // maxQuantity: number;
}

export interface ISectionAdditionalProps {
  title: string;
  data: IAdditionalItemsProps[];
}

const DATA: ISectionAdditionalProps[] = [
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
      },
      {
        id: '2',
        name: 'Uva',
      },
      {
        id: '3',
        name: 'Arroz',
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
      },
      {
        id: '2',
        name: 'Uva',
      },
      {
        id: '3',
        name: 'Arroz',
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
      },
      {
        id: '2',
        name: 'Uva',
      },
      {
        id: '3',
        name: 'Arroz',
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
      },
      {
        id: '2',
        name: 'Uva',
      },
      {
        id: '3',
        name: 'Arroz',
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
      },
      {
        id: '2',
        name: 'Uva',
      },
      {
        id: '3',
        name: 'Arroz',
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
      },
      {
        id: '2',
        name: 'Uva',
      },
      {
        id: '3',
        name: 'Arroz',
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
      },
      {
        id: '2',
        name: 'Uva',
      },
      {
        id: '3',
        name: 'Arroz',
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
      },
      {
        id: '2',
        name: 'Uva',
      },
      {
        id: '3',
        name: 'Arroz',
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
      },
      {
        id: '2',
        name: 'Uva',
      },
      {
        id: '3',
        name: 'Arroz',
      },
    ],
  },

  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
      },
      {
        id: '2',
        name: 'Uva',
      },
      {
        id: '3',
        name: 'Arroz',
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
      },
      {
        id: '2',
        name: 'Uva',
      },
      {
        id: '3',
        name: 'Arroz',
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
      },
      {
        id: '2',
        name: 'Uva',
      },
      {
        id: '3',
        name: 'Arroz',
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
      },
      {
        id: '2',
        name: 'Uva',
      },
      {
        id: '3',
        name: 'Arroz',
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
      },
      {
        id: '2',
        name: 'Uva',
      },
      {
        id: '3',
        name: 'Arroz',
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
      },
      {
        id: '2',
        name: 'Uva',
      },
      {
        id: '3',
        name: 'Arroz',
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
      },
      {
        id: '2',
        name: 'Uva',
      },
      {
        id: '3',
        name: 'Arroz',
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
      },
      {
        id: '2',
        name: 'Uva',
      },
      {
        id: '3',
        name: 'Arroz',
      },
    ],
  },
];

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

          {/* <BottomSheetView style={{ flex: 1 }}> */}
          <AdditionalList
            sections={DATA}
            keyExtractor={(item) => `${item.id}`}
            renderSectionHeader={({ section }) => (
              <View>
                <Text>{section.title}</Text>
              </View>
            )}
            renderItem={({ item }) => (
              <View>
                <Text>{item.name}</Text>
              </View>
            )}
          />

          <AdditionalFooterContainer>
            <Button style={{ maxWidth: 150 }}>Adicionar</Button>
          </AdditionalFooterContainer>
          {/* </BottomSheetView> */}
        </AdditionalContainer>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}
