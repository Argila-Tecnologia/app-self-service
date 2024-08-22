import { ICategory } from '@dtos/category-dto';
import { IProductDTO } from '@dtos/product-dto';

export function fakeCategoriesData() {
  const DATA: ICategory[] = [
    {
      id: '1',
      name: 'Entrada',
    },
    {
      id: '2',
      name: 'Pizza',
    },
    {
      id: '3',
      name: 'Hamburger',
    },
    {
      id: '4',
      name: 'Sobremesa',
    },
    {
      id: '5',
      name: 'Sucos',
    },
    {
      id: '6',
      name: 'Sucos',
    },
    {
      id: '7',
      name: 'Sucos',
    },
    {
      id: '8',
      name: 'Sucos',
    },
    {
      id: '9',
      name: 'Sucos',
    },
    {
      id: '10',
      name: 'Sucos',
    },
  ];

  return DATA;
}

export function fakeProductsData() {
  const DATA: IProductDTO[] = [
    {
      id: '1',
      name: 'X-Burger',
      description: 'Hamburger tradicional',
      price: 1050,
      price_promotional: 500,
      image_url: '',
    },
    {
      id: '2',
      name: 'X-Burger',
      description: 'Hamburger tradicional',
      price: 10000,
      image_url: '',
    },
    {
      id: '3',
      name: 'X-Burger',
      description: 'Hamburger tradicional',
      price: 10000,
      image_url: '',
    },
    {
      id: '4',
      name: 'X-Burger',
      description: 'Hamburger tradicional',
      price: 10000,
      image_url: '',
    },
    {
      id: '5',
      name: 'X-Burger',
      description: 'Hamburger tradicional',
      price: 10000,
      image_url: '',
    },
  ];

  return DATA;
}
