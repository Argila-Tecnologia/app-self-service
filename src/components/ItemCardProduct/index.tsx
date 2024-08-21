import { IProductDTO } from '@dtos/product-dto';

import PizzaImg from '@assets/pizza-portuguesa.jpg';

import {
  ItemCardProductContainer,
  ItemCardProductContent,
  ItemCardProductDescription,
  ItemCardProductImage,
  ItemCardProductInfo,
  ItemCardProductTitle,
} from './styles';

interface ICardProductProps {
  product: IProductDTO;
}

export function ItemCardProduct({ product }: ICardProductProps) {
  return (
    <ItemCardProductContainer activeOpacity={0.7}>
      <ItemCardProductImage source={PizzaImg} resizeMode="cover" />

      <ItemCardProductContent>
        <ItemCardProductInfo>
          <ItemCardProductTitle>{product.name}</ItemCardProductTitle>
          <ItemCardProductDescription>
            {product.description}
          </ItemCardProductDescription>
        </ItemCardProductInfo>
      </ItemCardProductContent>
    </ItemCardProductContainer>
  );
}
