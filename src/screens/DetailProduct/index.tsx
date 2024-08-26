import { useCallback, useEffect, useState } from 'react';

import { ScrollView, BackHandler } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { ArrowLeft } from 'phosphor-react-native';

import { useTheme } from '@theme/stitches.config';

import PizzaImg from '@assets/pizza-portuguesa.jpg';

import { Header } from '@components/Header';
import { Button } from '@components/Button';

import {
  DetailProductBackButton,
  DetailProductContainer,
  DetailProductContent,
  DetailProductDescription,
  DetailProductFooter,
  DetailProductFooterQuantityContainer,
  DetailProductFooterQuantityText,
  DetailProductHeader,
  DetailProductImage,
  DetailProductImageContainer,
  DetailProductTitle,
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

      <ScrollView
        style={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <DetailProductContent>
          <DetailProductImageContainer>
            <DetailProductImage source={PizzaImg} resizeMode="contain" />
          </DetailProductImageContainer>

          <DetailProductDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            rerum nam neque? Officia similique aut iure temporibus ullam,
            laborum tenetur laudantium nostrum doloribus modi, suscipit optio
            et? Beatae, voluptate unde?
          </DetailProductDescription>
        </DetailProductContent>
      </ScrollView>

      <DetailProductFooter>
        <DetailProductFooterQuantityContainer>
          <Button contentStyle={{ width: 60 }} onPress={handleAddMinus}>
            -
          </Button>

          <DetailProductFooterQuantityText>
            {quantity.toString()}
          </DetailProductFooterQuantityText>

          <Button contentStyle={{ width: 60 }} onPress={handleAddQuantity}>
            +
          </Button>
        </DetailProductFooterQuantityContainer>

        <Button contentStyle={{ width: 200 }}>Adicionar ao pedido</Button>
      </DetailProductFooter>
    </DetailProductContainer>
  );
}
