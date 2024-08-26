import { Text } from 'react-native';

import { MagnifyingGlass, Notepad, Wallet } from 'phosphor-react-native';

import { useTheme } from '@theme/stitches.config';

import {
  HeaderActionButton,
  HeaderActionButtonText,
  HeaderActionsContainer,
  HeaderContainer,
  HeaderContent,
  HeaderHeaderTableNumberButton,
  HeaderHeaderTableNumberButtonText,
  HeaderLogo,
  HeaderSearchContainer,
  HeaderSearchContent,
  HeaderSearchInput,
  HeaderTableNumberContainer,
} from './styles';

interface IHeaderProps {
  isSearchVisible?: boolean;
}

export function Header({ isSearchVisible = false }: IHeaderProps) {
  const theme = useTheme();

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <Text>LOGO</Text>
        </HeaderLogo>

        <HeaderActionsContainer>
          <HeaderTableNumberContainer>
            <HeaderHeaderTableNumberButton>
              <HeaderHeaderTableNumberButtonText>
                MESA 01
              </HeaderHeaderTableNumberButtonText>
            </HeaderHeaderTableNumberButton>
          </HeaderTableNumberContainer>

          {isSearchVisible && (
            <HeaderSearchContainer>
              <MagnifyingGlass color={theme.colors.RED} size={30} />

              <HeaderSearchContent>
                <HeaderSearchInput placeholder="Buscar" />
              </HeaderSearchContent>
            </HeaderSearchContainer>
          )}

          <HeaderActionButton>
            <Wallet color={theme.colors.WHITE} size={30} />

            <HeaderActionButtonText>Minha conta</HeaderActionButtonText>
          </HeaderActionButton>

          <HeaderActionButton>
            <Notepad color={theme.colors.WHITE} size={30} />

            <HeaderActionButtonText>Pedido</HeaderActionButtonText>
          </HeaderActionButton>
        </HeaderActionsContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}
