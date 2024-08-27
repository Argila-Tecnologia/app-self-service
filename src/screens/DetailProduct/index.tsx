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
  DetailProductBackButton,
  DetailProductContainer,
  DetailProductContent,
  DetailProductDescription,
  DetailProductFooterAdditionalProductObservationWrapper,
  DetailProductFooterContainer,
  DetailProductFooterQuantityContainer,
  DetailProductFooterQuantityPriceAddItemWrapper,
  DetailProductFooterQuantityText,
  DetailProductHeader,
  DetailProductImage,
  DetailProductImageContainer,
  DetailProductObservationContainer,
  DetailProductTitle,
  DetailProductWrapper,
} from './styles';

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
        </DetailProductBackButton>

        <DetailProductTitle>NOME DO PRODUTO</DetailProductTitle>
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

            <DetailProductAdditionalAndObservationItemWrapper>
              <DetailProductAdditionalAndObservationItem>
                1 x Azeitona
              </DetailProductAdditionalAndObservationItem>

              <DetailProductAdditionalAndObservationItemPrice>
                R$ 1,00
              </DetailProductAdditionalAndObservationItemPrice>
            </DetailProductAdditionalAndObservationItemWrapper>
          </DetailProductAdditionalContainer>

          <DetailProductObservationContainer>
            <DetailProductAdditionalAndObservationTitle>
              Observações
            </DetailProductAdditionalAndObservationTitle>

            <DetailProductAdditionalAndObservationItemWrapper>
              <DetailProductAdditionalAndObservationItem>
                Sem oregano
              </DetailProductAdditionalAndObservationItem>
            </DetailProductAdditionalAndObservationItemWrapper>
          </DetailProductObservationContainer>
        </DetailProductAdditionalAndObservationContainer>
      </DetailProductWrapper>

      <DetailProductFooterContainer>
        <DetailProductFooterAdditionalProductObservationWrapper>
          <Button>Adicionais</Button>

          <Button>Observações</Button>
        </DetailProductFooterAdditionalProductObservationWrapper>

        <DetailProductFooterQuantityPriceAddItemWrapper>
          <DetailProductFooterQuantityContainer>
            <Button contentStyle={{ flex: 1 }} onPress={handleAddMinus}>
              -
            </Button>

            <DetailProductFooterQuantityText>
              {quantity.toString()}
            </DetailProductFooterQuantityText>

            <Button contentStyle={{ flex: 1 }} onPress={handleAddQuantity}>
              +
            </Button>
          </DetailProductFooterQuantityContainer>

          <Button contentStyle={{ width: 200 }}>Adicionar ao pedido</Button>
        </DetailProductFooterQuantityPriceAddItemWrapper>
      </DetailProductFooterContainer>
    </DetailProductContainer>
  );
}
