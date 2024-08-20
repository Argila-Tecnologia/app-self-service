import { Text } from 'react-native';

import { ShoppingCart, Wallet } from 'phosphor-react-native';

import { useTheme } from '@theme/stitches.config';

import {
  HeaderActionButton,
  HeaderActionButtonText,
  HeaderActionsContainer,
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
} from './styles';

export function Header() {
  const theme = useTheme();

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <Text>LOGO</Text>
        </HeaderLogo>

        <HeaderActionsContainer>
          <HeaderActionButton>
            <Wallet color={theme.colors.WHITE} size={30} />

            <HeaderActionButtonText>Minha conta</HeaderActionButtonText>
          </HeaderActionButton>

          <HeaderActionButton>
            <ShoppingCart color={theme.colors.WHITE} size={30} />

            <HeaderActionButtonText>Carrinho</HeaderActionButtonText>
          </HeaderActionButton>
        </HeaderActionsContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}
