const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: ['babel-loader']
    },{
      test: /\.(sa|sc|c)ss$/,
      use: [
        'css-loader',
        {
          loader: 'postcss-loader',
            options: {
                plugins: function () {
                    return [
                        require('autoprefixer'),
                        require('cssnano')({preset: ['default', {discardComments: {removeAll: true}}]})
                    ];
                }
            }
        },        
          'sass-loader'
      ]      
    }]
  },
  devServer: {
    contentBase:  path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    publicPath: '/',
    port: 3001
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html" //source html
    }),
    new HtmlWebpackPlugin({
      template: "src/test.html", //source html
      filename: 'static/test.html'
    }),    
    new CleanWebpackPlugin()
    

  ],
  
};