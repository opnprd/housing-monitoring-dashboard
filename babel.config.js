module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/env',
      {},
    ]
  ];

  const plugins = [
    '@babel/transform-react-jsx',
  ];

  return {
    presets,
    plugins,
  };
};
