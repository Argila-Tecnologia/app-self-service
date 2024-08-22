import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '@screens/Home';
import { DetailProductScreen } from '@screens/DetailProduct';
import { Test } from '@screens/Test';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="tes"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="tes" component={Test} />
      <Screen name="homeScreen" component={HomeScreen} />
      <Screen name="detailProductScreen" component={DetailProductScreen} />
    </Navigator>
  );
}
