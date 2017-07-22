var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'inline-source-map',
	entry: [ 'webpack-hot-middleware/client', './client/client.js'],
	output: {
		path: require("path").resolve("./dist"),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					query: {
						presets: ['react', 'es2015', 'react-hmre']
					}
				}
			},
			{
				test: /\.css$/,
				use: [{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]_[local]_[hash:base64:5]'
						}
					}
				]
			}
			// {
			// 	test: /\.css$/,
			// 	use: ExtractTextPlugin.extract(['css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"'])
			// }
		]



			// {
			// 	test: /\.css$/,
			// 	use: ExtractTextPlugin.extract({
			// 		fallback: "style-loader",
			// 		use: 'css-loader'
			// 	})
			// }

	}
}
