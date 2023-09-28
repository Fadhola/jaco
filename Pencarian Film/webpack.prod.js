const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config');
const plugins = require('./webpack.plugins');

module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: plugins
});
