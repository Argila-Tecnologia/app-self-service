import { StatusBar } from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { theme, ThemeProvider } from '@theme/stitches.config';

import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

import { Routes } from '@routes/index';

import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading size="large" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
          hidden
        />

        <Routes />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
