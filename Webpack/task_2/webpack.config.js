// Task 2 - Webpack.config.js

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


	// CSS loader -->
        test: /\.css$/, // Apply this rule to files ending in .css
        use: ['style-loader', 'css-loader'] // Use style-loader and css-loader for .css files
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Apply this rule to image files
         use: [
          {
        // Loader -->    
	    loader: 'file-loader',
            options: {
              name: '[name].[ext]', // Keep the original file name and extension
              outputPath: 'images/' // Output directory for images
            }
          },
          {
          // Add image-webpack-loader -->  
              loader: 'image-webpack-loader', // Use image-webpack-loader to optimize images
          },
        ],
      },
    ],
  },
};
