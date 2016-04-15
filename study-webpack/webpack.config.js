var path = require('path');
var config = {
	entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
		path.resolve(__dirname, 'app/main.js')
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	module: {
		// loaders: [{
		// 	test: /\.jsx?$/, //用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
		// 	loader: 'babel-loader' //加载模块 'babel' 是 'babel-loader' 的缩写
		// }]
		
		loaders: [
			{ 
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				// query:{
				// 	presets:['react']
				// }
			},
			{ test: /\.css$/, loader: 'style-loader!css-loader' }
		]
	}
}

module.exports = config;