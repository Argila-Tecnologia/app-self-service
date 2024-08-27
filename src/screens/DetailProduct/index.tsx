import { useCallback, useEffect, useState } from 'react';

import { ScrollView, BackHandler } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { ArrowLeft } from 'phosphor-react-native';

import { useTheme } from '@theme/stitches.config';

import PizzaImg from '@assets/pizza-portuguesa.jpg';

import { Header } from '@components/Header';
import { Button } from '@components/Button';

import {
  DetailProductAdditionalAndObservationContainer,
  DetailProductAdditionalAndObservationItem,
  DetailProductAdditionalAndObservationItemPrice,
  DetailProductAdditionalAndObservationItemWrapper,
  DetailProductAdditionalAndObservationTitle,
  DetailProductAdditionalContainer,
  DetailProductAdditionalList,
  DetailProductBackButton,
  DetailProductContainer,
  DetailProductContent,
  DetailProductDescription,
  DetailProductFooterAdditionalProductObservationWrapper,
  DetailProductFooterContainer,
  DetailProductFooterPriceText,
  DetailProductFooterPriceWrapper,
  DetailProductFooterQuantityContainer,
  DetailProductFooterQuantityPriceAddItemWrapper,
  DetailProductFooterQuantityText,
  DetailProductHeader,
  DetailProductImage,
  DetailProductImageContainer,
  DetailProductObservationContainer,
  DetailProductObservationList,
  DetailProductTitle,
  DetailProductWrapper,
} from './styles';

export type IAdditionalItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

export type IObservationItem = {
  id: string;
  name: string;
};

const DIVISOR_CENTS = 100;

export function DetailProductScreen() {
  const [quantity, setQuantity] = useState(1);

  const theme = useTheme();
  const navigation = useNavigation();

  // FUNCTIONS
  const handleNavigationBack = useCallback(() => {
    navigation.navigate('homeScreen');
  }, [navigation]);

  const handleAddMinus = useCallback(() => {
    const quantityNumber = Number(quantity);

    const minusQuantity = quantityNumber - 1;

    if (minusQuantity <= 0) {
      setQuantity(1);

      return;
    }

    setQuantity(minusQuantity);
  }, [quantity]);

  const handleAddQuantity = useCallback(() => {
    const quantityNumber = Number(quantity);

    const addQuantity = quantityNumber + 1;

    setQuantity(addQuantity);
  }, [quantity]);
  // END FUNCTIONS

  // USE EFFECT
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return true;
      },
    );

    return () => backHandler.remove();
  }, []);

  return (
    <DetailProductContainer>
      <Header />

      <DetailProductHeader>
        <DetailProductBackButton
          activeOpacity={0.7}
          onPress={handleNavigationBack}
        >
          <ArrowLeft color={theme.colors.GRAY_100} size={25} />

          <DetailProductTitle>Pizza Portuguesa</DetailProductTitle>
        </DetailProductBackButton>
      </DetailProductHeader>

      <DetailProductWrapper>
        <ScrollView
          style={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <DetailProductContent>
            <DetailProductImageContainer>
              <DetailProductImage source={PizzaImg} resizeMode="cover" />
            </DetailProductImageContainer>

            <DetailProductDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              rerum nam neque? Officia similique aut iure temporibus ullam,
              laborum tenetur laudantium nostrum doloribus modi, suscipit optio
              et? Beatae, voluptate unde?
            </DetailProductDescription>
          </DetailProductContent>
        </ScrollView>

        <DetailProductAdditionalAndObservationContainer>
          <DetailProductAdditionalContainer>
            <DetailProductAdditionalAndObservationTitle>
              Adicionais
            </DetailProductAdditionalAndObservationTitle>

            <DetailProductAdditionalList
              data={[
                {
                  id: '1',
                  name: 'Azeitona',
                  quantity: 1,
                  price: 500,
                },
              ]}
              keyExtractor={(item) => item.id}
              renderItem={({ item: additional }) => (
                <DetailProductAdditionalAndObservationItemWrapper>
                  <DetailProductAdditionalAndObservationItem>
                    {additional.quantity.toString()} x {additional.name}
                  </DetailProductAdditionalAndObservationItem>

                  <DetailProductAdditionalAndObservationItemPrice>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(additional.price / DIVISOR_CENTS)}
                  </DetailProductAdditionalAndObservationItemPrice>
                </DetailProductAdditionalAndObservationItemWrapper>
              )}
            />
          </DetailProductAdditionalContainer>

          <DetailProductObservationContainer>
            <DetailProductAdditionalAndObservationTitle>
              Observações
            </DetailProductAdditionalAndObservationTitle>

            <DetailProductObservationList
              data={[
                {
                  id: '1',
                  name: 'Sem orégano',
                },
              ]}
              keyExtractor={(item) => item.id}
              renderItem={({ item: observation }) => (
                <DetailProductAdditionalAndObservationItemWrapper>
                  <DetailProductAdditionalAndObservationItem>
                    {observation.name}
                  </DetailProductAdditionalAndObservationItem>
                </DetailProductAdditionalAndObservationItemWrapper>
              )}
            />
          </DetailProductObservationContainer>
        </DetailProductAdditionalAndObservationContainer>
      </DetailProductWrapper>

      <DetailProductFooterContainer>
        <DetailProductFooterAdditionalProductObservationWrapper>
          <Button style={{ marginRight: 16 }} size="small">
            Adicionais
          </Button>

          <Button size="small">Observações</Button>
        </DetailProductFooterAdditionalProductObservationWrapper>

        <DetailProductFooterQuantityPriceAddItemWrapper>
          <DetailProductFooterQuantityContainer>
            <Button onPress={handleAddMinus} textSize="XXXL">
              -
            </Button>

            <DetailProductFooterQuantityText>
              {quantity.toString()}
            </DetailProductFooterQuantityText>

            <Button onPress={handleAddQuantity} textSize="XXL">
              +
            </Button>
          </DetailProductFooterQuantityContainer>

          <DetailProductFooterPriceWrapper>
            <DetailProductFooterPriceText>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(1500 / DIVISOR_CENTS)}
            </DetailProductFooterPriceText>
          </DetailProductFooterPriceWrapper>

          <Button style={{ maxWidth: 200 }}>Adicionar ao pedido</Button>
        </DetailProductFooterQuantityPriceAddItemWrapper>
      </DetailProductFooterContainer>
    </DetailProductContainer>
  );
}
