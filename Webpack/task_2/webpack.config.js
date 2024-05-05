// Task 1 - Webpack.config.js

const path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'public') // Output directory
  },
 module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          },
        ],
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
    ],
  },
};
