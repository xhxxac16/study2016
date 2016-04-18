var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var config = {
	entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
	resolve:{
		alias:{
			'react': pathToReact
		}
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	module: {
		loaders: [{
			test: /\.jsx?$/, //用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
			loader: 'babel', //加载模块 'babel' 是 'babel-loader' 的缩写
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react']
			}
		},
		{
			test: /\.jsx?$/,
			loaders: ['jsx?harmony&stripTypes', 'flowcheck'],
			exclude: /node_modules/
		},
		{
			test: /\.css$/, //Only .css files
			loader: 'style!css' //Run both loaders
		},
		//sass
		{
			test: /\.scss$/, 
			loader: 'style!css!sass' 
		},{
			test:/\.(png|jpg)/,
			loader: 'url?limit=25000' //limit 参数是告诉它图片如果不大于 25KB 的话要自动在它从属的 css 文件中转成 BASE64 字符串。
		}],
		noParse:[pathToReact]
	}
}

module.exports = config;