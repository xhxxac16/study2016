var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
	entry: {
		app: path.resolve(__dirname, 'app/main.js'),
		mobile: path.resolve(__dirname, 'app/mobile.js'),
		// 当 React 作为一个 node 模块安装的时候，
		// 我们可以直接指向它，就比如 require('react')
		vendors:['react']//其他库
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',//注意我们使用了变量
	},
	module: {
		loaders: [{
			test: /\.js$/,

			loader: 'babel', //加载模块 'babel' 是 'babel-loader' 的缩写
			// 这里再也不需通过任何第三方来加载
			exclude: [node_modules_dir],
			query: {
				presets: ['es2015', 'react']
			}
		}]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
	]
};

module.exports = config;