const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = false;

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          isProd
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProd,
              importLoaders: 1
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !isProd
            }
          }
        ]
      }
    ]
  },

  plugins: [
    isProd &&
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      })
  ].filter(Boolean)
};
