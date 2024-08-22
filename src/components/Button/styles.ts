import { styled } from '@theme/stitches.config';

import { TouchableOpacity } from 'react-native';

export const ButtonContainer = styled(TouchableOpacity, {
  width: '100%',
  minHeight: 60,
  maxHeight: 60,

  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$RED',

  borderRadius: 10,
});

export const ButtonText = styled('Text', {
  fontFamily: '$REGULAR',
  fontSize: '$MD',
  color: '$WHITE',
});
