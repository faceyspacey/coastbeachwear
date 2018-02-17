var webpack = require('webpack');
var { resolve } = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var postcssModulesValues = require('postcss-modules-values');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',
	entry: [ 'webpack-hot-middleware/client', './support/polyfill.js','./main/BeachHut.js'],
	output: {
		path: resolve("./dist"),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({ template: 'main/index.ejs'})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					query: {
						presets: ['react', 'es2015', 'react-hmre'],
						plugins: ['transform-class-properties']
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
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [postcssModulesValues, autoprefixer]
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

	},
}
