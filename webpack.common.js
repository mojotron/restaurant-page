const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/controller.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
};
