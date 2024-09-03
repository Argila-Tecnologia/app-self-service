import { ComponentProps, ReactNode } from 'react';

import { TouchableOpacityProps } from 'react-native';

import { Loading } from '@components/Loading';

import { ButtonContainer, ButtonText } from './styles';

interface IButtonProps
  extends ComponentProps<typeof ButtonContainer>,
    TouchableOpacityProps {
  children: ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  textSize?: 'XS' | 'SM' | 'MD' | 'LG' | 'XL' | 'XXL' | 'XXXL';
}

export function Button({
  children,
  isLoading = false,
  isDisabled = false,
  textSize = 'MD',
  ...rest
}: IButtonProps) {
  return (
    <ButtonContainer
      disabled={isLoading}
      is_disabled={isDisabled}
      activeOpacity={0.7}
      {...rest}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <ButtonText textSize={textSize}>{children}</ButtonText>
      )}
    </ButtonContainer>
  );
}
