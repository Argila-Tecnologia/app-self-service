import { styled } from '@theme/stitches.config';

export const ButtonContainer = styled('TouchableOpacity', {
  // width: '100%',
  flex: 1,

  /**
   * HACK PARA TRAVAR O BOTÃO CRESCER NA VERTICAL
   * E SÓ CRESCER NA HORIZONTAL COM O FLEX, DANDO
   * ASSIM MAIOR FLEXIBILIDADE PARA UTILIZAR O BOTÃO
   * EM LUGARES COM LARGURAS DIFERENTES
   */
  minHeight: 60,
  maxHeight: 60,

  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$RED',

  borderRadius: 10,

  variants: {
    size: {
      small: {
        minWidth: 150,
        maxWidth: 150,
      },
    },
  },
});

export const ButtonText = styled('Text', {
  fontFamily: '$REGULAR',
  fontSize: '$MD',
  color: '$WHITE',

  variants: {
    textSize: {
      XS: {
        fontSize: '$XS',
      },
      SM: {
        fontSize: '$SM',
      },
      MD: {
        fontSize: '$MD',
      },
      LG: {
        fontSize: '$LG',
      },
      XL: {
        fontSize: '$XL',
      },
      XXL: {
        fontSize: '$XXL',
      },
      XXXL: {
        fontSize: '$XXXL',
      },
    },
  },
});
