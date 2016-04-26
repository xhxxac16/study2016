var webpack = require('webpack');
var devFlagPlugin = new webpack.DefinePlugin({  
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var CommonsChunkPlugin =require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
	enry: {
		bundle: './main.js',
		bundle2: './main2.js'
	},
	output: {
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.js[x]?$/, // 加载babel-loader ，处理js或者jsx结尾的文件
				exclude: /node_modules/,
				// loader:'babel-loader?presets[]=es2015&presets[]=react',
				loader:'babel',
				query:{
					presets:['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader', //你需要两个加载器来转换css文件。第一个是CSS-loader读取css文件, 另一个是Style-loader，将style标签插入到html页面。不同加载器由感叹号链接。 
				loader: 'style-loader!css-loader?modules', //你需要两个加载器来转换css文件。第一个是CSS-loader读取css文件, 另一个是Style-loader，将style标签插入到html页面。不同加载器由感叹号链接。 
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192', //如果图片大小小于 8192字节,如篇会转化成一个base64的Data URL; 否则就转化成普通的URL.你看到的问号标记是用来将参数传到加载器里面去的。
			}
		]
	},
	// plugins:[
	// 	new uglifyJsPlugin({
	// 		compress:{
	// 			warnings: false
	// 		}
	// 	})
	// ]
	//plugins: [devFlagPlugin]
	// plugins:[
	// 	new HtmlwebpackPlugin({
	// 		title: 'Webpack-demos'
	// 	}),
	// 	new OpenBrowserPlugin({
	// 		URL: 'HTTP://localhost:8080'
	// 	})
	// ]
	plugins: [
		new CommonsChunkPlugin('init.js')
	]
};