// import { Header } from '@components/Header';

import { Text } from 'react-native';
import { HomeContainer } from './styles';

// import { HomeContainer } from './styles';

export function HomeScreen() {
  return (
    <HomeContainer>
      <Text style={{ color: '#000' }}>HOme</Text>
    </HomeContainer>
  );
  // return <HomeContainer>{/* <Header /> */}</HomeContainer>;
}
