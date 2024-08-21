import { useCallback, useState } from 'react';

import { fakeCategoriesData, fakeProductsData } from '@utils/fake-data';

import { ItemCardProduct } from '@components/ItemCardProduct';

import {
  MenuCategoriesList,
  MenuCategoryItemButton,
  MenuCategoryItemButtonText,
  MenuContainer,
  MenuProductsList,
} from './styles';

const DATA_CATEGORIES_FAKE = fakeCategoriesData();
const DATA_PRODUCTS_FAKE = fakeProductsData();

export function MenuScreen() {
  const [categorySelected, setCategorySelected] = useState('');

  // FUNCTIONS
  const handleCategorySelected = useCallback((categorySelected: string) => {
    setCategorySelected(categorySelected);
  }, []);
  // END FUNCTIONS

  return (
    <MenuContainer>
      <MenuCategoriesList
        data={DATA_CATEGORIES_FAKE}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: category }) => (
          <MenuCategoryItemButton
            selected={category.id === categorySelected}
            onPress={() => {
              handleCategorySelected(category.id);
            }}
          >
            <MenuCategoryItemButtonText>
              {category.name}
            </MenuCategoryItemButtonText>
          </MenuCategoryItemButton>
        )}
      />

      <MenuProductsList
        contentContainerStyle={{
          paddingVertical: 30,
        }}
        data={DATA_PRODUCTS_FAKE}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: product }) => (
          <ItemCardProduct product={product} />
        )}
      />
    </MenuContainer>
  );
}
