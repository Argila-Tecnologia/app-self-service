import { styled } from '@theme/stitches.config';

import { Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');

const CARDS_PER_ROW = 3;
const HORIZONTAL_PADDING_SCREEN = 80 * CARDS_PER_ROW;
const MARGIN = 6 * CARDS_PER_ROW;

const CARD_WIDTH =
  (dimensions.width - HORIZONTAL_PADDING_SCREEN - MARGIN) / CARDS_PER_ROW;

export const CardProductContainer = styled('TouchableOpacity', {
  width: CARD_WIDTH,
  height: 300,

  backgroundColor: '$GRAY_300',

  borderRadius: 10,

  padding: 16,

  margin: MARGIN,
});
