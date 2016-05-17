resolve 指定可以被 require 的文件后缀。比如 Hello.jsx 这样的文件就可以直接用 require(./Hello) 引用。

loaders 指定 jsx-loader 编译后缀名为 .jsx 的文件，建议给含有 JSX 的文件添加 .jsx 后缀，当然你也可以直接使用 .js 后缀， 相应的 test 配置正则要修改匹配就是。


监听编译: webpack -d --watch

https://segmentfault.com/a/1190000003768578
一、 npm init 会自动生成 package.json
二、npm install webpack --save-dev 本地安装webpack
三、npm install webpack-dev-server --save
四、npm install react --save
五、npm install babel-loader --save-dev
六、npm install babel-preset-react
运行
npm run dev

项目目录
/app
	main.js
	component.js
/build
	bundle.js (自动创建)
	index.html

package.json
webpack.config.js


package.json
{
  "scripts": {
    "build": "webpack",
    "dev": "webpack-dev-server --devtool eval --progress --colors --hot --content-base build"
  }
}
上述配置顶的意义：
1、webpack-dev-server - 在 localhost:8080 建立一个 Web 服务器
3、devtool eval - 为你的代码创建源地址。当有任何报错的时候可以让你更加精确地定位到文件和行号
4、progress - 显示合并代码进度
5、colors - 命令行中显示颜色！
6、content-base build - 指向设置的输出目录


https://fakefish.github.io/react-webpack-cookbook/index.html

加载css
npm install css-loader style-loader --save-dev

npm install sass-loader --save-dev

npm install --save-dev flowcheck-loader

安装加载器
npm install url-loader --save-dev

安装这个暴露全局加载器
npm install expose-loader --save-dev


windows下设置环境变量
SET NODE_ENV=production


console.log(process.env.NODE_ENV);

通过NODE_ENV可以来设置环境变量（默认值为development）。 一般我们通过检查这个值来分别对开发环境和生产环境下做不同的处理。可以在命令行中通过下面的方式设置这个值：

linux & mac: export NODE_ENV=production
windows:set NODE_ENV=production


http://zhizhi.betahouse.us/2015/09/27/yi-webpackde-demos/##demo08-environment-flags-source

webpack – 在开发时构建一次
webpack -p – 再生产环境中构建 (minification微小)
webpack --watch – 监听文件改动，持续构建
webpack -d – 引用源码的映射
webpack --colors – for making things pretty

demo08
# Linux & Mac
$ env DEBUG=true webpack-dev-server

# Windows
$ set DEBUG=true && webpack-dev-server


npm i -g react-hot-loader react babel-loader
React Hot Loader是一个webpack的插件，他可以让你在编辑react组件时，立即刷新而不会丢失状态

http://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651220238&idx=1&sn=ebdba528f199e10f6b273c3a6fd04650&scene=23&srcid=0419RbNuqzWx73S8nguyXweq#rd

Webpack 的两个主要思想：

所有的一切都是模块(module) —— 就像 JS 可以模块化一样，所有的一切 (CSS, Images, HTML) 都可以是模块。就是这样，你可以 require('myjsfile.js') 或者 require('myCSSfile.css')。这意味着我们可以把任何部件分割成更小的可管理的模块用来复用等等。

按需加载 通常来说模块打包只能将你所有的模块打包成单个大的”bundle.js”文件。但是在现实世界中，”bundle.js”可能达到 10MB-15MB 导致过长的加载时间。所以 Webpack 有专门的功能用来分割你的代码并且生成多个打包文件，同样也能异步加载部分模块，所以你只需要”按需加载”即可。


// 当代码更新的时候，这三种选项都会打包新的文件，但是又有不同。// 1. 不帮你刷新页面webpack-dev-server// 2. 直接帮你刷新整个页面webpack-dev-server --inline// 3. 仅仅刷新更新过的模块，如果需要的话再刷新整个页面webpack-dev-server --inline --