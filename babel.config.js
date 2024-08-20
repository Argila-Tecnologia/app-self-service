module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
	          // 'ALIAS DE MAPEAMENTO': 'ENDEREÇO QUE VAI SER APONTADO'
            '@assets': './src/assets',
            '@components': './src/components',
            '@database': './src/database',
            '@dtos': './src/dtos',
            '@hooks': './src/hooks',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@storage': './src/storage',
            "@theme": './src/theme',
            '@utils': './src/utils'
          },
        }
      ],
    ],
  };
};
