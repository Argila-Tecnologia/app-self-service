import { RefObject, useMemo } from 'react';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import { Button } from '@components/Form/Button';

import {
  AdditionalContainer,
  AdditionalFooterContainer,
  AdditionalSectionItemContainer,
  AdditionalSectionItemName,
  AdditionalSectionItemNameAndPriceContainer,
  AdditionalSectionItemPrice,
  AdditionalSectionItemQuantity,
  AdditionalSectionItemQuantityContainer,
  AdditionalSectionList,
  AdditionalSectionTitle,
  AdditionalTitle,
} from './styles';

interface IAdditionalBottomSheetModalProps {
  bottomSheetModalRef?: RefObject<BottomSheetModal>;
}

export interface IAdditionalItemsProps {
  id: string;
  name: string;
  quantity: number;
  price: number;
  minQuantity: number;
  maxQuantity: number;
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
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '2',
        name: 'Uva',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '3',
        name: 'Arroz',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '2',
        name: 'Uva',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '3',
        name: 'Arroz',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '2',
        name: 'Uva',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '3',
        name: 'Arroz',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '2',
        name: 'Uva',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '3',
        name: 'Arroz',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '2',
        name: 'Uva',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '3',
        name: 'Arroz',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '2',
        name: 'Uva',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '3',
        name: 'Arroz',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '2',
        name: 'Uva',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '3',
        name: 'Arroz',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '2',
        name: 'Uva',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '3',
        name: 'Arroz',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '2',
        name: 'Uva',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '3',
        name: 'Arroz',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
    ],
  },

  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '2',
        name: 'Uva',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '3',
        name: 'Arroz',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '2',
        name: 'Uva',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '3',
        name: 'Arroz',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '2',
        name: 'Uva',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '3',
        name: 'Arroz',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '2',
        name: 'Uva',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '3',
        name: 'Arroz',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '2',
        name: 'Uva',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '3',
        name: 'Arroz',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '2',
        name: 'Uva',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '3',
        name: 'Arroz',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '2',
        name: 'Uva',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '3',
        name: 'Arroz',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
    ],
  },
  {
    title: 'Main dishes',
    data: [
      {
        id: '1',
        name: 'Passas',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '2',
        name: 'Uva',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
      },
      {
        id: '3',
        name: 'Arroz',
        quantity: 0,
        price: 500,
        minQuantity: 1,
        maxQuantity: 2,
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

          <AdditionalSectionList
            showsVerticalScrollIndicator={false}
            sections={DATA}
            keyExtractor={(item) => `${item.id}`}
            renderSectionHeader={({ section }) => (
              <AdditionalSectionTitle>{section.title}</AdditionalSectionTitle>
            )}
            renderItem={({ item: additional }) => (
              <AdditionalSectionItemContainer>
                <AdditionalSectionItemNameAndPriceContainer>
                  <AdditionalSectionItemName>
                    {additional.name}
                  </AdditionalSectionItemName>

                  <AdditionalSectionItemPrice>{`(${new Intl.NumberFormat(
                    'pt-BR',
                    {
                      style: 'currency',
                      currency: 'BRL',
                    },
                  ).format(
                    additional.price / 100,
                  )})`}</AdditionalSectionItemPrice>
                </AdditionalSectionItemNameAndPriceContainer>

                <AdditionalSectionItemQuantityContainer>
                  <AdditionalSectionItemQuantity>
                    {additional.quantity.toString()}
                  </AdditionalSectionItemQuantity>
                </AdditionalSectionItemQuantityContainer>
              </AdditionalSectionItemContainer>
            )}
          />

          <AdditionalFooterContainer>
            <Button style={{ maxWidth: 150 }}>Adicionar</Button>
          </AdditionalFooterContainer>
        </AdditionalContainer>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}
