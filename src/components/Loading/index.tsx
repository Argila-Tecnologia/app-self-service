import { ActivityIndicator } from 'react-native';

import { LoadingContainer } from './styles';

interface ILoadingProps {
  size?: 'small' | 'large';
}

export function Loading({ size = 'small' }: ILoadingProps) {
  return (
    <LoadingContainer>
      <ActivityIndicator size={size} />
    </LoadingContainer>
  );
}
