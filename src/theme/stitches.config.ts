import { createStitches } from 'stitches-native';

import THEME from './index';

export const {
  styled,
  css,
  theme,
  createTheme,
  useTheme,
  ThemeProvider,
  config,
} = createStitches({
  theme: {
    colors: THEME.COLORS,
    fonts: THEME.FONT_FAMILY,
    fontSizes: THEME.FONT_SIZE,
  },
});
