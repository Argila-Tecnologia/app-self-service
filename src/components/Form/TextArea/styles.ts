import { styled } from '@theme/stitches.config';

import { TextInput } from 'react-native';

export const TextAreaContainer = styled('View', {
  flex: 1,

  minHeight: 100,
  maxHeight: 100,

  borderWidth: 1,
  borderRadius: 10,
  borderColor: '$GRAY_600',

  padding: 10,

  variants: {
    error: {
      true: {
        borderColor: '$RED_600',
      },
    },
  },
});

export const TextAreaInput = styled(TextInput, {
  fontFamily: '$REGULAR',
  fontSize: '$MD',
  color: '$BLACK',
});
