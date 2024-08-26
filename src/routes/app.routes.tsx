import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '@screens/Home';
import { DetailProductScreen } from '@screens/DetailProduct';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="homeScreen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Screen name="homeScreen" component={HomeScreen} />
      <Screen name="detailProductScreen" component={DetailProductScreen} />
    </Navigator>
  );
}
