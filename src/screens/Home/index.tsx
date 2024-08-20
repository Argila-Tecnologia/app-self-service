import { useCallback, useState } from 'react';

import { ICategory } from '@dtos/category-dto';

import { Header } from '@components/Header';

import {
  HomeCategoriesContainer,
  HomeCategoriesList,
  HomeCategoryItemButton,
  HomeCategoryItemButtonText,
  HomeContainer,
  HomeContent,
  HomeFooterContainer,
  HomeFooterItemButton,
  HomeFooterItemButtonText,
  HomeFooterNameProductText,
  HomeProductsContainer,
} from './styles';

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

export function HomeScreen() {
  const [categorySelected, setCategorySelected] = useState('');

  // FUNCTIONS
  const handleCategorySelected = useCallback((categorySelected: string) => {
    setCategorySelected(categorySelected);
  }, []);
  // END FUNCTIONS

  return (
    <HomeContainer>
      <Header isSearchVisible />

      <HomeContent>
        <HomeCategoriesContainer>
          <HomeCategoriesList
            contentContainerStyle={{
              paddingTop: 2,
            }}
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item: category }) => (
              <HomeCategoryItemButton
                selected={category.id === categorySelected}
                onPress={() => {
                  handleCategorySelected(category.id);
                }}
              >
                <HomeCategoryItemButtonText>
                  {category.name}
                </HomeCategoryItemButtonText>
              </HomeCategoryItemButton>
            )}
          />

          <HomeFooterContainer>
            <HomeFooterItemButton>
              <HomeFooterItemButtonText>Sobre</HomeFooterItemButtonText>
            </HomeFooterItemButton>

            <HomeFooterNameProductText>SpaceTeam</HomeFooterNameProductText>
          </HomeFooterContainer>
        </HomeCategoriesContainer>

        <HomeProductsContainer></HomeProductsContainer>
      </HomeContent>
    </HomeContainer>
  );
}
