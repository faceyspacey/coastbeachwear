var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var postcssModulesValues = require('postcss-modules-values');
var VirtualModulePlugin = require('virtual-module-webpack-plugin');
var autoprefixer = require('autoprefixer');
var { resolve } = require('path');


const SettingsJSON = Object.assign(
	require('./settings/general_settings.json'),
	require('./settings/production_settings.json')
)

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
		new HtmlWebpackPlugin(Object.assign({ template: 'main/index.ejs'}, SettingsJSON)),
		new VirtualModulePlugin({
      		moduleName: 'settings/settings.json',
      		contents: JSON.stringify(SettingsJSON)
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
