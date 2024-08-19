import { StatusBar } from 'react-native';

import { theme, ThemeProvider } from '@theme/stitches.config';

import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

// import { Routes } from '@routes/index';

import { HomeScreen } from '@screens/Home';

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
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <HomeScreen />
      {/* <Routes /> */}
    </ThemeProvider>
  );
}
