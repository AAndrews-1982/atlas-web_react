// Task 1 - Webpack.config.js

const path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'public') // Output directory
  }
};
