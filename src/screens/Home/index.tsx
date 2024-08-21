import { useCallback, useState } from 'react';

import { Header } from '@components/Header';

import { MenuScreen } from '@screens/Home/subscreens/Menu';

import {
  HomeCategoriesContainer,
  HomeMenu,
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

export function HomeScreen() {
  const [menuSelected, setMenuSelected] = useState('');

  // FUNCTIONS
  const handleMenuSelected = useCallback((menuSelected: string) => {
    setMenuSelected(menuSelected);
  }, []);
  // END FUNCTIONS

  return (
    <HomeContainer>
      <Header isSearchVisible />

      <HomeContent>
        <HomeCategoriesContainer>
          <HomeMenu>
            <HomeCategoryItemButton
              selected={menuSelected === 'highlights'}
              onPress={() => {
                handleMenuSelected('highlights');
              }}
            >
              <HomeCategoryItemButtonText>Destaques</HomeCategoryItemButtonText>
            </HomeCategoryItemButton>

            <HomeCategoryItemButton
              selected={menuSelected === 'menu'}
              onPress={() => {
                handleMenuSelected('menu');
              }}
            >
              <HomeCategoryItemButtonText>Cardápio</HomeCategoryItemButtonText>
            </HomeCategoryItemButton>

            <HomeCategoryItemButton
              selected={menuSelected === 'offers'}
              onPress={() => {
                handleMenuSelected('offers');
              }}
            >
              <HomeCategoryItemButtonText>Ofertas</HomeCategoryItemButtonText>
            </HomeCategoryItemButton>
          </HomeMenu>

          <HomeFooterContainer>
            <HomeFooterItemButton>
              <HomeFooterItemButtonText>Sobre</HomeFooterItemButtonText>
            </HomeFooterItemButton>

            <HomeFooterNameProductText>Self</HomeFooterNameProductText>
          </HomeFooterContainer>
        </HomeCategoriesContainer>

        <HomeProductsContainer>
          <MenuScreen />
        </HomeProductsContainer>
      </HomeContent>
    </HomeContainer>
  );
}
