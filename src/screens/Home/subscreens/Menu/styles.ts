import { styled } from '@theme/stitches.config';

import { FlatList } from 'react-native';

import { IProductDTO } from '@dtos/product-dto';
import { ICategory } from '@dtos/category-dto';

export const MenuContainer = styled('View', {
  flex: 1,
  flexDirection: 'row',

  backgroundColor: '$GRAY_500',
});

export const MenuCategoriesList = styled(FlatList<ICategory>, {
  minWidth: 200,
  maxWidth: 200,

  flex: 1,
  flexDirection: 'column',

  backgroundColor: '$GRAY_300',
});

export const MenuCategoryItemButton = styled('TouchableOpacity', {
  width: '100%',
  minHeight: 90,
  maxHeight: 90,

  justifyContent: 'center',

  padding: 10,

  variants: {
    selected: {
      true: {
        backgroundColor: '$RED_600',
      },
    },
  },
}).attrs(() => ({
  activeOpacity: 0.7,
}));

export const MenuCategoryItemButtonText = styled('Text', {
  fontFamily: '$REGULAR',
  fontSize: '$MD',
  color: '$WHITE',
  textAlign: 'center',
  textTransform: 'uppercase',
});

export const MenuProductsList = styled(FlatList<IProductDTO>, {
  width: '100%',

  backgroundColor: '$GRAY_500',

  paddingHorizontal: 15,
});
