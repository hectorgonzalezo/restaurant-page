const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
		createWebpage: './src/createWebpage.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test:  /\.(png|svg|jpg|jpeg|gir)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
	devtool: 'inline-source-map',
	devServer: {
		static: '.dist',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Restaurant',
		}),
	],
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	optimization: {
		runtimeChunk: 'single',
	},
};
