import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';

// import { useTheme } from '@theme/stitches.config';

export function Routes() {
  // const themeStitches = useTheme();

  // const theme = DefaultTheme;
  // theme.colors.background = themeStitches.colors.GRAY_500;

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: themeStitches.colors.GRAY_500,
      }}
    >
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
      ;
    </View>
  );
}
