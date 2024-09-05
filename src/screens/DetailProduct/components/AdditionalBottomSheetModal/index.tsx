import { RefObject, useCallback, useEffect, useMemo, useState } from 'react';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import { IAdditionalDTO } from '@dtos/additional-dto';

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

interface IAdditionalItemSelected {
  id: string;
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface ISectionAdditionalProps {
  title: string;
  data: IAdditionalDTO[];
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
];

interface IAdditionalBottomSheetModalProps {
  bottomSheetModalRef?: RefObject<BottomSheetModal>;
}

export function AdditionalBottomSheetModal({
  bottomSheetModalRef,
}: IAdditionalBottomSheetModalProps) {
  const [additionalData, setAdditionalData] =
    useState<ISectionAdditionalProps[]>(DATA);

  const [additionalItemSelected, setAdditionalItemSelected] = useState<
    IAdditionalItemSelected[]
  >([]);

  const snapPoints = useMemo(() => ['50%', '90%'], []);

  // FUNCTIONS
  const handlePlusQuantityAdditional = useCallback(
    (additional: IAdditionalDTO) => {
      const additionalCopy = additionalData;

      const additionalUpdate = additionalCopy.map((additionalItem) => {
        const additionalFind = additionalItem.data.findIndex(
          (ad) => ad.id === additional.id,
        );

        if (additionalFind !== -1) {
          const item = additionalItem.data[additionalFind];

          const plusQuantity = item.quantity + 1;

          item.quantity = plusQuantity;
        }

        return additionalItem;
      });

      // let dataAdd: IAdditionalItemsProps | null = null;

      // additionalCopy.forEach((a) => {
      //   const find = a.data.find((ad) => ad.id === additional.id);

      //   if (find) {
      //     dataAdd = find;
      //   }
      // });

      setAdditionalData(additionalUpdate);
    },
    [additionalData],
  );

  const handleSubQuantityAdditional = useCallback(
    (additional: IAdditionalDTO) => {
      const additionalCopy = additionalData;

      const additionalUpdate = additionalCopy.map((additionalItem) => {
        const additionalFind = additionalItem.data.findIndex(
          (ad) => ad.id === additional.id,
        );

        if (additionalFind !== -1) {
          const item = additionalItem.data[additionalFind];

          const subQuantity = item.quantity - 1;

          if (subQuantity <= 0) {
            item.quantity = 0;
          } else {
            item.quantity = subQuantity;
          }
        }

        return additionalItem;
      });

      // let dataAdd: IAdditionalItemsProps | null = null;

      // additionalCopy.forEach((a) => {
      //   const find = a.data.find((ad) => ad.id === additional.id);

      //   if (find) {
      //     dataAdd = find;
      //   }
      // });

      setAdditionalData(additionalUpdate);
    },
    [additionalData],
  );

  const resetAdditionalData = useCallback(() => {
    const resetData = DATA.map((section) => ({
      ...section,
      data: section.data.map((item) => ({ ...item, quantity: 0 })),
    }));
    setAdditionalData(resetData);
  }, []);
  // END FUNCTIONS

  useEffect(() => {
    resetAdditionalData();
  }, [resetAdditionalData]);

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
            sections={additionalData}
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
                  <Button
                    style={{ minHeight: 50, maxHeight: 50 }}
                    textSize="XXL"
                    onPress={() => {
                      handleSubQuantityAdditional(additional);
                    }}
                  >
                    -
                  </Button>

                  <AdditionalSectionItemQuantity>
                    {additional.quantity.toString()}
                  </AdditionalSectionItemQuantity>

                  <Button
                    style={{ minHeight: 50, maxHeight: 50 }}
                    textSize="XXL"
                    onPress={() => {
                      handlePlusQuantityAdditional(additional);
                    }}
                    disabled={additional.quantity === additional.maxQuantity}
                    isDisabled={additional.quantity === additional.maxQuantity}
                  >
                    +
                  </Button>
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
