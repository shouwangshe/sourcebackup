//webpack的配置文件
//导入一个path模块
const path = require('path');
//引入webpack
const webpack = require('webpack');
//引入OpenBrowserPlugin插件
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
//导出模块
module.exports = {
	//入口文件
	entry : path.join(__dirname,'src/main.js'),
	//出口文件
	output : {
		//路径
		path :  path.join(__dirname, 'dist') ,
		//文件名
		filename : 'bundle.js'
	},
	//webpack-dev-server的配置
	devServer : {
		port : 8888,
		hot : true,
		inline : true
	},
	//loader配置
	module : {
		rules : [
			//css-loader的配置
			{
				test : /\.css$/,
				//webpack 1.x的写法，还是兼容的
				loader : "style-loader!css-loader"
				//webpack 2.x的写法
				// use : ["css-loader","style-loader"]
				// 'exclude' : /node_modules/  //排除node_modules
			},
			//less-loader配置
			{
				test : /\.less$/,
				loader : "style-loader!css-loader!less-loader",
				exclude : /node_modules/  //排除node_modules
			}
		]
	},

	//插件的配置
	plugins : [
		//内置的BannerPlugin插件
		new webpack.BannerPlugin('create by andy!!'),
		new OpenBrowserPlugin({url : "http://localhost:8888"})
	]
}