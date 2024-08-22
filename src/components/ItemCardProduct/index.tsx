import { IProductDTO } from '@dtos/product-dto';

import { useNavigation } from '@react-navigation/native';

import { transformPriceCentsToDecimal } from '@utils/transform-price-cents-to-decimal';

import PizzaImg from '@assets/pizza-portuguesa.jpg';

import {
  ItemCardProductContainer,
  ItemCardProductContent,
  ItemCardProductDescription,
  ItemCardProductImage,
  ItemCardProductName,
  ItemCardProductNameAndPriceContainer,
  ItemCardProductPrice,
  ItemCardProductPriceContainer,
  ItemCardProductPromotion,
} from './styles';
import { useCallback } from 'react';

interface ICardProductProps {
  product: IProductDTO;
}

export function ItemCardProduct({ product }: ICardProductProps) {
  const navigation = useNavigation();

  // FUNCTIONS
  const handleDetailProductNavigation = useCallback(
    (productId: string) => {
      navigation.navigate('detailProductScreen', { productId });
    },
    [navigation],
  );
  // END FUNCTIONS

  return (
    <ItemCardProductContainer
      activeOpacity={0.7}
      onPress={() => {
        handleDetailProductNavigation(product.id);
      }}
    >
      <ItemCardProductImage source={PizzaImg} resizeMode="cover" />

      <ItemCardProductContent>
        <ItemCardProductNameAndPriceContainer>
          <ItemCardProductName numberOfLines={2}>
            {product.name}
          </ItemCardProductName>

          <ItemCardProductPriceContainer>
            <ItemCardProductPrice>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(transformPriceCentsToDecimal(product.price))}
            </ItemCardProductPrice>

            {product.price_promotional && (
              <ItemCardProductPromotion>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(
                  transformPriceCentsToDecimal(product.price_promotional),
                )}
              </ItemCardProductPromotion>
            )}
          </ItemCardProductPriceContainer>
        </ItemCardProductNameAndPriceContainer>

        <ItemCardProductDescription numberOfLines={2}>
          {product.description}
        </ItemCardProductDescription>

        {/* <ItemCardProductFooter>
          <Button contentStyle={{ width: 200, minHeight: 45, maxHeight: 45 }}>
            Adicionar ao carrinho
          </Button>
        </ItemCardProductFooter> */}
      </ItemCardProductContent>
    </ItemCardProductContainer>
  );
}
