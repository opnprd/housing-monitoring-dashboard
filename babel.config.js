module.exports = function (api) {
  api.cache(true);

  const plugins = [
    '@babel/transform-react-jsx',
  ];

  return {
    plugins,
  };
};
