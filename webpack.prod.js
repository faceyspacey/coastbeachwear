var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var postcssModulesValues = require('postcss-modules-values');
var autoprefixer = require('autoprefixer');
var { resolve } = require('path');

module.exports = {
	context: resolve(__dirname),
	entry: ['./support/polyfill.js', './support/settings.js', './main/BeachHut.js'],
	output: {
		path: require("path").resolve("./dist"),
		filename: '[name].[chunkhash:6].js',
		publicPath: '/'
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new CleanWebpackPlugin(['dist'], { exclude:  ['fonts', 'media'] }),
		new webpack.optimize.OccurrenceOrderPlugin(),
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
						presets: ['react', 'es2015'],
						plugins: ['transform-class-properties']
					}
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract(['css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"'])
			}

		]
	},
}
