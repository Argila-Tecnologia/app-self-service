import { TextInputProps } from 'react-native';

import { TextAreaContainer, TextAreaInput } from './styles';
import { useTheme } from '@theme/stitches.config';

interface ITextAreaProps extends TextInputProps {}

export function TextArea({ ...rest }: ITextAreaProps) {
  const theme = useTheme();

  return (
    <TextAreaContainer>
      <TextAreaInput
        multiline
        // PARA COLOCAR O CURSOR NO TOP
        textAlignVertical="top"
        autoCorrect={false}
        cursorColor={theme.colors.GRAY_600}
        {...rest}
      />
    </TextAreaContainer>
  );
}
