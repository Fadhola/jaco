const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config');
const plugins = require('./webpack.plugins');
const path = require('path'); 

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), 
    },
    compress: true,
    port: 8080, 
  },
  plugins: plugins
});
