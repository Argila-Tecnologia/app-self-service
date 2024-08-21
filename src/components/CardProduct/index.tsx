import { IProductDTO } from '@dtos/product-dto';
import { CardProductContainer } from './styles';

interface ICardProductProps {
  product: IProductDTO;
}

export function CardProduct({ product }: ICardProductProps) {
  return <CardProductContainer></CardProductContainer>;
}
