var webpack = require('webpack');
var { resolve } = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var postcssModulesValues = require('postcss-modules-values');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var VirtualModulePlugin = require('virtual-module-webpack-plugin');

const settingsJSON = Object.assign(
	require('./settings/general_settings.json'),
	require('./settings/development_settings.json')
)

console.log(settingsJSON);

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
		new HtmlWebpackPlugin(Object.assign({ template: 'main/index.ejs'}, settingsJSON)),
		new VirtualModulePlugin({
      		moduleName: 'settings/settings.json',
      		contents: JSON.stringify(settingsJSON)
    	})
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
		]
	},
}
