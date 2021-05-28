const { name } = require("./package"); 
module.exports = {
  webpack: {
    //  configure: { /* Any webpack configuration options: https://webpack.js.org/configuration */ },
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.output.library = `${name}-[name]`;
      webpackConfig.output.libraryTarget = "umd";
      webpackConfig.output.jsonpFunction = `webpackJsonp_${name}`;
      webpackConfig.output.globalObject = "window"; 
      return webpackConfig;
    },
  },
  devServer: (_) => {
    const config = _;

    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
};
