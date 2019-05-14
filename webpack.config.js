const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
  entry: './components/src/index.jsx',
  output: {
    path: path.resolve(__dirname),
    filename: 'static/chatbot.[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
	  rules: [
	    {
	      test: /\.jsx?$/,
	      exclude: /node_modules/,
	      use: { loader: 'babel-loader' }
	    },
	    {
 		 		test: /\.css$/,
  			// loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' 
  			use: ['style-loader', 'css-loader']
			}
	  ]
	},
	plugins: [
		new CleanWebpackPlugin({
			verbose: true,
			cleanOnceBeforeBuildPatterns: ['./static/*'],
		}),
		new HtmlWebpackPlugin({
			filename: './index.html',
			template: './index-template.html'
		})
	]
};