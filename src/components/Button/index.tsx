import { TouchableOpacityProps } from 'react-native';

import { Loading } from '@components/Loading';

import { ButtonContainer, ButtonText } from './styles';
import { ReactNode } from 'react';

interface IButtonProps extends TouchableOpacityProps {
  children: ReactNode;
  loading?: boolean;
  contentStyle?: NonNullable<unknown>;
}

export function Button({
  children,
  loading = false,
  contentStyle = {},
  ...rest
}: IButtonProps) {
  return (
    <ButtonContainer
      style={contentStyle}
      disabled={loading}
      activeOpacity={0.7}
      {...rest}
    >
      {loading ? <Loading /> : <ButtonText>{children}</ButtonText>}
    </ButtonContainer>
  );
}
