const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.ts', 'jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[folder]__[local]--[hash:base64:5]',
              },
            },
          },
        ],
      }
    ]
  },
}

// const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   devServer: {
//     port: 3000
//   },
//   plugins: [
//     new HtmlWebpackPlugin({ template: './src/index.html' }),
//     new CleanWebpackPlugin()
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.(css|less)$/,
//         use: ['style-loader', "css-loader", "less-loader"]
//       },
//       {
//         test: /\.(jpg|jpeg|png|svg)/,
//         use: ["file-loader"]
//       }
//     ],
//   },
// };
