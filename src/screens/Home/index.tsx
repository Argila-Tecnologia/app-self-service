import { useCallback, useState } from 'react';

import { fakeCategoriesData, fakeProductsData } from '@utils/fake-data';

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
  HomeProductsList,
} from './styles';
import { CardProduct } from '@components/CardProduct';

const DATA_CATEGORIES_FAKE = fakeCategoriesData();
const DATA_PRODUCTS_FAKE = fakeProductsData();

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
            data={DATA_CATEGORIES_FAKE}
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

        <HomeProductsContainer>
          <HomeProductsList
            data={DATA_PRODUCTS_FAKE}
            keyExtractor={(item) => item.id}
            renderItem={({ item: product }) => (
              <CardProduct product={product} />
            )}
          />
        </HomeProductsContainer>
      </HomeContent>
    </HomeContainer>
  );
}
