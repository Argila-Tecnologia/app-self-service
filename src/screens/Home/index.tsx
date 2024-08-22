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

enum MENU_CATEGORY {
  HIGHLIGHTS = 'highlights',
  MENU = 'menu',
  OFFERS = 'offers',
  NOTHING = '',
}

export function HomeScreen() {
  const [menuSelected, setMenuSelected] =
    useState<keyof typeof MENU_CATEGORY>('NOTHING');

  // FUNCTIONS
  const handleMenuSelected = useCallback(
    (menuSelected: keyof typeof MENU_CATEGORY) => {
      setMenuSelected(menuSelected);
    },
    [],
  );
  // END FUNCTIONS

  return (
    <HomeContainer>
      <Header isSearchVisible />

      <HomeContent>
        <HomeCategoriesContainer>
          <HomeMenu>
            <HomeCategoryItemButton
              selected={menuSelected === 'HIGHLIGHTS'}
              onPress={() => {
                handleMenuSelected('HIGHLIGHTS');
              }}
            >
              <HomeCategoryItemButtonText>Destaques</HomeCategoryItemButtonText>
            </HomeCategoryItemButton>

            <HomeCategoryItemButton
              selected={menuSelected === 'MENU'}
              onPress={() => {
                handleMenuSelected('MENU');
              }}
            >
              <HomeCategoryItemButtonText>Cardápio</HomeCategoryItemButtonText>
            </HomeCategoryItemButton>

            <HomeCategoryItemButton
              selected={menuSelected === 'OFFERS'}
              onPress={() => {
                handleMenuSelected('OFFERS');
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
          {menuSelected === 'MENU' && <MenuScreen />}
        </HomeProductsContainer>
      </HomeContent>
    </HomeContainer>
  );
}
