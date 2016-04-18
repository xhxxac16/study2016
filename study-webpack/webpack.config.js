var webpack = require('webpack');
var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var deps = [
	'react/dist/react.min.js',
	'react-router/dist/react-router.min.js',
	'moment/min/moment.min.js',
	'underscore/underscore-min.js',
];
var config = {
	entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
	resolve:{
		alias:{}
	},
	output: {
		path: path.resolve(__dirname, './build'),
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
			test: /\.js$/,
			loaders: ['react-hot', 'babel'],
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
		},
		{
			test:/\.(png|jpg)/,
			loader: 'url?limit=25000' //limit 参数是告诉它图片如果不大于 25KB 的话要自动在它从属的 css 文件中转成 BASE64 字符串。
		},
		{
			test: /\.woff$/,
			loader: 'url?limit=100000'
		},
		// 使用暴露全局加载器来暴露压缩版的 React JS，比如 react-router 需要这个。
		{
			test: path.resolve(node_modules_dir, deps[0]),
			loader: "expose?React"
		}],
		noParse:[],
		loaders:[]
	}
	// 输出压缩版
	output: {
		path: './dist',
		filename: 'awesomemular.min.js',
		libraryTarget: 'umd',
		library: 'Awesomemular',
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
		}),
	],
	// //避免合并大型依赖
	// externals: {
	// 	react: 'react',
	// 	'react/addons': 'react'
	// },
};
// 通过在第一部分路径的依赖和解压
// 就是你像引用 node 模块一样引入到你的代码中
// 然后使用完整路径指向当前文件，然后确认 Webpack 不会尝试去解析它
deps.forEach(function(dep){
	var depPath = path.resolve(node_modules_dir, dep);
	config.resolve.alias[dep.split(path.sep)[0]] = depPath;
	config.module.noParse.push(depPath);
});

module.exports = config;