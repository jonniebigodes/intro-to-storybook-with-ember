// eslint-disable-next-line no-undef
module.exports = function (api) {
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV === "development" ? api.cache(false) : api.cache(true);
  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-react",
  ];
  const plugins = [];
  return {
    presets,
    plugins,
  };
};
