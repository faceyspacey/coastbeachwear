var webpack = require('webpack');
var path = require('path');
var { resolve } = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
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
	mode: 'development',
	devtool: 'eval-source-map',
	entry: [
		'./support/polyfill.js',
		'./main/BeachHut.js'
	],
	devServer: {
	  contentBase:  "./dist",
	  hot: true,
	  compress: true,
	  port: 3000
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new CleanWebpackPlugin(['dist'], { exclude:  ['fonts', 'media'] }),
		new HtmlWebpackPlugin(Object.assign({ 
			template: 'main/index.ejs',
			title: 'Hot Module Replacement'
		}, settingsJSON)),
		new VirtualModulePlugin({
      		moduleName: 'settings/settings.json',
      		contents: JSON.stringify(settingsJSON),
    	}),
    	new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						query: {
							presets: ['react', 'es2015'],
							plugins: ["react-hot-loader/babel", 'transform-class-properties']
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [{
						loader: 'style-loader',
						options: {
							hmr: true
						}
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
	}
}
